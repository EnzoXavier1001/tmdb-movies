import * as C from './styles'
import { Card } from '../../components/Card'
import { useMovies } from '../../hooks/useMovies'
import { useEffect, useState } from 'react'
import { Pagination } from '../../components/Pagination'
import { Spinner } from '../../components/Spinner'

export const Home = () => {
  const [page, setPage] = useState<number>(1)
  const [type, setType] = useState<'movie' | 'tv'>('movie')
  const { refetch, movies, isLoading } = useMovies({ type, page })

  useEffect(() => {
    refetch()
  }, [type, page])

  function handleUpdatePage(page: number) {
    setPage(page)
  }

  function showPagination(valor: number) {
    const pages = []

    for (let i = 1; i < valor; i++) {
      pages.push(
        <Pagination
          key={i}
          pages={i}
          currentPage={page}
          onUpdatePage={handleUpdatePage}
        />,
      )
    }

    return pages
  }

  return (
    <C.HomeContainer>
      <C.Title>
        Escolha um <span onClick={() => setType('movie')}>Filme</span> ou{' '}
        <span onClick={() => setType('tv')}>Séries</span>
      </C.Title>
      <C.CardContainer>
        {isLoading && <Spinner />}
        {movies?.map((movie, index) => (
          <Card type={type} key={index} movie={movie} />
        ))}
      </C.CardContainer>
      {movies && <C.Pagination>{showPagination(movies.length)}</C.Pagination>}
    </C.HomeContainer>
  )
}
