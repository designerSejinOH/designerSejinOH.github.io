import Scene from '@/components/canvas/Scene'
import { Debug, Physics, RigidBody } from '@react-three/rapier'
import { Center, Effects, Environment, OrthographicCamera, OrbitControls, Preload } from '@react-three/drei'
import LinkText from '@/components/canvas/LinkText'
import { useThree, extend } from '@react-three/fiber'
import { UnrealBloomPass } from 'three-stdlib'
import Header from '@/components/dom/layout/Header'
import { ScaledModel } from '@/templates/hooks/ScaledModel'
import { ScaledCamera } from '@/templates/hooks/ScaledCamera'
import Footer from '@/components/dom/layout/Footer'
import { useEffect, useState } from 'react'
import * as S from '@/components/dom/layout/styles'
extend({ UnrealBloomPass })

export default function Page(props) {
  const [WebDesign, turnWebDesign] = useState(false)
  const [UxUiDesign, turnUxUiDesign] = useState(false)
  const [MediaArt, turnMediaArt] = useState(false)
  const [GraphicDesign, turnGraphicDesign] = useState(false)
  const [bloom, turnBloom] = useState(false)

  const turnOFFBloom = () => {
    turnBloom(false)
    turnWebDesign(false)
    turnUxUiDesign(false)
    turnMediaArt(false)
    turnGraphicDesign(false)
  }
  const turnONBloom = () => {
    turnBloom(true)
    turnWebDesign(true)
    turnUxUiDesign(true)
    turnMediaArt(true)
    turnGraphicDesign(true)
  }
  useEffect(() => {
    if (WebDesign === true || UxUiDesign === true || MediaArt === true || GraphicDesign === true) {
      turnBloom(true)
    } else {
      turnBloom(false)
    }
  }, [WebDesign, UxUiDesign, MediaArt, GraphicDesign])
  // console.log('web' + WebDesign, 'UX' + UxUiDesign, 'Media' + MediaArt, 'Graphic' + GraphicDesign)
  return (
    <>
      <Header />
      <div className='w-full h-screen'>
        <Scene>
          <ambientLight intensity={0.3} />
          <pointLight position={[-5, -10, -5]} color='blue' intensity={3} />
          <pointLight position={[0, -5, 5]} intensity={0.5} />
          <directionalLight position={[0, -5, 0]} color='red' intensity={3} />
          <Environment preset='city' />
          <Physics>
            {/* <Debug /> */}
            <Effects disableGamma>
              {/* 
              // @ts-ignore */}
              <unrealBloomPass attachArray='passes' args={[undefined, 1, 0.5, 0]} />
            </Effects>
            <LinkText
              onClick={() => {
                turnWebDesign(!WebDesign)
              }}
              bloom={WebDesign}
              position={[0, 2, 0]}
              size={1.5}
              text={'WEB DESIGN'}
              mass={100}
            />
            <LinkText
              onClick={() => {
                turnUxUiDesign(!UxUiDesign)
              }}
              bloom={UxUiDesign}
              position={[0, 2, 0]}
              size={1.5}
              text={'UX|UI DESIGN'}
              mass={100}
            />
            <LinkText
              onClick={() => {
                turnMediaArt(!MediaArt)
              }}
              bloom={MediaArt}
              position={[0, 2, 0]}
              size={1.5}
              text={'MEDIA ART'}
              mass={100}
            />
            <LinkText
              onClick={() => {
                turnGraphicDesign(!GraphicDesign)
              }}
              bloom={GraphicDesign}
              position={[0, 2, 0]}
              size={1.5}
              text={'GRAPHIC DESIGN'}
              mass={100}
            />
            <RigidBody colliders='cuboid'>
              <Plane position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
            </RigidBody>
          </Physics>
          <OrbitControls enableDamping enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI / 2.2} />
          {/*
         //@ts-ignore */}
          <ScaledCamera />
        </Scene>
      </div>
      <Footer isHome={true} />
      {bloom ? (
        <S.BottomToSwitch
          onClick={() => {
            turnOFFBloom()
          }}>
          OFF
        </S.BottomToSwitch>
      ) : (
        <S.BottomToSwitch
          onClick={() => {
            turnONBloom()
          }}>
          ON
        </S.BottomToSwitch>
      )}
    </>
  )
}
export const Plane = ({ ...props }) => {
  return (
    <group {...props}>
      <mesh>
        <planeGeometry args={[1000, 1000]} />
        <meshBasicMaterial color='darkblue' transparent opacity={1} />
      </mesh>
    </group>
  )
}

export async function getStaticProps() {
  return { props: { title: 'SEJIN OH' } }
}
