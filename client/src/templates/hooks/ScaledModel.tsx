import { useThree } from '@react-three/fiber'
interface Props {
  children: React.ReactNode
  ratio: number
}

export const ScaledModel = ({ children, ratio, ...props }: Props) => {
  const { width, height } = useThree((state) => state.viewport)
  return (
    <>
      <mesh scale={width / ratio} {...props}>
        {children}
      </mesh>
    </>
  )
}
