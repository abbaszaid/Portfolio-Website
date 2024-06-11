'use client';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  useFBX,
  useGLTF,
} from '@react-three/drei';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useTheme } from 'next-themes'; // Import useTheme from next-themes
import * as THREE from 'three';

extend({ CircleGeometry: THREE.CircleGeometry });

function Model({ animation }: { animation: THREE.AnimationClip }) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/final_model.glb');
  const mixer = useRef(new THREE.AnimationMixer(scene)).current;
  const action = useRef<THREE.AnimationAction | null>(null);

  useEffect(() => {
    if (animation) {
      action.current = mixer.clipAction(animation);
      action.current.play().paused = true; // Set to initial frame
    }
  }, [animation, mixer]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <group
      ref={group}
      onPointerOver={() => {
        if (action.current) {
          action.current.paused = false;
          action.current.reset().play();
        }
      }}
      onPointerOut={() => {
        if (action.current) {
          action.current.stop();
          action.current = mixer.clipAction(animation);
          action.current.play().paused = true;
        }
      }}
    >
      <primitive object={scene} scale={5} />
    </group>
  );
}

export const CharacterSection = () => {
  const wavingAnimation = useFBX('/waving.fbx').animations[0];
  const { animations: backflipAnimations } = useGLTF('/backflip.glb'); // Load backflip animation from GLB
  const backflipAnimation = backflipAnimations[0];
  const [currentAnimation, setCurrentAnimation] = useState(wavingAnimation);
  const [inputValue, setInputValue] = useState('');
  const { theme } = useTheme(); // Get the current theme

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setInputValue(value);
    if (value === 'backflip') {
      setCurrentAnimation(backflipAnimation);
    } else {
      setCurrentAnimation(wavingAnimation);
    }
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
          {/* Move the camera closer and position it higher */}
          <PerspectiveCamera makeDefault position={[0, 6, 23]} />
          <ambientLight intensity={3} />{' '}
          {/* Increase ambient light intensity */}
          <pointLight intensity={1.5} position={[10, 10, 10]} />{' '}
          {/* Increase point light intensity */}
          {/* Adjust the position of the character */}
          <group position={[0, -2, 12]}>
            <Model animation={currentAnimation} />
          </group>
          {/* Disable orbit controls */}
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
        placeholder="if (value == 'wave' or value == 'backflip') and hover"
        style={{ width: '100%', padding: '10px', marginTop: '30px' }}
      />
    </div>
  );
};

useGLTF.preload('/final_model.glb');
useFBX.preload('/waving.fbx');
useGLTF.preload('/backflip.glb');
