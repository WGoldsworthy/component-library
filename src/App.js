import * as THREE from 'three';
import React from 'react';
import { Suspense } from 'react'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';
import { Canvas } from 'react-three-fiber';
import Earth from './components/threejs/Earth/index';
// import CanvasWrapper from './components/threejs/CanvasWrapper';

function App() {
  return (
      <>
        <Earth />
      </>
  )
};

export default App;
