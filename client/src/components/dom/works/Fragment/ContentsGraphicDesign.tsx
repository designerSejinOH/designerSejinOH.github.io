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
      subtitle: '개인 프로젝트 : 브랜드 인터랙티브 프로모션',
      detail:
        '프라이탁 브랜드의 제품이 만들어지는 과정을 여러 인터랙션을 통해 시각화하였습니다. 프라이탁만의 업사이클링 방식을 구매자가 직접 경험하여 브랜드의 가치를 더욱 높이고자 하였습니다. 그래픽 요소는 3D 모델링을 통해 제작되었고 인터랙션은 프로세싱을 통해 직접 프로그래밍하여 구현하였습니다.',
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
      subtitle: '개인 실험 : 모바일 이벤트에 따라 변화하는 한글 조합',
      detail:
        '모바일 기기의 흔들림을 이벤트로 받아와 19개(초성)×21개(중성)×28개(종성)=11,172개의 한글 조합이 새롭게 생성되는 웹 캔버스 실험을 해보았습니다. 제작 및 구현은 p5.js를 사용하였습니다.',
      list: ['/img/works/typoHangeul.gif'],
      link: 'https://designersejinoh.github.io/Live/',
    },
    {
      title: '인터랙티브 모바일 타입페이스',
      subtitle: '개인 실험 : 모바일 기기의 기울기에 따른 제네레이티브 타입페이스',
      list: ['/img/works/typoMobile.jpeg'],
      detail:
        '모바일 기기의 기울기를 이벤트로 받아와 제네레이티브 타입페이스를 구현해보았습니다. 모바일 기울기를 원의 궤도로 맵핑하여 움직이게 하고 이 원이 타입페이스의 포인트를 밀어내게 하여 재너레이티브한 형태로 만들어지게 하였습니다. 제작 및 구현은 p5.js를 사용하였습니다.',
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
          field='GRAPHIC DESIGN'
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
