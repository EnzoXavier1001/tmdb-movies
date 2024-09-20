import * as C from "./styles"
import logoImg from '../../assets/logo.png'
import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <C.Header>
            <C.NavList>
                <C.WrapperContent>
                    <img src={logoImg} alt="Logo TMDB" />
                    <ul>
                        <C.ListItem>
                            <NavLink to="/discover">Descubra</NavLink>
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
                    <input type="text" placeholder="Pesquise seu filme favorito" />
                    <button type="submit">Procurar</button>
                </C.WrapperInput>
            </C.NavList>
        </C.Header>
    )
}