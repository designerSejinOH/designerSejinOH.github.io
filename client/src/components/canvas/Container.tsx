import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['12281_Container_v2_L2_1']: THREE.Mesh
    ['12281_Container_v2_L2_2']: THREE.Mesh
  }
}

export function Container({ color, ...props }) {
  const { nodes } = useGLTF('data/container.glb') as GLTFResult
  const [hovered, set] = useState(false)

  return (
    <group
      {...props}
      dispose={null}
      onHover={() => {
        set(true)
      }}>
      <mesh castShadow receiveShadow geometry={nodes['12281_Container_v2_L2_1'].geometry}>
        <meshPhysicalMaterial
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={1}
          roughness={0.1}
          transmission={0.9}
          opacity={0.5}
          transparent
          premultipliedAlpha
          envMapIntensity={1}
          alphaTest={0.5}
        />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes['12281_Container_v2_L2_2'].geometry}>
        <meshStandardMaterial attach='material' color='gray' />
      </mesh>
    </group>
  )
}

useGLTF.preload('data/container.glb')
