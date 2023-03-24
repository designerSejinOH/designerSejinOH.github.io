import * as S from './styles'
import { AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai'
import { BsLightbulb } from 'react-icons/bs'
import { FaVimeoSquare } from 'react-icons/fa'
import { useRouter } from 'next/router'

const Footer = ({ isHome }: { isHome: boolean }) => {
  const router = useRouter()

  return (
    <S.Footer isHome={isHome}>
      {!isHome && (
        <S.BottomToTop
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }}>
          <svg
            className='w-10 h-10 stroke-white active:stroke-[blue] md:hover:stroke-[blue]'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 10l7-7m0 0l7 7m-7-7v18' />
          </svg>
        </S.BottomToTop>
      )}

      <S.BottomCopyRight>
        <div className='text-xxs md:text-xs'>
          Copyright 2023 SEJIN OH. <br /> This is SEJIN OH Portfolio WEBSITE.
        </div>
        <AiOutlineInstagram
          onClick={() => {
            router.push('https://www.instagram.com/ohsj1999/')
          }}
          className='h-full text-4xl cursor-pointer active:text-[blue] md:hover:text-[blue]'
        />
        <AiOutlineGithub
          onClick={() => {
            router.push('https://github.com/designerSejinOH')
          }}
          className='hidden h-full text-3xl cursor-pointer md:flex active:text-[blue] md:hover:text-[blue]'
        />
        <FaVimeoSquare
          onClick={() => {
            router.push('https://vimeo.com/user176336195')
          }}
          className='hidden h-full text-3xl cursor-pointer md:flex active:text-[blue] md:hover:text-[blue]'
        />
      </S.BottomCopyRight>
    </S.Footer>
  )
}

export default Footer
