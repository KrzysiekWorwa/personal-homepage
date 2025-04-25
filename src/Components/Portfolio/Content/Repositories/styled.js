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

export const Tile = styled.li`
    padding: 56px;
    background: ${({ theme }) => theme.colors.tile.tileBackground};
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
    border-radius: 4px;
    border: 6px solid rgba(209, 213, 218, 0.3);
    transition: background 0.3s;
    transition: border-color 0.3s;

    &:hover {
        border-color: rgba(3, 102, 214, 0.2);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 20px;
    }
`;