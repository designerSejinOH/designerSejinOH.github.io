import * as S from '../styles'
import { Slide } from '@/components/dom/layout/Slide'
import { AiOutlineLink } from 'react-icons/ai'
import { useRouter } from 'next/router'

export const ContentsWebDesign = () => {
  const router = useRouter()
  const projects = [
    {
      title: '국립현대미술관 서울 <프로젝트해쉬태그 2022>',
      subtitle: 'KOKO KILLING ISLAND 웹 디자인 및 개발',
      list: ['/img/works/koko01.jpeg', '/img/works/koko02.jpeg', '/img/works/koko03.jpeg', '/img/works/koko04.jpeg'],
      link: 'https://kokokillingis.land',
    },
    {
      title: '성동구소재 코로나현황 데이터 시각화',
      subtitle: '개인 프로젝트 : OpenAPI 실시간 데이터 시각화',
      list: ['/img/works/dds01.jpeg', '/img/works/dds02.jpeg', '/img/works/dds03.jpeg', '/img/works/dds04.jpeg'],
      link: 'https://sj-data-visual.vercel.app',
    },
    {
      title: 'Open Source Lab - Hongik Univ. Interactive Media Art Crew',
      subtitle: '웹 디자인 및 개발',
      list: ['/img/works/osl01.jpeg', '/img/works/osl02.jpeg', '/img/works/osl03.jpeg', '/img/works/osl04.jpeg'],
      link: 'https://hi-oslab.github.io',
    },
  ]

  return (
    <>
      <S.FieldContents>
        {projects.map((item, index) => (
          <S.FieldContent key={index}>
            <Slide list={item.list} />
            <S.FieldContentTitle>
              <S.FieldDetail>
                {item.title}
                <S.FieldContentSemiTitle>{item.subtitle}</S.FieldContentSemiTitle>
              </S.FieldDetail>
              <AiOutlineLink
                onClick={() => {
                  router.push(item.link)
                }}
                className='w-10 h-10 cursor-pointer text-[blue]'
                aria-label='behance'
              />
            </S.FieldContentTitle>
          </S.FieldContent>
        ))}
      </S.FieldContents>
    </>
  )
}
