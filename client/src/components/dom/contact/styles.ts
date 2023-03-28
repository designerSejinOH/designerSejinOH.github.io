import styled from 'styled-components'
import tw from 'twin.macro'

export const Wrapper = styled.div`
  ${tw`
  flex 
  flex-col
  md:flex-row 
  mt-20
  border
  rounded-xl
  w-full 
  h-fit
  `}
`

export const Row = styled.div`
  ${tw`
  flex 
  flex-col
  w-full
  h-fit
  p-3
  md:p-10
  gap-3
  `}
`
export const Item = styled.div`
  ${tw`
  flex
  flex-col
  w-full
 
  `}
`
export const Title = styled.div`
  ${tw`
  flex
  w-full
  h-fit
  text-lg
  font-[hel-bd]
  `}
`
export const Address = styled.button`
  ${tw`
  flex 
  w-fit
  text-base
  font-[medium]
  bg-white
  text-[blue]
  px-2
  py-0.5
  my-1
  rounded-full
  border
  border-[blue]
  active:bg-[blue]
  active:border-white
  active:text-white
  md:hover:bg-[blue]
  md:hover:border-white
  md:hover:text-white
  `}
`
