import * as S from '../styles'
import { Slide } from '@/components/dom/layout/Slide'
import { AiOutlineLink } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Modal } from '@/components/dom/layout/Modal'
import Image from 'next/image'

export const ContentsUXUIDesign = () => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState<number>(-1)

  const projects = [
    {
      title: 'Cuby : 3D 방, 미니홈피, 방 꾸미기',
      subtitle: '스타트업 Cuby팀 소속 - 브랜딩 & UX UI 디자인 & 마크업 개발 담당',
      list: [
        '/img/works/cuby01.jpeg',
        '/img/works/cuby02.jpeg',
        '/img/works/cuby03.jpeg',
        '/img/works/cuby04.jpeg',
        '/img/works/cuby05.jpeg',
      ],
      link: 'https://apps.apple.com/kr/app/cuby-3d-%EB%B0%A9-%EB%AF%B8%EB%8B%88%ED%99%88%ED%94%BC-%EB%B0%A9%EA%BE%B8%EB%AF%B8%EA%B8%B0/id6444834157',
    },
    {
      title: 'Moozi Board : 콜라주, 소셜 프로필, 꾸미기',
      subtitle: '스타트업 Cuby팀 소속 - UX UI 디자인 & 프론트엔드 개발 담당',
      list: [
        '/img/works/mz01.jpeg',
        '/img/works/mz02.jpeg',
        '/img/works/mz03.jpeg',
        '/img/works/mz04.jpeg',
        '/img/works/mz05.jpeg',
        '/img/works/mz06.jpeg',
      ],
      link: 'https://apps.apple.com/kr/app/moozi-board-%EC%BD%9C%EB%9D%BC%EC%A3%BC-%EC%86%8C%EC%85%9C-%ED%94%84%EB%A1%9C%ED%95%84-%EA%BE%B8%EB%AF%B8%EA%B8%B0/id1665667872',
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
