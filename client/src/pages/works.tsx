import AboutContainer from '@/components/dom/about'
import Footer from '@/components/dom/layout/Footer'
import Header from '@/components/dom/layout/Header'
import WorksContainer from '@/components/dom/works'

export default function Page(props) {
  return (
    <>
      <Header />
      <WorksContainer />
      <Footer isHome={false} />
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'What I make ...' } }
}
