import * as React from 'react'
import { useProgress } from '@react-three/drei'

export function Loader() {
  const [loaded, setLoaded] = React.useState(false)
  const { active, progress } = useProgress()

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setLoaded(true)
    }
  }, [])

  return loaded && active ? (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[hel-bd] text-4xl text-white'>
      <span>{Math.floor(progress)}%</span>
    </div>
  ) : null
}
