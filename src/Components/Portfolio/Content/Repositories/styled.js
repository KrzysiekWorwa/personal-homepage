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

export const Name = styled.h3`
    color: rgba(3, 102, 214, 1);
    font-weight: 700;
    font-size: 24px;
    padding: 0;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    margin-top: 24px;
    line-height: 1.4;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 16px;
        font-size: 14px;
    }
`;

export const Links = styled.dl`
    margin-top: 24px;
    margin-bottom:0;
    display: grid;
    grid-gap: 8px;
    line-height: 1.6;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 16px;
        font-size: 14px;
    }
`;

export const LinksRow = styled.div`
    display: grid;
    grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
    margin: 0;
`;

export const Link = styled.a`
    color: rgba(3, 102, 214, 1);
    text-decoration: none;
    border-bottom: 1px solid rgba(3, 102, 214, 1);
    padding-bottom: 1px;

    &:hover {
        border-color: unset;
    }
`;