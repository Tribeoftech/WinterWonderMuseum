import React from 'react'

import chrisScene from '../assets/3d/IMG_1280_default.glb';
import { useGLTF } from '@react-three/drei';

const Chris = () => {
    const { scene, animations } = useGLTF(chrisScene);
  return (
    <mesh>
        <primitive object={scene} />

    </mesh>
  )
}

export default Chris