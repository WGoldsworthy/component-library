import * as THREE from 'three';
import React, { useRef, Suspense } from 'react';
import {useLoader, useFrame, Canvas} from 'react-three-fiber';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';

RectAreaLightUniformsLib.init()

const makeUrl = (file) => `https://raw.githubusercontent.com/flowers1225/threejs-earth/master/src/img/${file}.jpg`;

export function Earth2() {
    const ref = useRef()
    const [texture, bump, moon] = useLoader(THREE.TextureLoader, [
      makeUrl('earth4'),
      makeUrl('earth_bump'),
      'http://jaanga.github.io/moon/heightmaps/WAC_GLD100_E000N1800_004P-1024x512.png',
    ])
    useFrame(
      ({ clock }) =>
        (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z =
          Math.cos(clock.getElapsedTime() / 8) * Math.PI)
    )
    return (
      <group ref={ref}>
        <rectAreaLight
          intensity={1}
          position={[10, 10, 10]}
          width={10}
          height={1000}
          onUpdate={(self) => self.lookAt(new THREE.Vector3(0, 0, 0))}
        />
        <rectAreaLight
          intensity={1}
          position={[-10, -10, -10]}
          width={1000}
          height={10}
          onUpdate={(self) => self.lookAt(new THREE.Vector3(0, 0, 0))}
        />
        <mesh>
          <sphereBufferGeometry args={[2, 64, 64]} />
          <meshStandardMaterial map={texture} bumpMap={bump} bumpScale={0.05} />
        </mesh>
      </group>
    )
  }

const EarthCanvas = () => {
    return (
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
          <Earth2 />
        </Suspense>
      </Canvas>
    )
};

export default EarthCanvas;