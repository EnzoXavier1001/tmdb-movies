import * as C from './styles'
import { BounceLoader } from 'react-spinners'

export const Spinner = () => {
  return (
    <C.ErrorContainer>
      <BounceLoader size={100} color="#b5446e" />
      <p>Carregando...</p>
    </C.ErrorContainer>
  )
}
