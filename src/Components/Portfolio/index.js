import { Portfolio3dIcon, PortfolioHeader, PortfolioIcon, PortfolioSection, PortfolioSubTitle, PortfolioTitle, VirtualTourIcon } from "./styled";
import { useEffect } from "react";
import { githubUsername } from "./githubUsername";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../features/personalHomepage/personalHomepageSlice";
import { Content } from "./Content";
import Gallery from "./Gallery";
import { images } from "./Gallery/images";
import { Description, ImageLink, ImagePreview, Link, Links, LinksRow, LinksValue, List, Name, Tile } from "./Content/Repositories/styled";

import czorsztyn from "./images/czorsztynianka-czorsztyn.png";
import niedzica from "./images/czorsztynianka-niedzica.png";
import erica from "./images/apartment-erica.png";
import deluxe from "./images/apartment-erica-deluxe.png"

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

            <Gallery images={images} />

            <PortfolioHeader>
                <VirtualTourIcon />
                <PortfolioTitle>Virtual Tour Portfolio</PortfolioTitle>
                <PortfolioSubTitle>My Virtual Tours projects</PortfolioSubTitle>
            </PortfolioHeader>

            <List>
                <Tile>
                    <Name>Przystań Czorsztynianka - Czorsztyn</Name>
                    <Description>Virtual tour of the gondola station in Czorsztyn</Description>
                    <Links>
                        <ImageLink target="_blank" rel="noreferrer" href="https://tour.panoee.net/czorsztynianka-przystan-w-czorsztynie/68f69c7cd87e79ace11b41d4">
                            <ImagePreview
                                src={czorsztyn} />
                        </ImageLink>
                    </Links>
                </Tile>
                <Tile>
                    <Name>Przystań Czorsztynianka - Niedzica</Name>
                    <Description>Virtual tour of the gondola station in Niedzica</Description>
                    <Links>
                        <ImageLink target="_blank" rel="noreferrer" href="https://tour.panoee.net/czorsztynianka-przystan-w-niedzicy/68ff4af382d350983307778d">
                            <ImagePreview
                                src={niedzica} />
                        </ImageLink>
                    </Links>
                </Tile>
                <Tile>
                    <Name>Erica Apartment in Zakopane</Name>
                    <Description>Virtual tour of the Erica apartment in Zakopane</Description>
                    <Links>
                        <ImageLink target="_blank" rel="noreferrer" href="https://tour.panoee.net/6904a27a8eb46a7072e7d4c5/6904a4578eb46a0ac6e7d4ea">
                            <ImagePreview
                                src={erica} />
                        </ImageLink>
                    </Links>
                </Tile>
                <Tile>
                    <Name>Erica Deluxe Apartment in Zakopane</Name>
                    <Description>Virtual tour of the Erica Deluxe apartment in Zakopane</Description>
                    <Links>
                        <ImageLink target="_blank" rel="noreferrer" href="https://tour.panoee.net/69089476886027254905d2f9/6908bd6488602708a305d6a4">
                            <ImagePreview
                                src={deluxe} />
                        </ImageLink>
                    </Links>

                </Tile>
            </List>
        </PortfolioSection>
    );
};

export default Portfolio;