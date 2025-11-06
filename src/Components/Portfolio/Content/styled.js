import styled from "styled-components";
import colorAlpha from "color-alpha";

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    list-style: none;
    padding: 0;
    margin: 32px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
        margin: 24px;
    }
    `;

export const Tile = styled.li`
    padding: 56px;
    background: ${({ theme }) => theme.colors.tile.tileBackground};
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
    border-radius: 4px;
    border: 6px solid rgba(209, 213, 218, 0.3);
    transition: background 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
    margin: 0;
    max-width: 600px;

    &:hover {
        border-color: rgba(3, 102, 214, 0.2);
        transform: scale(1.03);
    }

    &:nth-last-child(1):nth-child(odd) {
        grid-column: 1 / -1;
        justify-self: center;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
                
        &:nth-last-child(1):nth-child(odd) {
            grid-column: auto;
            justify-self: auto;
    }
    }
`;

export const Name = styled.h3`
    color: ${({ theme }) => theme.colors.PortfolioHeader};
    font-weight: 700;
    font-size: 24px;
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
    word-break: break-word;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.Link};
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => colorAlpha(theme.colors.Link, 0.3)};
    padding-bottom: 1px;

    &:hover {
        border-color: unset;
    }
`;

export const ImageLink = styled.a`
    display: inline-block;
    text-decoration: none;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.03);
    }
`;

export const ImagePreview = styled.img`
    width: 100%;
    height: auto;
    max-width: 480px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    display: block;
    margin-top: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        max-width: 100%;
        border-radius: 4px;
    }
`;