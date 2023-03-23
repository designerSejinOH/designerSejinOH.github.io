import Logo from '@/components/canvas/Logo'
import Scene from '@/components/canvas/Scene'
import { OrbitControls } from '@react-three/drei'
import { useEffect } from 'react'
import Header from '@/components/dom/layout/Header'
import * as S from './styles'

const AboutContainer = ({ children, ...props }) => {
  return (
    <>
      <div className='w-full h-full pb-20 mt-20'>
        <S.Wrap>
          <div className='flex flex-col w-full h-full gap-4 md:flex-row'>
            <S.Aside>
              <div className=' pt-3 text-4xl leading-none font-[hel-bd]'>SEJIN OH </div>
              <div className='whitespace-pre text-md font-[bold]'>
                UX | UI DESIGNER , GRAPHIC DESIGNER <br />
                INTERACTIVE MEDIA ARTIST , <br />
                WEB DESIGNER & WEB DEVELOPER
              </div>
              <div className='text-xs md:text-md font-[light]'>
                SEJIN OH는 인터랙션 디자이너로 시각 및 산업 디자인을 공부하고 인터랙션 기획과 개발을 공부하고 있다.
                예술과 디자인을 통해 아름다운 것을 그려내고 기술과 개발을 통해 실질적으로 구현되도록 하는 과정을
                좋아한다. 현재 홍익대학교에서 디자인컨버전스학부에서 인터랙티브 미디어 디자인을 공부하고 있다. 또한
                홍익대학교 인터랙티브 미디어 아트 크루{' '}
                <a className='underline font-[medium]' href='https://hi-oslab.github.io'>
                  오픈소스랩
                </a>
                을 운영하고 있다.
              </div>
              <div className='text-xs md:text-md font-[light]'>
                Born in Seoul, republic of Korea in 1999, SEJIN OH is a interactive media designer. Main fields of work
                are web design, graphic design and media art. Now, He is studying colleage of design convergence at
                Hongik University. Also, He founded Interactive Media Art Crew{' '}
                <a className='underline font-[medium]' href='https://hi-oslab.github.io'>
                  Open Source Lab
                </a>{' '}
                at Hongik University and is currently a lead member.
              </div>
            </S.Aside>
            <S.Main>{children}</S.Main>
          </div>
          <S.Bside>
            <div className='flex flex-col w-full sm:flex-row gap-6'>
              <S.BsideBox>
                <S.BsideTitle> Projects</S.BsideTitle>
                <S.BsideContent>
                  <S.BsideContentTitle>2022.11</S.BsideContentTitle> <br /> MMCA 국립현대미술관 서울, 프로젝트 해시태그
                  2022
                  <br /> Koko Killing Island 웹 디자인 및 개발
                </S.BsideContent>
                <S.BsideContent>
                  <S.BsideContentTitle>2022.12</S.BsideContentTitle> <br /> CUBY : 나만의 3D 방을 만들 수 있는 앱 서비스
                  스타트업 <br /> UX UI 디자인 및 개발
                </S.BsideContent>
                <S.BsideContent>
                  <S.BsideContentTitle>2023.02</S.BsideContentTitle> <br /> MooziBoard : 콜라주, 소셜 프로필, 꾸미기 앱
                  서비스 스타트업 <br /> UX UI 디자인 및 개발
                </S.BsideContent>
              </S.BsideBox>
              <S.BsideBox>
                <S.BsideTitle> Experience</S.BsideTitle>
                <S.BsideContent>
                  <S.BsideContentTitle>2018.10 - now</S.BsideContentTitle> <br /> 홍익대학교 조형대학 인터랙티브
                  미디어아트 크루, <br /> Open Source Lab 설립 및 리드멤버 활동
                </S.BsideContent>
                <S.BsideContent>
                  <S.BsideContentTitle>2022.08</S.BsideContentTitle> <br /> JUNCTION ASIA 2022 해커톤, Amazon Web
                  Services 트랙 팀 <br />
                  CO-BUILDING : 실시간 팀플레이 3D 웹 스택 게임 - 인게임 디자인 및 개발
                </S.BsideContent>
              </S.BsideBox>
            </div>
            <S.BsideBox>
              <S.BsideTitle> Exhibition</S.BsideTitle>
              <S.BsideContent>
                <S.BsideContentTitle>2019.06 </S.BsideContentTitle>
                <br /> Open Source Lab 첫 미디어아트 전시, 시발점
              </S.BsideContent>
              <S.BsideContent>
                <S.BsideContentTitle>2020.07 </S.BsideContentTitle>
                <br /> Open Source Lab 인터랙티브 웹 전시, 만춘 : 지나가버린 봄
              </S.BsideContent>
              <S.BsideContent>
                <S.BsideContentTitle>2020.07 </S.BsideContentTitle>
                <br /> 조치원 문화정원 디지털 미디어아트 전시, 수담(水談) : 물 이야기 전
              </S.BsideContent>
              <S.BsideContent>
                <S.BsideContentTitle>2022.04 - 2022.05 </S.BsideContentTitle>
                <br /> BRT 작은미술관 미디어아트 전시, Vuja de : 익숙한 무엇을 낯설게 하는 과정
                <br /> 세종시문화재단 공간지원사업 선정작
              </S.BsideContent>
              <S.BsideContent>
                <S.BsideContentTitle>2022.10 </S.BsideContentTitle>
                <br /> DDP 서울디자인 2022 협력 프로그램 전시, 끌력 : 서로가 서로를 이끄는 힘
              </S.BsideContent>
              <S.BsideContent>
                <S.BsideContentTitle>2022.11 - 2023.04 </S.BsideContentTitle>
                <br /> 국립현대미술관 서울 프로젝트 해시태그 2022, 크립톤 : 코코 킬링 아일랜드
              </S.BsideContent>
              <S.BsideContent>
                <S.BsideContentTitle>2023.01 </S.BsideContentTitle>
                <br /> HCI Korea 2023 Creative Award Interactive Art Gallery
                <br /> Music Shower : 빛과 음악으로 샤워하다
              </S.BsideContent>
            </S.BsideBox>
          </S.Bside>
        </S.Wrap>
      </div>
    </>
  )
}

export default AboutContainer
