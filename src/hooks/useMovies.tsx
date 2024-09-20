import { useQuery } from "@tanstack/react-query"
import { IMovie } from "../types/movie"

interface IUseMovies {
    type: string;
    page: number;
}

async function getMovies(type = 'movie', page = 1) {
    const moviesList = await fetch(`https://api.themoviedb.org/3/${type}/popular?language=pt-BR&page=${page}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
      }
    })
  
    const { results } = await moviesList.json()

    console.log(results)
  
    return results
}

export const useMovies = ({ type, page }: IUseMovies) => {
    return useQuery<IMovie[]>({
        queryKey: ['movies', page], 
        queryFn: () => getMovies(type, page),
        
        staleTime: 0,
        refetchOnWindowFocus: false, 
    })
}