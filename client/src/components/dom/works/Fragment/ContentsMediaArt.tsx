import * as S from '../styles'
import { Slide } from '@/components/dom/layout/Slide'
import { useRouter } from 'next/router'
import { AiOutlineLink } from 'react-icons/ai'
import { useState } from 'react'
import { Modal } from '@/components/dom/layout/Modal'
import Image from 'next/image'

export const ContentsMediaArt = () => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState<number>(-1)
  const projects = [
    {
      title: '끌력 : 서로가 서로를 이끄는 힘 - 소모임 연합 전시',
      subtitle: 'DDP SEOUL DESIGN 2022 선정작 - 전시 기획 및 총괄',
      detail:
        '“끌력 : 서로가 서로를 이끄는 힘”은 10월 말 서울디자인 재단에서 진행된 DDP 서울디자인 2022 협력프로그램에 선정되어 진행된 전시로 홍익대학교 조형대학 소모임 오픈소스랩, MXS 그리고 PRIZM이 연합하여 진행되었습니다. 각자 다른 개성을 지닌 소모임들이 만나 서로가 서로의 영감이 되어주고 긍정적인 방향으로 이끄는 힘에 대한 이야기를 파노라마 LED 디스플레이 - DDP 화상온 스튜디오를 통해 표현하고자 하였습니다.',
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
      link: 'https://vimeo.com/793291700',
    },
    {
      title: '마음의 일었던 파동 - 사운드 미디어 아트',
      subtitle: '조치원 문화정원 水談 - 물이야기전 출품작',
      detail:
        '“마음에 일었던 파동이 물처럼 흘러 잔잔해진다.” 평소에 말하고 싶지만 그렇지 못한 상황으로 인해 할 수 없어 답답했던 말들을 말함으로써 그 말들이 파동으로 점점 변화하고 물처럼 흘러가면서 정화되어 마음이 후련해질 수 있도록 하는 경험을 주고 싶었습니다. 사운드에 빛이 반응하여 파이프에 물이 내려가는 느낌을 보여준 피지컬 작업과 실시간으로 파동의 그래픽이 사운드에따라 변화하는 실시간 프로젝션 맵핑 작업 두가지를 제작하였습니다.',
      list: [
        '/img/works/mindwave01.jpeg',
        '/img/works/mindwave02.jpeg',
        '/img/works/mindwave03.jpeg',
        '/img/works/mindwave04.jpeg',
        '/img/works/mindwave05.jpeg',
      ],
      link: 'https://vimeo.com/793054998',
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
          field='MEDIA ART'
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
