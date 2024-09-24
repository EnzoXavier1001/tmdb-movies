import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  width: 90%;

  padding: 1.8rem 0;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

export const Title = styled.h1`
  margin-bottom: 1.8rem;
  font-size: 3.2rem;
  color: #222;

  span {
    cursor: pointer;
    color: #add8e6;
    font-weight: bold;
    text-decoration: underline;
  }
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.2rem;
`
