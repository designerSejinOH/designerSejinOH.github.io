import Logo from '@/components/canvas/Logo'
import Scene from '@/components/canvas/Scene'
import AboutContainer from '@/components/dom/about'
import { Float, OrbitControls, OrthographicCamera, Plane } from '@react-three/drei'
import { ScaledModel } from '@/templates/hooks/ScaledModel'
import Header from '@/components/dom/layout/Header'
import Footer from '@/components/dom/layout/Footer'

export default function Page(props) {
  return (
    <>
      <Header />
      <AboutContainer>
        <Scene>
          <ambientLight intensity={0.3} />
          <pointLight position={[-5, -10, -5]} color='blue' intensity={3} />
          <pointLight position={[0, -5, 5]} intensity={0.5} />
          <directionalLight position={[0, -5, 0]} color='red' intensity={3} />
          {/* //
          @ts-ignore */}
          <Float>
            <ScaledModel ratio={100}>
              <Logo />
            </ScaledModel>
          </Float>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
            autoRotate={true}
            autoRotateSpeed={7}
          />
        </Scene>
      </AboutContainer>
      <Footer isHome={false} />
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'Umm I am ...' } }
}
