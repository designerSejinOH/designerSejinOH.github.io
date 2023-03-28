import { useEffect } from 'react'
import Header from '@/components/dom/layout/Header'
import * as S from './styles'
import { useRouter } from 'next/router'

const FooterContainer = ({ ...props }) => {
  const router = useRouter()
  return (
    <div className='p-4 md:p-10'>
      <S.Wrapper>
        <S.Row>
          <div className='flex text-4xl font-[hel-bd] flex-col'>CONTACT ME</div>
        </S.Row>
        <S.Row>
          <S.Item>
            <S.Title>E-MAIL</S.Title>
            <S.Address>
              <a href='mailto:ohsj1999@gamil.com'>ohsj1999@gamil.com</a>
            </S.Address>
          </S.Item>
          <S.Item>
            <S.Title>GITHUB</S.Title>
            <S.Address
              onClick={() => {
                router.push('https://github.com/designerSejinOH')
              }}>
              designerSejinOH.github.com
            </S.Address>
          </S.Item>
          <S.Item>
            <S.Title>INSTAGRAM</S.Title>
            <S.Address
              onClick={() => {
                router.push('https://www.instagram.com/ohsj1999/')
              }}>
              @ohsj1999
            </S.Address>
            <S.Address
              onClick={() => {
                router.push('https://www.instagram.com/designersejinoh/')
              }}>
              @designersejinoh
            </S.Address>
          </S.Item>
        </S.Row>
      </S.Wrapper>
    </div>
  )
}

export default FooterContainer
