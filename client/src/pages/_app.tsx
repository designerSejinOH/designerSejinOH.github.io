import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/config'
import Frame from '@/components/dom/Frame'
import '@/styles/index.css'
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
})

export default function App({ Component, pageProps = { title: 'SEJIN OH' } }) {
  const ref = useRef()
  return (
    <>
      <Header title={pageProps.title} />

      <Frame ref={ref}>
        <AnimatedCursor
          //@ts-ignore
          color='255,255,255'
          innerSize={6}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          trailingSpeed={10}
          outerStyle={{
            border: '1px solid rgb(255,255,255)',
          }}
        />
        <Component {...pageProps} />
      </Frame>
    </>
  )
}
