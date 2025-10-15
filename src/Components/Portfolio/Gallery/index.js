import { useState } from "react"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { GalleryGrid, GalleryImage, GalleryWrapper } from "./styled";

const Gallery = ({ images }) => {
    const [index, setIndex] = useState(-1);

    return (
        <GalleryWrapper>
            <GalleryGrid>
                {images.map((img, idx) => (
                    <GalleryImage
                        key={idx}
                        src={img.src}
                        loading="lazy"
                        alt={img.title}
                        onClick={() => setIndex(idx)}
                    />
                ))}
            </GalleryGrid>
            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={images.map((img) => ({ src: img.src, title: img.title }))}
                plugins={[Zoom, Thumbnails]}
                zoom={{
                    maxZoomPixelRatio: 1.5,
                    zoomInMultiplier: 1,
                }}
                onBackdropClick={() => setIndex(-1)}
            />
        </GalleryWrapper>
    );
};

export default Gallery;