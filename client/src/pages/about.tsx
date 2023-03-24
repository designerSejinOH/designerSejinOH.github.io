import Logo from '@/components/canvas/Logo'
import Scene from '@/components/canvas/Scene'
import AboutContainer from '@/components/dom/about'
import { Float, OrbitControls, OrthographicCamera } from '@react-three/drei'
import { ScaledModel } from '@/templates/hooks/ScaledModel'
import Header from '@/components/dom/layout/Header'
import Footer from '@/components/dom/layout/Footer'

export default function Page(props) {
  return (
    <>
      <Header />
      <AboutContainer>
        <Scene>
          {/*
          //@ts-ignore */}
          <Float
            speed={3} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-2, 2]}>
            <ambientLight intensity={0.3} />
            <spotLight position={[50, 50, -30]} castShadow />
            <pointLight position={[-5, -10, -5]} color='blue' intensity={3} />
            <pointLight position={[0, -5, 5]} intensity={0.5} />
            <directionalLight position={[0, -5, 0]} color='red' intensity={3} />
            <ScaledModel ratio={20}>
              <Logo position={[0, 0, 0]} scale={0.4} />
            </ScaledModel>
          </Float>
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={5}
            enableDamping
            // enablePan={false}
            enableZoom={false}
            enableRotate={false}
            // autoRotate
            // autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2.2}
            // minZoom={50}
            // maxZoom={30}
          />
          {/*
         //@ts-ignore */}
          <OrthographicCamera makeDefault position={[-200, -100, 200]} zoom={30} near={1} far={10000} />
        </Scene>
      </AboutContainer>
      <Footer isHome={false} />
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'Umm I am ...' } }
}
