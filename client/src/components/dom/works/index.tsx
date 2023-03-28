import Logo from '@/components/canvas/Logo'
import Scene from '@/components/canvas/Scene'
import { OrbitControls } from '@react-three/drei'
import { useEffect, useState } from 'react'
import Header from '@/components/dom/layout/Header'
import * as S from './styles'
import { AnimatePresence } from 'framer-motion'
import { FieldToggle } from './FieldToggle'
import { ContentsWebDesign, ContentsUXUIDesign, ContentsMediaArt, ContentsGraphicDesign } from './Fragment'

interface Props {
  children: React.ReactNode
}

const WorksContainer = ({ ...props }) => {
  const [isWebDesign, setIsWebDesign] = useState<Boolean>(true)
  const [isUXUIDesign, setIsUXUIDesign] = useState<Boolean>(true)
  const [isMediaArt, setIsMediaArt] = useState<Boolean>(true)
  const [isGraphicDesign, setIsGraphicDesign] = useState<Boolean>(true)

  return (
    <>
      <div className='w-full h-full pb-20 mt-20'>
        <S.Wrap>
          <S.Top>
            <h1 className='px-2 pt-1 text-lg md:px-4 md:pt-3 md:text-4xl font-[hel-bd]'>WORKS</h1>
            <S.ButtonRow>
              <S.Button
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById('isWebDesign').offsetTop - 130,
                    behavior: 'smooth',
                  })
                }}>
                <p className='hidden md:flex'> WEB DESIGN</p>
                <p className='flex md:hidden'> WEB</p>
              </S.Button>
              <S.Button
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById('isGraphicDesign').offsetTop - 80,
                    behavior: 'smooth',
                  })
                }}>
                <p className='hidden md:flex'>GRAPHIC DESIGN</p>
                <p className='flex md:hidden'>GRAPHIC</p>
              </S.Button>
              <S.Button
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById('isUXUIDesign').offsetTop - 80,
                    behavior: 'smooth',
                  })
                }}>
                <p className='hidden md:flex'> UX | UI DESIGN</p>
                <p className='flex md:hidden'> UX UI</p>
              </S.Button>
              <S.Button
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById('isMediaArt').offsetTop - 80,
                    behavior: 'smooth',
                  })
                }}>
                <p className='hidden md:flex'>MEDIA ART</p>
                <p className='flex md:hidden'>ART</p>
              </S.Button>
            </S.ButtonRow>
          </S.Top>
          <S.Contents>
            <S.Field id={'isWebDesign'}>
              <S.FieldTitle isSelected={isWebDesign}>
                <S.FieldTitleText isSelected={isWebDesign}>WEB DESIGN</S.FieldTitleText>
                <FieldToggle
                  isSelected={isWebDesign}
                  onClick={() => {
                    setIsWebDesign(!isWebDesign)
                  }}
                />
              </S.FieldTitle>
              <AnimatePresence>{isWebDesign && <ContentsWebDesign />}</AnimatePresence>
            </S.Field>
            <S.Field id={'isGraphicDesign'}>
              <S.FieldTitle isSelected={isGraphicDesign}>
                <S.FieldTitleText isSelected={isGraphicDesign}>GRAPHIC DESIGN</S.FieldTitleText>
                <FieldToggle
                  isSelected={isGraphicDesign}
                  onClick={() => {
                    setIsGraphicDesign(!isGraphicDesign)
                  }}
                />
              </S.FieldTitle>
              <AnimatePresence>{isGraphicDesign && <ContentsGraphicDesign />}</AnimatePresence>
            </S.Field>
            <S.Field id={'isUXUIDesign'}>
              <S.FieldTitle isSelected={isUXUIDesign}>
                <S.FieldTitleText isSelected={isUXUIDesign}>UX | UI DESIGN</S.FieldTitleText>
                <FieldToggle
                  isSelected={isUXUIDesign}
                  onClick={() => {
                    setIsUXUIDesign(!isUXUIDesign)
                  }}
                />
              </S.FieldTitle>
              <AnimatePresence>{isUXUIDesign && <ContentsUXUIDesign />}</AnimatePresence>
            </S.Field>
            <S.Field id={'isMediaArt'}>
              <S.FieldTitle isSelected={isMediaArt}>
                <S.FieldTitleText isSelected={isMediaArt}>MEDIA ART</S.FieldTitleText>
                <FieldToggle
                  isSelected={isMediaArt}
                  onClick={() => {
                    setIsMediaArt(!isMediaArt)
                  }}
                />
              </S.FieldTitle>
              <AnimatePresence>{isMediaArt && <ContentsMediaArt />}</AnimatePresence>
            </S.Field>
          </S.Contents>
        </S.Wrap>
      </div>
    </>
  )
}

export default WorksContainer
