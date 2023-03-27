import { useRouter } from 'next/router'
import { Slide } from './Slide'
import * as S from './styles'

interface Props {
  onClose: () => void
  project: string
  link: string
  list: string[]
}

export const Modal = ({ onClose, project, link, list }: Props) => {
  const router = useRouter()
  return (
    <S.ModalWrapper
      onClick={(e) => {
        onClose()
        e.stopPropagation()
      }}>
      <S.ModalContent>
        <S.ModalContentLayout>
          <h1 className='w-full px-1'>{project}</h1>
          <Slide list={list} />
          <p className='w-full py-1 text-xxs'>* 클릭하시면 해당 프로젝트에 관련된 링크로 연결됩니다!</p>
        </S.ModalContentLayout>
        <S.ModalButtonLayout>
          <S.ModalButton
            isActive={true}
            onClick={() => {
              router.push(link)
            }}>
            작업 보러가기
          </S.ModalButton>
          <S.ModalButton
            isActive={false}
            onClick={() => {
              onClose()
            }}>
            닫기
          </S.ModalButton>
        </S.ModalButtonLayout>
      </S.ModalContent>
    </S.ModalWrapper>
  )
}
