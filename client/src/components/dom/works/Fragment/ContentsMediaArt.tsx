import * as S from '../styles'
import { Slide } from '@/components/dom/layout/Slide'
import { useRouter } from 'next/router'
import { AiOutlineLink } from 'react-icons/ai'

export const ContentsMediaArt = () => {
  const router = useRouter()
  const projects = [
    {
      title: '끌력 : 서로가 서로를 이끄는 힘 - 소모임 연합 전시',
      subtitle: 'DDP SEOUL DESIGN 2022 선정작 - 전시 기획 및 총괄',
      list: [
        '/img/works/ddp01.jpeg',
        '/img/works/ddp02.jpeg',
        '/img/works/ddp03.jpeg',
        '/img/works/ddp04.jpeg',
        '/img/works/ddp05.jpeg',
        '/img/works/ddp06.jpeg',
        '/img/works/ddp07.jpeg',
        '/img/works/ddp08.jpeg',
      ],
      vimeo: 'https://vimeo.com/793291700',
    },
    {
      title: '마음의 일었던 파동 - Interactive Media Art',
      subtitle: '조치원 문화정원 水談 - 물이야기전 출품작',
      list: [
        '/img/works/mindwave01.jpeg',
        '/img/works/mindwave02.jpeg',
        '/img/works/mindwave03.jpeg',
        '/img/works/mindwave04.jpeg',
        '/img/works/mindwave05.jpeg',
      ],
      vimeo: 'https://vimeo.com/793054998',
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
