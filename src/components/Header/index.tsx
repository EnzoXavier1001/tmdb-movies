import * as C from './styles'
import logoImg from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { useQueryClient } from '@tanstack/react-query'

type Search = {
  searchData: string
}

export const Header = () => {
  const { register, handleSubmit } = useForm<Search>()
  const queryClient = useQueryClient()

  const onSubmit: SubmitHandler<Search> = async (data) => {
    const response = await api.get('/search/movie', {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
      params: {
        query: data.searchData,
      },
    })

    queryClient.setQueryData(['movies'], response.data.results)
  }

  return (
    <C.Header>
      <C.NavList>
        <C.WrapperContent>
          <img src={logoImg} alt="Logo TMDB" />
          <ul>
            <C.ListItem>
              <NavLink to="/">Descubra</NavLink>
            </C.ListItem>
            <C.ListItem>
              <NavLink to="/movies">Filmes</NavLink>
            </C.ListItem>
            <C.ListItem>
              <NavLink to="/series">Séries</NavLink>
            </C.ListItem>
            <C.ListItem>
              <NavLink to="/persons">Pessoas</NavLink>
            </C.ListItem>
          </ul>
        </C.WrapperContent>

        <C.WrapperInput>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register('searchData')}
              placeholder="Pesquise seu filme favorito"
            />
            <button type="submit">Procurar</button>
          </form>
        </C.WrapperInput>
      </C.NavList>
    </C.Header>
  )
}
