import styled from 'styled-components'

export const Card = styled.div`
  background-color: #f7f7f7;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    display: block;
  }
`

export const CardContent = styled.div`
  padding: 1.2rem;
  border: 1px solid #ccc;
  height: 12rem;
  border-radius: 0 0 0.8rem 0.8rem;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    color: #222;
  }

  p {
    color: #757575;
    font-weight: 500;
  }
`
