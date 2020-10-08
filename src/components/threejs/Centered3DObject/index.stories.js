import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import Centered3DObject from './index';
import Lights from '../Lights'

export default {
    title: 'threejs/Centered3DObject',
    component: Centered3DObject,
    decorators: [(Centered3DObject) => 
        <Canvas 
            style={{height: '100vh', background: 'C6DDF0'}}
            camera={{position: [0, 0, 120], fov: 70}}
        >
            <Lights />
            <Suspense fallback={null}>
                <Centered3DObject />
            </Suspense>
        </Canvas>
    ]
};

export const Primary = () => <Centered3DObject defaultObj={true} /> 