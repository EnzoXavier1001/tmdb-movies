import { useQuery } from '@tanstack/react-query'
import { api } from '../../services/api'
import { useParams } from 'react-router-dom'
import { IMovie } from '../../types/movie'
import * as C from './styles'
import { formatImage } from '../../utils/formatImage'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import { Spinner } from '../../components/Spinner'

export const Details = () => {
  const { type, id } = useParams()

  const getMovieById = async () => {
    const results = await api.get(`/${type}/${id}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
      params: {
        language: 'pt-BR',
      },
    })

    return results.data
  }

  const { data: movie, isLoading } = useQuery<IMovie>({
    queryKey: ['movie', id],
    queryFn: () => getMovieById(),

    staleTime: 0,
    refetchOnWindowFocus: false,
  })
  const releaseDate =
    type === 'movie' ? movie?.release_date : movie?.first_air_date

  console.log(movie)

  return (
    <C.DetailsContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <C.Summary>
          <C.SummaryWrapper>
            <img src={formatImage(movie?.poster_path!)} alt="" />
            <C.SummaryContent>
              <h2>
                {movie?.title}({format(releaseDate!, 'yyyy')})
              </h2>

              <C.Categories>
                <span>
                  {format(releaseDate!, "dd 'de' MMMM 'de' yyyy", {
                    locale: pt,
                  })}
                </span>
                {movie?.genres.map((genre, index) => {
                  if (movie?.genres.length - 1 === index) {
                    return <span key={index}>{genre.name} </span>
                  } else {
                    return <span key={index}>{genre.name}, </span>
                  }
                })}
              </C.Categories>

              <p>{movie?.overview}</p>
            </C.SummaryContent>
          </C.SummaryWrapper>
        </C.Summary>
      )}
    </C.DetailsContainer>
  )
}
