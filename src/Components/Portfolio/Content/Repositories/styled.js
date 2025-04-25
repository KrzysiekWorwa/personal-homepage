import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    list-style: none;
    padding: 0;
    margin-top: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
    }
    `;