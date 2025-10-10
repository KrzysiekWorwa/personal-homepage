import { Portfolio3dIcon, PortfolioHeader, PortfolioIcon, PortfolioSection, PortfolioSubTitle, PortfolioTitle } from "./styled";
import { useEffect } from "react";
import { githubUsername } from "./githubUsername";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../features/personalHomepage/personalHomepageSlice";
import { Content } from "./Content";

const Portfolio = () => {

    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories(githubUsername));
    }, [dispatch]);

    return (

        <PortfolioSection>
            <PortfolioHeader>
                <PortfolioIcon />
                <PortfolioTitle>Portfolio</PortfolioTitle>
                <PortfolioSubTitle>My recent projects</PortfolioSubTitle>
            </PortfolioHeader>

            <Content
                status={repositoriesStatus}
                repositories={repositories}
            />

            <PortfolioHeader>
                <Portfolio3dIcon />
                <PortfolioTitle>3D Portfolio</PortfolioTitle>
                <PortfolioSubTitle>My 3D projects</PortfolioSubTitle>
            </PortfolioHeader>

        </PortfolioSection>
    );
};

export default Portfolio;