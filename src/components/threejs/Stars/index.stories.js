import * as THREE from 'three';
import React from 'react';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';
import { Canvas } from 'react-three-fiber';
import Stars from './index';
import CanvasWrapper from '../CanvasWrapper';

RectAreaLightUniformsLib.init();

export default {
    title: 'threejs/Stars',
    component: Stars,
    decorators: [(Stars) =>  
        <Canvas
                style={{ height: '100vh', background: 'black' }}
                camera={{ position: [0, 0, 8], fov: 40 }}
            >
                <pointLight intensity={0.1} position={[10, 10, 10]} />
                <pointLight intensity={0.1} position={[10, -10, -10]} />
                <rectAreaLight
                    intensity={3}
                    position={[0, 10, -10]}
                    width={30}
                    height={30}
                    onUpdate={(self) => self.lookAt(new THREE.Vector3(0, 0, 0))}
                />
                <Stars />
            </Canvas>
        ]
};

// We create a “template” of how args map to rendering
export const Primary = (args) => <Stars />;
