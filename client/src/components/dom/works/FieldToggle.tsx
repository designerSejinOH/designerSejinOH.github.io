import * as S from './styles'

interface Props {
  isSelected: Boolean
  onClick: () => void
}

export const FieldToggle = ({ isSelected, onClick, ...props }: Props) => {
  return (
    <S.FieldTitleButton
      onClick={onClick}
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'>
      {isSelected ? (
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
      ) : (
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
      )}
    </S.FieldTitleButton>
  )
}
