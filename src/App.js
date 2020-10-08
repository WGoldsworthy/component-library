import * as THREE from 'three';
import React from 'react';
import { Suspense } from 'react'
import { Canvas } from 'react-three-fiber';
import Centered3DObject from './components/threejs/Centered3DObject'
import car from './assets/car.glb';

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3}/>
      <directionalLight position={[10,10,5]} intensity={1} />
      <directionalLight position={[0,10,0]} intensity={1.5} />
      <spotLight position={[1000, 0, 0]} intensity={1} />
    </>
  )
}

const CanvasContent = () => {
  return (
    <Centered3DObject pathToGLTF={car}/>
  )
}

function App() {
  return (
      <>
        <Canvas
          style={{height: '100vh', background: '#C6DDF0'}} 
          camera={{position: [0, 0, 120], fov: 70}}
        >
          <Lights />
          <Suspense fallback={null}>
            <CanvasContent />
          </Suspense>
        </Canvas>
      </>
  )
};

export default App;
