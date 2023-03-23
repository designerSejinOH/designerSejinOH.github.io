import styled from 'styled-components'
import tw from 'twin.macro'

/*
      <S.Wrap>
        <S.Header>
          Header
        </S.Header>
        <S.Content>
          <S.Aside>Aside</S.Aside>
          <S.Bside>Bside</S.Bside>
        </S.Content>
        <S.Footer>Footer</S.Footer>
      </S.Wrap>
 */

export const Wrap = styled.div`
  ${tw`
  w-full 
  h-full 
  text-white
  grid
  grid-cols-1 
  grid-rows-layoutMobile
  md:grid-cols-2 
  md:grid-rows-layout
  `}
`
export const Header = styled.div`
  ${tw`
  order-1 
  flex
  `}
`

export const Main = styled.div`
  ${tw`
  order-2 
  md:order-1
  row-span-1 
  md:row-span-3 
  `}
`

export const Content = styled.div`
  ${tw`
  order-3 
  grid 
  grid-cols-1 
  grid-rows-content 
  `}
`
export const Aside = styled.div`
  ${tw`
  `}
`
export const Bside = styled.div`
  ${tw`
  `}
`

export const Footer = styled.div`
  ${tw`
  order-4 
  `}
`
