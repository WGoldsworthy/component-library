import * as THREE from 'three';
import React, { useMemo } from 'react';


function Stars({ count = 5000 }) {
    const positions = useMemo(() => {
      let positions = []
      for (let i = 0; i < count; i++) {
        positions.push(Math.random() * 10 * (Math.round(Math.random()) ? -40 : 40))
        positions.push(Math.random() * 10 * (Math.round(Math.random()) ? -40 : 40))
        positions.push(Math.random() * 10 * (Math.round(Math.random()) ? -40 : 40))
      }
      return new Float32Array(positions)
    }, [count])
    return (
      <points>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={['attributes', 'position']}
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={1} sizeAttenuation color="white" transparent opacity={0.8} />
      </points>
    )
  };

  export default Stars;