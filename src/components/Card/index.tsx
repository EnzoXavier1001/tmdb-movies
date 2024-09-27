import { IMovie } from '../../types/movie'
import * as C from './styles'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import { NavLink } from 'react-router-dom'
import { formatImage } from '../../utils/formatImage'

type CardProps = {
  movie: IMovie
  type: 'movie' | 'tv'
}

export const Card = ({ movie, type }: CardProps) => {
  const releaseDate =
    type === 'movie' ? movie.release_date : movie.first_air_date

  return (
    <NavLink to={`/details/${type}/${movie.id}`}>
      <C.Card>
        <img src={formatImage(movie.backdrop_path)} alt="" />
        <C.CardContent>
          <h2>{movie.original_title ?? movie.original_name}</h2>
          {releaseDate && (
            <p>
              {format(releaseDate, "dd 'de' MMMM 'de' yyyy", { locale: pt })}
            </p>
          )}
        </C.CardContent>
      </C.Card>
    </NavLink>
  )
}
