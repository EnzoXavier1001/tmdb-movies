import styled from 'styled-components'

export const Header = styled.header`
  padding: 1.4rem 0;
  background: #b5446e;
`

export const NavList = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 112rem;
  margin: 0 auto;
  width: 90%;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1.8rem;
  }
`

export const ListItem = styled.li`
  a {
    color: #f0f0f0;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #4ab5c5;
      font-weight: 600;
    }
  }
`

export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-wrap: wrap;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.4rem;
  }

  img {
    height: 6rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`

export const WrapperInput = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;

  input {
    padding: 1rem 1.6rem;
    font-size: 1.6rem;
    outline: none;
    border: none;
    border-radius: 8px;
  }

  button {
    background-color: #ea4c89;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    line-height: 20px;
    list-style: none;
    margin: 0;
    outline: none;
    padding: 10px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: color 100ms;
    vertical-align: baseline;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  button:hover,
  button:focus {
    background-color: #f082ac;
  }
`
