import { PortfolioHeader, PortfolioIcon, PortfolioSection, PortfolioSubTitle, PortfolioTitle } from "./styled";
import { useEffect } from "react";
import { githubUsername } from "./githubUsername";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../features/personalHomepage/personalHomepageSlice";

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

            <PortfolioContent
                status={repositoriesStatus}
                repositories={repositories}
            />

        </PortfolioSection>
    );
};

export default Portfolio;