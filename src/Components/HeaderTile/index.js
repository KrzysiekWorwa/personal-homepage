import styled from "styled-components";

export const HeaderTile = styled.article`
display: grid;
grid-template-columns: auto 1fr;
grid-gap: 72px;
align-items: center;
`;

export const Image = styled.img`
width: 384px;
height: 384px;
border-radius: 50%;
`;

export const Content = styled.div``;

export const Caption = styled.p`
font-size: 12px;
font-weight: 700;
color: ${({ theme }) => theme.colors.slateGray};
`;

export const Title = styled.h1`
font-size: 38px;
font-weight: 900;
color: ${({ theme }) => theme.colors.mineShaft};
margin: 0;
`;

export const Description = styled.p`
font-size: 20px;
font-weight: 400;
letter-spacing: 5%;
color: ${({ theme }) => theme.colors.slateGray};
`;