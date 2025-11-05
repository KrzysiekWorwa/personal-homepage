import Gallery from "./Gallery";
import { Portfolio3dIcon, PortfolioHeader, PortfolioIcon, PortfolioSection, PortfolioSubTitle, PortfolioTitle, VirtualTourIcon } from "./styled";
import { useEffect } from "react";
import { githubUsername } from "./githubUsername";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../features/personalHomepage/personalHomepageSlice";
import { Content } from "./Content";
import { images } from "./Gallery/images";
import { VirtualTour } from "./Content/VirtualTour";

const Portfolio = () => {

    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories(githubUsername));
    }, [dispatch]);

    return (

        <PortfolioSection>
            <PortfolioHeader id="portfolio">
                <PortfolioIcon />
                <PortfolioTitle>Portfolio</PortfolioTitle>
                <PortfolioSubTitle>My recent projects</PortfolioSubTitle>
            </PortfolioHeader>

            <Content
                status={repositoriesStatus}
                repositories={repositories}
            />

            <PortfolioHeader id="3dPortfolio">
                <Portfolio3dIcon />
                <PortfolioTitle>3D Portfolio</PortfolioTitle>
                <PortfolioSubTitle>My 3D projects</PortfolioSubTitle>
            </PortfolioHeader>

            <Gallery images={images} />

            <PortfolioHeader id="tourPortfolio">
                <VirtualTourIcon />
                <PortfolioTitle>Virtual Tour Portfolio</PortfolioTitle>
                <PortfolioSubTitle>My Virtual Tours projects</PortfolioSubTitle>
            </PortfolioHeader>

            <VirtualTour />


        </PortfolioSection>
    );
};

export default Portfolio;