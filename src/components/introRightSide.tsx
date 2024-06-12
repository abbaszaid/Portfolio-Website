'use client';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Html, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useTheme } from 'next-themes'; // Import useTheme from next-themes
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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
  const mixer = useRef(new THREE.AnimationMixer(gltf)).current;
  const actions = useRef<THREE.AnimationAction[]>([]);

  useEffect(() => {
    if (animations) {
      actions.current = animations.map((animation) =>
        mixer.clipAction(animation)
      );
      // Play the standing animation by default
      actions.current[1].play();
    }
  }, [animations, mixer]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  const playAnimation = (index: number) => {
    actions.current.forEach((action, i) => {
      if (i === index) {
        action.reset().play();
      } else {
        action.stop();
      }
    });
  };

  const handlePointerOver = () => {
    if (inputValue === 'wave') {
      playAnimation(2); // 'waving' animation index
    } else if (inputValue === 'backflip') {
      playAnimation(0); // 'backflip' animation index (assuming 3 is the correct index)
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
      <primitive object={gltf} scale={5} />
    </group>
  );
}

export const CharacterSection = () => {
  const [inputValue, setInputValue] = useState('');
  const { theme } = useTheme(); // Get the current theme
  const [gltf, setGltf] = useState<THREE.Object3D | null>(null);
  const [animations, setAnimations] = useState<THREE.AnimationClip[]>([]);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      '/avatar.glb',
      (gltf) => {
        setGltf(gltf.scene);
        setAnimations(gltf.animations);
      },
      undefined,
      (error) => {
        console.error('Error loading GLTF:', error);
      }
    );
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setInputValue(value);
  };

  return (
    <div className="basis-1/2">
      <Canvas
        className="rounded-md"
        style={{
          width: '100%',
          height: '250px',
          background: theme === 'light' ? '#000000' : 'transparent',
        }}
      >
        <Suspense fallback={<Html>Loading...</Html>}>
          <PerspectiveCamera makeDefault position={[0, 6, 23]} />
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
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type 'wave' or 'backflip' to trigger animations"
        style={{ width: '100%', padding: '10px', marginTop: '30px' }}
      />
    </div>
  );
};
