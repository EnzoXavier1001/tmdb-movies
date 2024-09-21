import styled from "styled-components";

export const PaginationButton = styled.button`
    border: none;
    outline: 0;
    background: #F2F2F2;
    padding: 0.8rem;
    border: 1px solid #ccc;
    font-size: 1.8rem;
    cursor: pointer;
    color: #B5446E;

    &.active {
        background: #B5446E;
        color: #fff;
    }
`