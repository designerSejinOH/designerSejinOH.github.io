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
      subtitle: '스타트업 Cuby팀 | UXUI 디자인 & 마크업 개발',
      detail:
        'CUBY는 3D 방 기반의 라이프로깅 SNS 서비스로 나만의 방을 자유롭게 꾸미고 친구들에게 공유하며 소통할 수 있는 모바일 앱입니다. 자신을 가장 잘 표현하는 수단은 ‘자신의 방’이라는 컨셉에서 시작하여 다양한 가구들과 소품을 통해 표현한 나만의 공간을 간단한 링크 하나로 누구에게나 공유할 수 있도록 제작한 서비스입니다. CUBY 팀에서 서비스 내에 전반적인 브랜딩과 로고를 디자인하고 UX/UI 디자인을 담당하였습니다. (0.0.1 버전까지 진행)',
      list: [
        '/img/works/cuby01.jpeg',
        '/img/works/cuby02.jpeg',
        '/img/works/cuby03.jpeg',
        '/img/works/cuby04.jpeg',
        '/img/works/cuby05.jpeg',
        '/img/works/cuby06.jpeg',
        '/img/works/cuby07.jpeg',
        '/img/works/cuby08.jpeg',
      ],
      link: 'https://apps.apple.com/kr/app/cuby-3d-%EB%B0%A9-%EB%AF%B8%EB%8B%88%ED%99%88%ED%94%BC-%EB%B0%A9%EA%BE%B8%EB%AF%B8%EA%B8%B0/id6444834157',
    },
    {
      title: 'Moozi Board : 콜라주, 소셜 프로필, 꾸미기',
      subtitle: '스타트업 Cuby팀 | UXUI 디자인 & 프론트엔드 개발',
      detail:
        'MooziBoard는 콜라주와 소셜 인터랙션을 결합한 SNS 서비스 모바일 앱입니다. 자신이 좋아하는 사진이나 글을 직접 찢거나 붙여서 만드는 콜라주 기법처럼 글, 사진, 브러쉬, 인터랙티브 스티커를 자신의 소셜 페이지에 자유롭게 배치하여 꾸미고 링크 하나로 누구에게나 공유할 수 있도록 제작하였습니다. 서비스의 전반적인 구조는 리액트와 Next.JS 및 WebGL 캔버스를 사용하는 Three.js 라이브러리를 통해 제작되었습니다.',
      list: [
        '/img/works/moozi01.jpeg',
        '/img/works/moozi02.jpeg',
        '/img/works/moozi03.jpeg',
        '/img/works/moozi04.jpeg',
        '/img/works/moozi05.jpeg',
        '/img/works/moozi06.jpeg',
        '/img/works/moozi07.jpeg',
        '/img/works/moozi08.jpeg',
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
              document.body.style.overflowY = 'hidden'
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
          field='UX | UI DESIGN'
          project={projects[isModalOpen].title}
          describe={projects[isModalOpen].subtitle}
          detail={projects[isModalOpen].detail}
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
