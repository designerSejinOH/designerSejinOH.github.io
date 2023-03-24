import styled from 'styled-components'
import tw from 'twin.macro'
import { MotionModal } from '@/styles/common.styles'

export const Header = styled.div<{
  scrollPosition: number
}>`
  ${tw`
  fixed
  top-0
    w-full
    h-20
    flex
    flex-row
    justify-between
    items-center
    bg-transparent
    text-white
    font-[hel-bd]
    text-3xl 
    text-center 
    z-30
    `}
  ${({ scrollPosition }) =>
    scrollPosition < 20 ? tw`bg-transparent` : tw` bg-gradient-to-b from-gray-500 to-transparent`}
`

export const HeaderLogo = styled.div`
  ${tw`
  flex 
  items-center
  pt-1
  h-full
  px-4
  cursor-pointer
  w-fit 
  active:opacity-50
  md:hover:opacity-50
  `}
`

export const MenuButton = styled.button`
  ${tw`
  flex 
  items-center 
  h-full 
  px-4 
  cursor-pointer 
  w-fit
  active:opacity-50
  md:hover:opacity-50
  `}
`
export const MenuModal = styled(MotionModal)`
  ${tw`
fixed
  z-20 
  w-full 
  h-full 
  flex
  justify-center
  items-center
  bg-white 
  bg-opacity-10
  backdrop-blur-md
  text-white
  py-20
  px-10
  `}
`

export const MenuModalContent = styled.div`
  ${tw`
  flex
  flex-col
  w-fit
  h-full
  gap-4
  justify-center
  items-center
  md:items-start
  `}
`
export const MenuModalItem = styled.div`
  ${tw`
  flex
  flex-row
  justify-start
  items-center
  w-full
  px-8
  pt-2
  h-20
  text-4xl
  font-[hel-bd]
  cursor-pointer
  rounded-full
  active:border
  active:bg-white
  active:text-[blue]
  md:hover:border
  md:hover:bg-white
  md:hover:text-[blue]
  `}
`
export const MenuModalItemHidden = styled.p`
  ${tw`
  whitespace-pre
  font-[hel-th]
  hidden
  md:flex
  `}
`

export const Footer = styled.div<{
  isHome: boolean
}>`
  ${tw`
  fixed
  bottom-0
  w-full
  h-fit
  gap-2
  md:gap-4
  flex
  flex-row
  items-center
  bg-transparent
  text-white
  font-[hel-bd]
  text-3xl
  text-center
  z-10
  `}
  ${({ isHome }) =>
    isHome
      ? tw`
      justify-end
      `
      : tw`
      justify-between
      `}
`

export const BottomToTop = styled.button`
  ${tw`
  ml-2
  mb-2
  md:ml-4
  md:mb-4
  w-fit  
  h-16
  px-2
  flex
  justify-between
  items-center
  border
  rounded-3xl
bg-black
  bg-opacity-10
  backdrop-blur-sm
  active:bg-white
  md:hover:bg-white
  `}
`
export const BottomToSwitch = styled.button`
  ${tw`
  cursor-pointer
  ml-2
  mb-2
  md:ml-4
  md:mb-4
  w-16  
  h-16
  px-2
  fixed
  z-10
  pt-1
  bottom-0
  left-0
  items-center
  border
  rounded-3xl
bg-black
  bg-opacity-10
  backdrop-blur-sm
  font-[hel-bd]
  active:bg-white
  active:text-[blue]
  md:hover:bg-white
  md:hover:text-[blue]
  `}
`

export const BottomCopyRight = styled.div`
  ${tw`
  mx-2
  mb-2
  md:mx-4
  md:mb-4
  w-fit
  h-16
  px-4
  flex
  flex-row
  gap-2
  justify-end
  items-center
  font-[hel-th]
  text-right
  text-xs
  border
  rounded-3xl
bg-black 
 bg-opacity-10
  backdrop-blur-sm
  //  active:bg-white
  //  active:text-[blue]
  // md:hover:bg-white
  // md:hover:text-[blue]
  `}
`
