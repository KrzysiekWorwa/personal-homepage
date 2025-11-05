import { virtualTourData } from "./virtualTourData";
import { Description, ImageLink, ImagePreview, Links, List, Name, Tile } from "../styled";


export const VirtualTour = () => (

    <List>
        {virtualTourData.map(({ id, title, description, href, image }) => (
            <Tile key={id}>
                <Name>{title}</Name>
                <Description>{description}</Description>
                <Links>
                    <ImageLink target="_blank" rel="noreferrer" href={href}>
                        <ImagePreview
                            src={image.src}
                            alt={image.alt}
                        />
                    </ImageLink>
                </Links>
            </Tile>
        ))}
    </List>
);
