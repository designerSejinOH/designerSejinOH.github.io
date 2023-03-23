import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Edges, useGLTF } from '@react-three/drei'
import { LayerMaterial, Depth, Fresnel } from 'lamina'
import { GLTF } from 'three-stdlib'
import { useCursor } from '@react-three/drei'
import { RigidBody, RapierRigidBody } from '@react-three/rapier'
import { useRouter } from 'next/router'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    object_1: THREE.Mesh
  }
}

export default function Logo({ ...props }) {
  const mesh = useRef(null)
  const router = useRouter()
  const [hovered, hover] = useState(false)

  useCursor(hovered)

  const { nodes } = useGLTF('data/SEJINOH.glb') as GLTFResult

  const materialRef = useRef<THREE.Material>(null)
  const gradient = 0.02

  useFrame((state) => {
    const sin = Math.sin(state.clock.elapsedTime)
    const cos = Math.cos(state.clock.elapsedTime)
    if (materialRef.current) {
      materialRef.current.layers[0].origin.set(cos / 2, 0, 0)
      materialRef.current.layers[1].origin.set(cos, sin, cos)
      materialRef.current.layers[2].origin.set(sin, cos, sin)
      materialRef.current.layers[3].origin.set(cos, sin, cos)
    }
  })

  return (
    // <RigidBody {...props}>
    <group ref={mesh} {...props} dispose={null}>
      <mesh
        // onClick={() => {
        //   router.reload()
        // }}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}>
        <mesh castShadow receiveShadow geometry={nodes.object_1.geometry}>
          {hovered ? (
            <Edges geometry={nodes.object_1.geometry} />
          ) : (
            <>
              <LayerMaterial
                ref={materialRef}
                toneMapped={false}
                roughness={0.1}
                metalness={1}
                transparent={true}
                opacity={1}
                alphaTest={0.5}
                side={THREE.DoubleSide}
                key={undefined}
                map={undefined}
                fog={undefined}
                attach={undefined}
                args={undefined}
                onUpdate={undefined}
                dispose={undefined}
                clone={undefined}
                visible={undefined}
                uuid={undefined}
                type={undefined}
                specular={undefined}
                shininess={undefined}
                emissive={undefined}
                emissiveIntensity={undefined}
                emissiveMap={undefined}
                bumpMap={undefined}
                bumpScale={undefined}
                normalMap={undefined}
                normalMapType={undefined}
                normalScale={undefined}
                displacementMap={undefined}
                displacementScale={undefined}
                displacementBias={undefined}
                specularMap={undefined}
                envMap={undefined}
                combine={undefined}
                reflectivity={undefined}
                refractionRatio={undefined}
                wireframeLinecap={undefined}
                wireframeLinejoin={undefined}
                flatShading={undefined}
                lightMap={undefined}
                lightMapIntensity={undefined}
                aoMap={undefined}
                aoMapIntensity={undefined}
                alphaMap={undefined}
                wireframe={undefined}
                wireframeLinewidth={undefined}
                alphaToCoverage={undefined}
                blendDst={undefined}
                blendDstAlpha={undefined}
                blendEquation={undefined}
                blendEquationAlpha={undefined}
                blending={undefined}
                blendSrc={undefined}
                blendSrcAlpha={undefined}
                clipIntersection={undefined}
                clippingPlanes={undefined}
                clipShadows={undefined}
                colorWrite={undefined}
                defines={undefined}
                depthFunc={undefined}
                depthTest={undefined}
                depthWrite={undefined}
                polygonOffset={undefined}
                polygonOffsetFactor={undefined}
                polygonOffsetUnits={undefined}
                precision={undefined}
                premultipliedAlpha={undefined}
                dithering={undefined}
                shadowSide={undefined}
                vertexColors={undefined}
                stencilWrite={undefined}
                stencilFunc={undefined}
                stencilRef={undefined}
                stencilWriteMask={undefined}
                stencilFuncMask={undefined}
                stencilFail={undefined}
                stencilZFail={undefined}
                stencilZPass={undefined}
                userData={undefined}
                clearcoat={undefined}
                clearcoatMap={undefined}
                clearcoatRoughness={undefined}
                clearcoatRoughnessMap={undefined}
                clearcoatNormalScale={undefined}
                clearcoatNormalMap={undefined}
                ior={undefined}
                sheen={undefined}
                sheenColor={undefined}
                sheenRoughness={undefined}
                transmission={undefined}
                transmissionMap={undefined}
                attenuationDistance={undefined}
                attenuationColor={undefined}
                specularIntensity={undefined}
                specularColor={undefined}
                specularIntensityMap={undefined}
                specularColorMap={undefined}
                roughnessMap={undefined}
                metalnessMap={undefined}
                envMapIntensity={undefined}
                gradientMap={undefined}
                id={undefined}
                isMaterial={undefined}
                needsUpdate={undefined}
                version={undefined}
                copy={undefined}
                onBeforeCompile={undefined}
                customProgramCacheKey={undefined}
                setValues={undefined}
                toJSON={undefined}
                addEventListener={undefined}
                hasEventListener={undefined}
                removeEventListener={undefined}
                dispatchEvent={undefined}
                metal={undefined}
                sheenColorMap={undefined}
                sheenRoughnessMap={undefined}
                thickness={undefined}
                thicknessMap={undefined}
                iridescenceMap={undefined}
                iridescenceIOR={undefined}
                iridescenceThicknessRange={undefined}
                iridescenceThicknessMap={undefined}
                isMeshStandardMaterial={undefined}>
                <Depth
                  colorA='#0055ff'
                  colorB='black'
                  alpha={1}
                  mode='normal'
                  near={0.5 * gradient}
                  far={(2 * 10) / 5}
                  origin={[0, 0, 0]}
                />
                <Depth
                  colorA='blue'
                  colorB='#00ffaa'
                  alpha={1}
                  mode='add'
                  near={2 * gradient}
                  far={(5 * 10) / 5}
                  origin={[0, 1, 1]}
                />
                <Depth
                  colorA='green'
                  colorB='#e345ff'
                  alpha={1}
                  mode='add'
                  near={3 * gradient}
                  far={(6 * 10) / 5}
                  origin={[0, 1, -1]}
                />
                <Depth
                  colorA='white'
                  colorB='red'
                  alpha={1}
                  mode='overlay'
                  near={1.5 * gradient}
                  far={(3 * 10) / 5}
                  origin={[1, -1, -1]}
                />
                <Fresnel mode='add' color='white' intensity={0.5} power={1.5} bias={0.05} />
              </LayerMaterial>{' '}
            </>
          )}
        </mesh>
      </mesh>
    </group>
    // </RigidBody>
  )
}

useGLTF.preload('data/SEJINOH.glb')
