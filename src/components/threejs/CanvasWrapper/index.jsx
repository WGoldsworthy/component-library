import * as THREE from 'three';
import React, {Suspense} from 'react';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';
import { Canvas } from 'react-three-fiber';

RectAreaLightUniformsLib.init();

const CanvasWrapper = ({children}) => {
   return( <>
            <Canvas
                style={{ height: '100vh', background: 'radial-gradient(circle, rgba(160,220,245,1) 14%, rgba(0,154,217,1) 100%)' }}
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
                <Suspense fallback={null}>
                    {children}
                </Suspense>

            </Canvas>
        </>
   )
}

export default CanvasWrapper;