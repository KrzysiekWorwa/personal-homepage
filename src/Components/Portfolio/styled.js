import styled from "styled-components";
import { ReactComponent as GitIcon } from "./gitIcon.svg";

export const PortfolioBox = styled.article`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    align-items: center;
    justify-content: center;
`;

export const PortfolioContent = styled.div`
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

export const PortfolioTitle = styled.h2`
font-size: 30px;
font-weight: 900;
color: ${({ theme }) => theme.colors.textPrimary};
margin: 8px;
`;