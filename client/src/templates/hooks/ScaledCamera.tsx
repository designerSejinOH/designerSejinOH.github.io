import { OrthographicCamera } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
interface Props {
  children: React.ReactNode
  ratio: number
}

export const ScaledCamera = ({ ...props }: Props) => {
  const { width, height } = useThree((state) => state.viewport)
  return (
    //@ts-ignore
    <OrthographicCamera makeDefault position={[-200, 200, 200]} zoom={30} near={1} far={10000}>
      <spotLight position={[0, 0, 0]} castShadow />
    </OrthographicCamera>
  )
}
