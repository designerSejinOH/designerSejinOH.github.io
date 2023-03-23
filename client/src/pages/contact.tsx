import AboutContainer from '@/components/dom/about'
import Footer from '@/components/dom/layout/Footer'
import Header from '@/components/dom/layout/Header'
import { useRouter } from 'next/router'

export default function Page(props) {
  const router = useRouter()
  return (
    <>
      <Header />
      <div className='flex flex-col w-full h-full p-10 md:p-20 mt-20 font-[hel-bd] gap-4'>
        <div className='flex w-full px-4 pt-3 pb-2 border rounded-full h-fit'>E-MAIL : ohsj1999@gmail.com</div>
        <div className='flex w-full px-4 pt-3 pb-2 border rounded-full  h-fit'>GITHUB : designerSejinOH</div>
        <div className='flex flex-col w-full px-4 pt-3 pb-2 border rounded-3xl  h-fit'>
          INSTAGRAM :<br />
          <button
            className='flex'
            onClick={() => {
              router.push('https://www.instagram.com/ohsj1999/')
            }}>
            @ohsj1999
          </button>
          <button
            className='flex'
            onClick={() => {
              router.push('https://www.instagram.com/designersejinoh/')
            }}>
            @designersejinoh
          </button>
        </div>
      </div>

      <Footer isHome={false} />
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'You need me ...' } }
}
