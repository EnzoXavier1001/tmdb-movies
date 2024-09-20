import { Header } from "../../components/Header"
import * as C from './styles'
import { Card } from "../../components/Card"
import { useMovies } from "../../hooks/useMovies"
import { useEffect, useState } from "react"

export const Home = () => {
    const [page, setPage] = useState<number>(1)
    const [type, setType] = useState<string>('movie')
    const { refetch, data: movies, isLoading } = useMovies({ type, page})

    useEffect(() => {
      refetch();
    }, [type, page]);

    return (
        <>
          <Header />
          <C.HomeContainer>
            <C.Title>Escolha um <span onClick={() => setType('movie')}>Filme</span> ou <span onClick={() => setType('tv')}>Séries</span></C.Title>
            <C.CardContainer>
              {isLoading && (
                <p>Carregando...</p>
              )}
              {movies?.map((movie, index) => (
                <Card
                  key={index}
                  movie={movie}
                />
              ))}
            </C.CardContainer>
          </C.HomeContainer>
        </>
    )
}