import styled from 'styled-components'
import tw from 'twin.macro'

export const Wrap = styled.div`
  ${tw`
  w-full
  h-fit
  flex
  flex-col
  md:px-4
  gap-4
  `}/* @media screen and (min-width: 640px) {
    height: fit-content;
  }
  @media screen and (min-width: 768px) {
    height: calc(100vh - 5rem);
  } */
  /* calc 쓸 때 띄어쓰기 주의 */
`

export const Main = styled.div`
  ${tw`
  flex
  w-full
  h-[100vw]
  md:h-auto
  order-1
  md:order-2
  `}
`

export const Aside = styled.div`
  ${tw`
  w-full
  px-4
  flex
  flex-col
  justify-start
  items-start
  gap-2
  order-2
  md:order-1
  `}
`
export const Bside = styled.div`
  ${tw`
  w-full
  h-fit
  flex  
  flex-col
  md:flex-row
  justify-between
  items-start
  gap-6
  border-t
  border-dashed
  border-white
  pt-6
  p-4
  md:col-span-2
  order-3
  md:order-3
  `}
`
export const BsideBox = styled.div`
  ${tw`
  w-full
  h-fit
  `}
`

export const BsideTitle = styled.div`
  ${tw`
  text-lg 
  font-[hel-bd]
  `}
`

export const BsideContent = styled.div`
  ${tw`
  text-xs
  font-[light]
  py-1
  `}
`
export const BsideContentTitle = styled.span`
  ${tw`
  font-[medium]
`}
`
