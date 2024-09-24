import styled from 'styled-components'

export const PaginationButton = styled.button`
  border: none;
  outline: 0;
  background: #f2f2f2;
  padding: 0.8rem;
  border: 1px solid #ccc;
  font-size: 1.8rem;
  cursor: pointer;
  color: #b5446e;

  &.active {
    background: #b5446e;
    color: #fff;
  }
`
