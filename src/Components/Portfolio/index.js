import { PortfolioHeader, PortfolioIcon, PortfolioSection, PortfolioSubTitle, PortfolioTitle } from "./styled";

const Portfolio = () => (

    <PortfolioSection>
        <PortfolioHeader>
            <PortfolioIcon></PortfolioIcon>
            <PortfolioTitle>Portfolio</PortfolioTitle>
            <PortfolioSubTitle>My recent projects</PortfolioSubTitle>
        </PortfolioHeader>
    </PortfolioSection>
);

export default Portfolio;