import AboutContainer from '@/components/dom/about'
import Footer from '@/components/dom/layout/Footer'
import Header from '@/components/dom/layout/Header'
import { useRouter } from 'next/router'

export default function Page(props) {
  const router = useRouter()
  return (
    <>
      <Header />
      <div className='flex flex-col w-full h-full p-10 md:p-20 mt-20 text-2xl font-[hel-bd] gap-4'>
        <div className='flex flex-col w-full px-4 pt-3 pb-2 border rounded-3xl  h-fit bg-white bg-opacity-20'>
          E-MAIL :
          <a className='flex underline text-xl font-[hel-th] cursor-pointer' href='mailto:ohsj1999@gamil.com'>
            ohsj1999@gamil.com
          </a>
        </div>
        <div className='flex flex-col w-full px-4 pt-3 pb-2 border rounded-3xl  h-fit bg-white bg-opacity-20'>
          GITHUB :
          <button
            className='flex underline text-xl font-[hel-th] cursor-pointer'
            onClick={() => {
              router.push('https://github.com/designerSejinOH')
            }}>
            designerSejinOH
          </button>
        </div>
        <div className='flex flex-col w-full px-4 pt-3 pb-2 border rounded-3xl  h-fit bg-white bg-opacity-20'>
          INSTAGRAM :<br />
          <button
            className='flex underline text-xl font-[hel-th] cursor-pointer mb-2'
            onClick={() => {
              router.push('https://www.instagram.com/ohsj1999/')
            }}>
            @ohsj1999
          </button>
          <button
            className='flex underline text-xl font-[hel-th] cursor-pointer'
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
