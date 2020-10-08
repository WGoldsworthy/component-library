import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { useGLTF } from '@react-three/drei'
import car from '../../../assets/car.glb'

/* 
    A Centered spinning 3D model using ThreeJS
    - Takes either a path to the gltf file that is in the public folder
        or an imported glb file from within src
        e.g. import diamond from './assets/diamond.glb'

    https://glb-packer.glitch.me/ - Great site to convert gltf and textures to glb

    defaultObj - Used to load a default Object (car) - Used for storybook
*/

const Centered3DObject = ({pathToGLTF, defaultObj = false}) => {
  const ref = useRef();
  const gltf = useGLTF(defaultObj ? car : pathToGLTF);

  useFrame(() => (ref.current.rotation.y += 0.01))
  
  return (
        <group position={[0, 50, -30]}>
            <mesh ref={ref} position={[0, -80, 0]}>
                <primitive object={gltf.scene} dispose={null}/>
            </mesh>
        </group>
    )
}

export default Centered3DObject;