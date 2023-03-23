import * as S from '../styles'
import { Slide } from '@/components/dom/layout/Slide'
import { useRouter } from 'next/router'
import { AiOutlineLink } from 'react-icons/ai'

export const ContentsGraphicDesign = () => {
  const router = useRouter()
  const projects = [
    {
      title: 'FREITAG INTERACTIVE PROMOTION',
      subtitle: '개인 프로젝트 : 브랜드 프로모션 그래픽 디자인 + 인터랙션 구현 개발',
      list: [
        '/img/works/freitag01.jpeg',
        '/img/works/freitag02.jpeg',
        '/img/works/freitag03.jpeg',
        '/img/works/freitag04.jpeg',
        '/img/works/freitag05.jpeg',
        '/img/works/freitag06.jpeg',
        '/img/works/freitag07.jpeg',
        '/img/works/freitag08.jpeg',
        '/img/works/freitag09.jpeg',
        '/img/works/freitag10.jpeg',
      ],
      vimeo: 'https://vimeo.com/792529447',
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
                  router.push(item.vimeo)
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
