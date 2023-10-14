import Confetti from 'react-confetti'
import { useWindowSize } from '@react-hook/window-size'
function Coffeti() {
    const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width} height={height}
    />
  )
}

export default Coffeti