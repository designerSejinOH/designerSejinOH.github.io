import ContactContainer from '@/components/dom/contact'
import Footer from '@/components/dom/layout/Footer'
import Header from '@/components/dom/layout/Header'
import { useRouter } from 'next/router'

export default function Page(props) {
  const router = useRouter()
  return (
    <>
      <Header />
      <ContactContainer />
      <Footer isHome={false} />
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'You need me ...' } }
}
