import { useRouter } from 'next/router'
import { describe } from 'node:test'
import { Slide } from './Slide'
import * as S from './styles'

interface Props {
  onClose: () => void
  field: string
  project: string
  describe: string
  detail: string
  link: string
  list: string[]
}

export const Modal = ({ onClose, field, project, describe, detail, link, list }: Props) => {
  const router = useRouter()
  return (
    <S.ModalWrapper
      onClick={(e) => {
        document.body.style.overflowY = 'auto'
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}>
      <S.ModalContent>
        <S.ModalContentTop>
          <p className='flex px-3 pt-2 pb-1 w-fit'>{field}</p>
          <button className='flex px-3 pt-2 pb-1 w-fit' onClick={onClose}>
            X
          </button>
        </S.ModalContentTop>
        <S.ModalContentLayout>
          <h1 className='w-full'>{project}</h1>
          <Slide list={list} />
          <p className='w-full text-xs'>{describe}</p>
          <p className='w-full text-xxs pb-2 '>{detail}</p>
        </S.ModalContentLayout>
        <S.ModalButtonLayout>
          <S.ModalButton
            isActive={true}
            onClick={() => {
              router.push(link)
            }}>
            프로젝트 링크 바로가기
          </S.ModalButton>
        </S.ModalButtonLayout>
      </S.ModalContent>
    </S.ModalWrapper>
  )
}
