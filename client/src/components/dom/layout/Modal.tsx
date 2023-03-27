import { useRouter } from 'next/router'

interface Props {
  onClose: () => void
  project: string
  link: string
}

export const Modal = ({ onClose, project, link }: Props) => {
  const router = useRouter()
  return (
    <div
      onClick={(e) => {
        onClose()
        e.stopPropagation()
      }}
      className='fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen text-black bg-transparent'>
      <div className='flex flex-col items-center justify-center px-6 py-6 bg-white shadow-lg gap-4 rounded-3xl w-[340px] h-fit'>
        <div className='flex flex-col items-center justify-center w-full text-xl  break-keep whitespace-wrap font-[medium] h-fit'>
          {project}
          <p className='w-full py-1 text-xxs'>* 클릭하시면 해당 프로젝트에 관련된 링크로 연결됩니다!</p>
        </div>
        <div className='flex flex-row items-center justify-center w-full text-base gap-2 font-[medium]'>
          <button
            onClick={() => {
              router.push(link)
            }}
            className='w-full p-2 text-white border rounded-full bg-[blue]  border-[blue] h-fit'>
            작업 보러가기
          </button>
          <button
            onClick={() => {
              onClose()
            }}
            className='w-full p-2 text-black border rounded-full border-[blue] h-fit'>
            취소
          </button>
        </div>
      </div>
    </div>
  )
}
