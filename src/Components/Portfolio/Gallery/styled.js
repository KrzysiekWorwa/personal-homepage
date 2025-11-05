import styled from "styled-components";

export const GalleryWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 0;

        @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        padding-top: 24px;
    }
`;

export const GalleryGrid = styled.div`
    width: 85vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
  }
`;

export const GalleryImage = styled.img`
    width: 100%;
    aspect-ratio: 3 / 2;
    border-radius: 4px;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.03);
    }
`;