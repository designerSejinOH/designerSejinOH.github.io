import * as S from '../styles'
import { Slide } from '@/components/dom/layout/Slide'
import { useRouter } from 'next/router'
import { AiOutlineLink } from 'react-icons/ai'
import { useState } from 'react'
import { Modal } from '@/components/dom/layout/Modal'
import Image from 'next/image'

export const ContentsGraphicDesign = () => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState<number>(-1)
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
      link: 'https://vimeo.com/792529447',
    },
    {
      title: '인터랙티브 한글 타이포그래피',
      subtitle: '개인 실험 : 모바일 기기의 흔들림에 따라 변하는 한글 조합',
      list: ['/img/works/typoHangeul.gif'],
      link: 'https://designersejinoh.github.io/Live/',
    },
    {
      title: '인터랙티브 영어 타이포그래피',
      subtitle: '개인 실험 : 모바일 기기의 기울기에 따른 제네레이티브 타입페이스',
      list: ['/img/works/typoMobile.jpeg'],
      link: 'https://editor.p5js.org/SejinO/full/wEbrTUyGc',
    },
  ]
  return (
    <>
      <S.FieldContents>
        {projects.map((item, index) => (
          <S.FieldContent
            key={index}
            onClick={() => {
              setIsModalOpen(index)
            }}>
            <div className='relative items-center justify-center w-full cursor-pointer h-fit'>
              <Image src={item.list[0]} alt={''} width={1920} height={1080} />
            </div>
            <S.FieldContentTitle>
              <S.FieldDetail>
                {item.title}
                <S.FieldContentSemiTitle>{item.subtitle}</S.FieldContentSemiTitle>
              </S.FieldDetail>
              <AiOutlineLink className='w-10 h-10 cursor-pointer text-black' aria-label='behance' />
            </S.FieldContentTitle>
          </S.FieldContent>
        ))}
      </S.FieldContents>
      {isModalOpen !== -1 && (
        <Modal
          project={projects[isModalOpen].title}
          describe={projects[isModalOpen].subtitle}
          link={projects[isModalOpen].link}
          list={projects[isModalOpen].list}
          onClose={() => {
            setIsModalOpen(-1)
          }}
        />
      )}
    </>
  )
}
