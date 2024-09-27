import styled from 'styled-components'

export const DetailsContainer = styled.div``

export const Summary = styled.div`
  background: #222;
  color: #fff;

  padding: 2.2rem 0;
`

export const SummaryContent = styled.div``

export const SummaryWrapper = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  width: 90%;

  display: flex;
  gap: 2rem;

  img {
    max-height: max-content;
    object-fit: cover;
  }

  h2 {
    font-size: 4.2rem;
  }

  p {
    margin-top: 3.2rem;
    font-size: 2rem;
  }

  @media (max-width: 990px) {
    flex-direction: column;

    img {
      max-height: auto;
    }
  }
`

export const Categories = styled.div`
  span:first-child {
    margin-right: 1.2rem;
  }
`
