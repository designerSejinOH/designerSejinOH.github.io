import * as S from './styles'
import { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Cloud, OrbitControls, OrthographicCamera, Preload } from '@react-three/drei'
import { Loader } from '../Loader/Loader'

const Scene = ({ children, ...props }) => {
  const canvasRef = useRef()
  return (
    <>
      <Loader />
      <Canvas
        {...props}
        ref={canvasRef}
        {...props}
        shadows
        // orthographic
        // camera={{ zoom: 30, position: [-200, 300, 200], near: 1, far: 10000 }}
      >
        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </>
  )
}

export default Scene
