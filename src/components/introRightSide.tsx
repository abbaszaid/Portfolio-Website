'use client';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Html, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes'; // Import useTheme from next-themes
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import Loader from './loader';

extend({ CircleGeometry: THREE.CircleGeometry });

function Model({
  animations,
  inputValue,
  gltf,
}: {
  animations: THREE.AnimationClip[];
  inputValue: string;
  gltf: THREE.Object3D;
}) {
  const group = useRef<THREE.Group>(null);
  const mixer = useRef<THREE.AnimationMixer | null>(null);
  const actions = useRef<THREE.AnimationAction[]>([]);

  useEffect(() => {
    if (gltf) {
      mixer.current = new THREE.AnimationMixer(gltf);
      if (animations.length > 0) {
        actions.current = animations.map((animation) =>
          mixer.current!.clipAction(animation)
        );
        actions.current.forEach((action, index) => {
          if (index === 1) {
            // Play standing animation by default
            action.play();
          }
        });
      }
    }
  }, [gltf, animations]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  const playAnimation = (index: number) => {
    if (mixer.current) {
      const action = mixer.current.clipAction(animations[index]);
      if (action) {
        mixer.current.stopAllAction();
        action.reset().play();
      }
    }
  };

  const handlePointerOver = () => {
    if (inputValue === 'wave') {
      playAnimation(2); // 'waving' animation index
    } else if (inputValue === 'backflip') {
      playAnimation(0); // 'backflip' animation index
    }
  };

  const handlePointerOut = () => {
    playAnimation(1); // 'standing' animation index
  };

  return (
    <group
      ref={group}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <primitive object={gltf} scale={6} />
    </group>
  );
}

export const CharacterSection = () => {
  const [inputValue, setInputValue] = useState('');
  const { theme } = useTheme(); // Get the current theme
  const [gltf, setGltf] = useState<THREE.Object3D | null>(null);
  const [animations, setAnimations] = useState<THREE.AnimationClip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      '/avatar.glb',
      (gltf) => {
        setGltf(gltf.scene);
        setAnimations(gltf.animations);
        setLoading(false);
      },
      undefined,
      (error) => {
        console.error('Error loading GLTF:', error);
        setLoading(false);
      }
    );
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setInputValue(value);
  };

  return (
    <motion.div
      className="basis-1/2"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'tween',
        duration: 0.5,
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Canvas
            className="rounded-md"
            style={{
              width: '100%',
              height: '300px',
              background: theme === 'dark' ? 'transparent' : '#000000',
            }}
          >
            <Suspense fallback={<Html>Loading...</Html>}>
              <PerspectiveCamera makeDefault position={[0, 8, 26]} />
              <ambientLight intensity={3} />
              <pointLight intensity={1.5} position={[10, 10, 10]} />
              <group position={[0, -2, 12]}>
                {gltf && (
                  <Model
                    animations={animations}
                    inputValue={inputValue}
                    gltf={gltf}
                  />
                )}
              </group>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
              />
            </Suspense>
          </Canvas>
          <motion.input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="If (value == 'wave' or value == 'backflip') and hover"
            className="mt-6 w-full p-2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
            }}
          />
        </>
      )}
    </motion.div>
  );
};
