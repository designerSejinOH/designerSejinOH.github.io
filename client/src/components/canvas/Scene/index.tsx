import * as S from './styles'
import { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Cloud, OrbitControls, OrthographicCamera, Preload } from '@react-three/drei'

const Scene = ({ children, ...props }) => {
  const canvasRef = useRef()
  return (
    <Canvas
      {...props}
      ref={canvasRef}
      {...props}
      shadows
      // orthographic
      // camera={{ zoom: 30, position: [-200, 300, 200], near: 1, far: 10000 }}
    >
      {children}
      <Preload all />
    </Canvas>
  )
}

export default Scene
