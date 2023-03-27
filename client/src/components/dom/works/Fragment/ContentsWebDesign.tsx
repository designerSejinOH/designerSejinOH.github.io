import * as S from '../styles'
import { Slide } from '@/components/dom/layout/Slide'
import { AiOutlineLink } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { Modal } from '@/components/dom/layout/Modal'
import { useState } from 'react'
import Image from 'next/image'

export const ContentsWebDesign = () => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState<number>(-1)
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
      title: '오픈소스랩 - Hongik Univ. Interactive Media Art Crew',
      subtitle: '웹 디자인 및 개발',
      list: ['/img/works/osl01.jpeg', '/img/works/osl02.jpeg', '/img/works/osl03.jpeg', '/img/works/osl04.jpeg'],
      link: 'https://hi-oslab.github.io',
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
