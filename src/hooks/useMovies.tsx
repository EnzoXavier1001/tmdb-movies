import { useQuery } from '@tanstack/react-query'
import { IMovie } from '../types/movie'
import { api } from '../services/api'

interface IUseMovies {
  type: string
  page: number
}

async function getMovies(type = 'movie', page = 1) {
  try {
    const { data } = await api.get(
      `/${type}/popular?language=pt-BR&page=${page}?limit=10`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      },
    )

    return data.results
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error?.response?.data?.status_message)
  }
}

export const useMovies = ({ type, page }: IUseMovies) => {
  return useQuery<IMovie[]>({
    queryKey: ['movies', page],
    queryFn: () => getMovies(type, page),

    staleTime: 0,
    refetchOnWindowFocus: false,
  })
}
