import * as S from './styles'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface MenuModalProps {
  onHandleMenu: (isMenuOpen: boolean) => void
}

export default function MenuModal({ onHandleMenu }: MenuModalProps) {
  const router = useRouter()
  const onClickEvent = (path: string) => () => {
    router.push(`/${path}`)
    onHandleMenu(false)
  }

  return (
    <S.MenuModal>
      <S.MenuModalContent>
        <S.MenuModalItem onClick={onClickEvent('about')}>
          <span>ABOUT</span>
          <S.MenuModalItemHidden> | CV & RESUME</S.MenuModalItemHidden>
        </S.MenuModalItem>
        <S.MenuModalItem onClick={onClickEvent('works')}>
          <span>WORKS</span>
          <S.MenuModalItemHidden> | DESIGN & DEVELOP & ART </S.MenuModalItemHidden>
        </S.MenuModalItem>
        <S.MenuModalItem onClick={onClickEvent('contact')}>
          <span>CONTACT</span>
          <S.MenuModalItemHidden> | E-MAIL & INSTAGRAM</S.MenuModalItemHidden>
        </S.MenuModalItem>
      </S.MenuModalContent>
    </S.MenuModal>
  )
}
