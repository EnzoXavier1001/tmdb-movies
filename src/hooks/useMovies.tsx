import { useQuery } from "@tanstack/react-query"
import { IMovie } from "../types/movie"
import { api } from "../services/api";

interface IUseMovies {
    type: string;
    page: number;
}

async function getMovies(type = 'movie', page = 1) {
  const { data } = await api.get(`/${type}/popular?language=pt-BR&page=${page}?limit=10`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
    }
  })

  return data.results
}

export const useMovies = ({ type, page }: IUseMovies) => {
    return useQuery<IMovie[]>({
        queryKey: ['movies', page], 
        queryFn: () => getMovies(type, page),
        
        staleTime: 0,
        refetchOnWindowFocus: false, 
    })
}