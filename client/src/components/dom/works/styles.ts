import { MotionModal } from '@/styles/common.styles'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Wrap = styled.div`
  ${tw`
  w-full
  h-fit
  flex
  flex-col
  px-2
  md:px-4
  gap-2
  md:gap-4
  `}/* @media screen and (min-width: 640px) {
    height: fit-content;
  }
  @media screen and (min-width: 768px) {
    height: calc(100vh - 5rem);
  } */
  /* calc 쓸 때 띄어쓰기 주의 */
`
export const Top = styled.div`
  ${tw`
  w-full  
  h-fit
  px-1
  md:px-2
  py-1
  md:py-2
  flex
  justify-between
  items-center
  border
  rounded-full
  bg-white
  text-[blue]
  `}
`
export const ButtonRow = styled.div`
  ${tw`
  w-fit
  h-fit
  flex
  flex-row
  pr-0
  md:pr-1
  justify-between
  items-center
  `}
`

export const Button = styled.button`
  ${tw`
  w-fit 
  h-fit
  px-2
  md:px-4
  flex
  justify-center
  items-center
  border-r-[0.8px]
  md:border-r
  border-[blue]
  text-left
  text-xxs
  md:text-base
  font-[hel-th]
  active:underline
md:hover:underline
  pt-1
  `}
  :last-child {
    ${tw`
  border-r-0
  `}
  }
`
export const Contents = styled.div`
  ${tw`
  w-full
  h-fit
  grid
  md:grid-cols-2
  grid-cols-1
  justify-start
  items-start
  gap-2
  md:gap-4
  mb-10
  `}
`

export const Field = styled.div`
  ${tw`
  w-full  
  h-fit
  flex
  flex-col
  justify-center
  items-start
  gap-2
  md:gap-4
  `}
`

export const FieldTitle = styled.div<{
  isSelected: boolean
}>`
  ${tw`
  w-fit
  h-8
  md:h-12
  flex
  flex-row
  gap-2
  md:gap-4
  justify-between
  items-center
  `}
  ${({ isSelected }) =>
    isSelected
      ? tw`
      w-full
  `
      : tw`
      w-fit
  `}
`

export const FieldTitleText = styled.div<{
  isSelected: boolean
}>`
  ${tw`
  flex
  h-full
  pt-2
  md:pt-3
  py-1
  md:py-2
  px-3
  md:px-6
  text-sm
  md:text-xl
  border
  rounded-full
  font-[hel-th]
  `}
  ${({ isSelected }) =>
    isSelected
      ? tw`
      w-full
  `
      : tw`
      w-fit
  `}
`

export const FieldTitleButton = styled.svg`
  ${tw`
  cursor-pointer
  flex
  w-12
  md:w-16
  h-full
  py-1
  md:py-2
  px-3
  md:px-4
  border
  rounded-full
  active:bg-white
  md:hover:bg-white
  active:stroke-[blue]
  md:hover:stroke-[blue]
  `}
`

export const FieldContents = styled(MotionModal)`
  ${tw`
  w-full
  h-fit
  flex
  flex-col
  gap-2
  md:gap-4
  justify-center
  items-start
  transition
  ease-out
  `}
`
export const FieldContent = styled.div`
  ${tw`
  w-full
  h-fit
  flex
  relative
  flex-col
  justify-start
  items-start
  border
  overflow-hidden
  isolate
  md:rounded-3xl
  rounded-2xl
  bg-white
  `}
`
export const FieldDetail = styled.div`
  ${tw`
  flex 
  flex-col 
  w-full
  h-fit
  `}
`

export const FieldContentTitle = styled.div`
  ${tw`
  w-full
  h-fit
  px-2
  py-2
  md:px-4
  flex
  flex-row
  justify-start
  items-center
  text-[blue]
  font-[medium]
  text-xs
  md:text-base
  `}
`
export const FieldContentSemiTitle = styled.p`
  ${tw`
  font-[medium] 
  text-xxs
`}
`
