import styled from "styled-components";

export const GalleryWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 32px;

        @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        padding-top: 24px;
    }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

export const GalleryImage = styled.img`
    width: 100%;
    aspect-ratio: 3 / 2;
    border-radius: 8px;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.03);
    }
`;