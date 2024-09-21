import { IMovie } from '../../types/movie'
import * as C from './styles'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale';

type CardProps = {
    movie: IMovie
}

export const Card = ({ movie }: CardProps) => {
    const releaseDate =  (movie.release_date ?? movie.first_air_date)!
    
    return (
        <C.Card>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
            <C.CardContent>
                <h2>{movie.original_title ?? movie.original_name}</h2>
                <p>{format(releaseDate, "dd 'de' MMMM 'de' yyyy", { locale: pt })}</p>
            </C.CardContent>
        </C.Card>
    )
}