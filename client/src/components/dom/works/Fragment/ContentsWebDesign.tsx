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
      detail:
        '국립현대미술관이 주최하고 현대자동차가 후원하는 공모사업 “프로젝트 해시태그 2022”에 선정되어 전시를 진행한 크립톤(Crypton) 팀의  ‘코코 킬링 아일랜드(Koko Killing Island)’ 웹 개발 협력으로 참여하였습니다. 코코킬링아일랜드를 가상에서 경험하고 NFT 거래소를 통해 코코킬링아일랜드산 별미 특산품을 신청할 수 있는 관광안내소(https://kokokillingis.land) 웹 사이트를 디자인 및 개발하였습니다.',
      list: ['/img/works/koko01.jpeg', '/img/works/koko02.jpeg', '/img/works/koko03.jpeg', '/img/works/koko04.jpeg'],
      link: 'https://kokokillingis.land',
    },
    {
      title: '성동구소재 코로나현황 데이터 시각화',
      subtitle: '개인 프로젝트 : OpenAPI 실시간 데이터 시각화',
      detail:
        '서울시 공공데이터포털에서 제공하는 성동구 소재 코로나 및 인구 밀집 현황 데이터를 실시간으로 시각화하여 제공하는 웹 사이트를 개발하였습니다. 데이터는 1시간마다 업데이트되며, 데이터를 파도와 건물로 시각화하여 제공함으로써 사용자가 쉽게 데이터를 이해할 수 있도록 하였습니다.',
      list: ['/img/works/dds01.jpeg', '/img/works/dds02.jpeg', '/img/works/dds03.jpeg', '/img/works/dds04.jpeg'],
      link: 'https://sj-data-visual.vercel.app',
    },
    {
      title: '오픈소스랩 - Hongik Univ. Interactive Media Art Crew',
      subtitle: '웹 디자인 및 개발',
      detail:
        '홍익대학교 인터랙티브 미디어 아트 크루인 오픈소스랩 홈페이지를 디자인 및 개발하였습니다. 오픈소스랩의 메인 로고인 동그라미, 세모, 네모가 마우스와 터치에 따라 움직이는 애니메이션을 메인으로 디자인하였고 반응형 레이아웃으로 디자인하여 모바일 환경에서도 적절하게 보여지도록 하였습니다.',
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
          field='WEB DESIGN'
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
