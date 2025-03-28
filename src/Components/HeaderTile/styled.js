import styled from "styled-components";

export const HeaderBox = styled.article`
display: grid;
grid-template-columns: auto 1fr;
grid-gap: 72px;
align-items: center;

@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr; 
        grid-template-rows: auto auto; 
        grid-gap: 16px;
    }
`;

export const HeaderImage = styled.img`
    width: clamp(128px, 30vw, 384px);
    height: clamp(128px, 30vw, 384px);
border-radius: 50%;

@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 128px;
    height: 128px;
    text-align: center;
}
`;

export const HeaderContent = styled.div``;

export const HeaderCaption = styled.p`
font-size: 12px;
font-weight: 700;
color: ${({ theme }) => theme.colors.slateGray};
`;

export const HeaderTitle = styled.h1`
font-size: 38px;
font-weight: 900;
color: ${({ theme }) => theme.colors.mineShaft};
margin: 0;
@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
font-size: 22px;
}
`;

export const HeaderDescription = styled.p`
font-size: 20px;
font-weight: 400;
letter-spacing: 5%;
color: ${({ theme }) => theme.colors.slateGray};
`;

export const HeaderButton = styled.a`
background: ${({ theme }) => theme.backgrounds.scienceBlue};
color: ${({ theme }) => theme.colors.white};
font-size: 20px;
font-weight: 600;
border: 1px solid;
border-radius: 4px;
padding: 12px 16px;
display: flex;
align-items: center;
gap: 16px;
cursor: pointer;
text-decoration: none;
max-width: 154px;

&:hover {
        border-color: ${({ theme }) => theme.colors.anakiwa};
    }

    img {
    width: 24px;
    height: 24px;
  }

@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
font-size: 18px;
}
`;