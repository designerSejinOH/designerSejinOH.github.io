import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Edges, MeshReflectorMaterial, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
import { useCursor, Text3D, Center } from '@react-three/drei'
import { RigidBody, RapierRigidBody, CuboidCollider } from '@react-three/rapier'
import { useRouter } from 'next/router'
import { LayerMaterial, Depth, Fresnel } from 'lamina'
import { ScaledModel } from '@/templates/hooks/ScaledModel'

export default function LinkText({ bloom, size, text, ...props }) {
  const mesh = useRef<THREE.Mesh>()
  const router = useRouter()
  const [hovered, hover] = useState(false)

  useCursor(hovered)

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
    <RigidBody {...props}>
      <group ref={mesh} {...props} dispose={null}>
        {/* 
        //@ts-ignore */}
        <Center>
          <mesh onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
            <Text3D
              size={size}
              font={'data/HelveticaNeueLT Std Extended_Bold.json'}
              height={0.2}
              key={undefined}
              type={undefined}
              userData={undefined}
              name={undefined}
              args={undefined}
              material={undefined}
              attach={undefined}
              onUpdate={undefined}
              clear={undefined}
              geometry={undefined}
              raycast={undefined}
              clone={undefined}
              visible={undefined}
              uuid={undefined}
              id={undefined}
              copy={undefined}
              toJSON={undefined}
              addEventListener={undefined}
              hasEventListener={undefined}
              removeEventListener={undefined}
              dispatchEvent={undefined}
              parent={undefined}
              modelViewMatrix={undefined}
              normalMatrix={undefined}
              matrixWorld={undefined}
              matrixAutoUpdate={undefined}
              matrixWorldNeedsUpdate={undefined}
              castShadow={undefined}
              receiveShadow={undefined}
              frustumCulled={undefined}
              renderOrder={undefined}
              animations={undefined}
              customDepthMaterial={undefined}
              customDistanceMaterial={undefined}
              isObject3D={undefined}
              onBeforeRender={undefined}
              onAfterRender={undefined}
              applyMatrix4={undefined}
              applyQuaternion={undefined}
              setRotationFromAxisAngle={undefined}
              setRotationFromEuler={undefined}
              setRotationFromMatrix={undefined}
              setRotationFromQuaternion={undefined}
              rotateOnAxis={undefined}
              rotateOnWorldAxis={undefined}
              rotateX={undefined}
              rotateY={undefined}
              rotateZ={undefined}
              translateOnAxis={undefined}
              translateX={undefined}
              translateY={undefined}
              translateZ={undefined}
              localToWorld={undefined}
              worldToLocal={undefined}
              lookAt={undefined}
              add={undefined}
              remove={undefined}
              removeFromParent={undefined}
              getObjectById={undefined}
              getObjectByName={undefined}
              getObjectByProperty={undefined}
              getWorldPosition={undefined}
              getWorldQuaternion={undefined}
              getWorldScale={undefined}
              getWorldDirection={undefined}
              traverse={undefined}
              traverseVisible={undefined}
              traverseAncestors={undefined}
              updateMatrix={undefined}
              updateMatrixWorld={undefined}
              updateWorldMatrix={undefined}
              morphTargetInfluences={undefined}
              morphTargetDictionary={undefined}
              isMesh={undefined}
              updateMorphTargets={undefined}>
              {text}
              {!bloom ? (
                <LayerMaterial
                  ref={materialRef}
                  toneMapped={false}
                  roughness={0.0}
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
                    far={(2 * text.length) / 5}
                    origin={[0, 0, 0]}
                  />
                  <Depth
                    colorA='blue'
                    colorB='#00ffaa'
                    alpha={1}
                    mode='add'
                    near={2 * gradient}
                    far={(5 * text.length) / 5}
                    origin={[0, 1, 1]}
                  />
                  <Depth
                    colorA='green'
                    colorB='#e345ff'
                    alpha={1}
                    mode='add'
                    near={3 * gradient}
                    far={(6 * text.length) / 5}
                    origin={[0, 1, -1]}
                  />
                  <Depth
                    colorA='white'
                    colorB='red'
                    alpha={1}
                    mode='overlay'
                    near={1.5 * gradient}
                    far={(3 * text.length) / 5}
                    origin={[1, -1, -1]}
                  />
                  <Fresnel mode='add' color='white' intensity={0.5} power={1.5} bias={0.05} />
                </LayerMaterial>
              ) : (
                <meshStandardMaterial attach='material' color='gray' roughness={0.1} metalness={0.9} />
              )}
            </Text3D>
          </mesh>
        </Center>
      </group>
    </RigidBody>
  )
}
