import { IMovie } from '../../types/movie'
import * as C from './styles'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import defaultImage from '../../assets/default-image.png'

type CardProps = {
  movie: IMovie
  type: 'movie' | 'tv'
}

export const Card = ({ movie, type }: CardProps) => {
  const releaseDate =
    type === 'movie' ? movie.release_date : movie.first_air_date

  const hasImage = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
    : defaultImage

  return (
    <C.Card>
      <img src={hasImage} alt="" />
      <C.CardContent>
        <h2>{movie.original_title ?? movie.original_name}</h2>
        {releaseDate && (
          <p>{format(releaseDate, "dd 'de' MMMM 'de' yyyy", { locale: pt })}</p>
        )}
      </C.CardContent>
    </C.Card>
  )
}
