import styled from "styled-components";
import { ReactComponent as GitIcon } from "./svgIcons/gitIcon.svg";
import { ReactComponent as ArtIcon } from "./svgIcons/artstation.svg";
import { ReactComponent as PanoeeIcon } from "./svgIcons/panoee.svg";

export const PortfolioSection = styled.section`
    margin-top: 72px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 48px;
    }
    `;

export const PortfolioHeader = styled.div`
    grid-column: span 2;
    justify-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PortfolioIcon = styled(GitIcon)`
    justify-content: center;
    color: ${({ theme }) => theme.colors.portfolioIcon};
`;

export const Portfolio3dIcon = styled(ArtIcon)`
    justify-content: center;
    color: ${({ theme }) => theme.colors.portfolioIcon};
`;

export const VirtualTourIcon = styled(PanoeeIcon)`
    justify-content: center;
    color: ${({ theme }) => theme.colors.portfolioIcon};
    width: 48px;
    height: 48px;
`;

export const PortfolioTitle = styled.h2`
font-size: 30px;
font-weight: 900;
color: ${({ theme }) => theme.colors.textPrimary};
margin: 8px;

@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
    }
`;

export const PortfolioSubTitle = styled.h3`
font-size: 20px;
font-weight: 400;
color: ${({ theme }) => theme.colors.textPrimary};
margin: 0;

@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 17px;
    }
`;