import styled from "styled-components";

export const SectionBody = styled.section`
    background-color: ${({ theme }) => theme.colors.tile.tileBackground};
    margin: 72px 0px;
    box-shadow: 0 0 5px #ddd;
    border-radius: 4px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 48px 0px; 
    }
`;

export const SectionHeader = styled.header`
    align-items: center;
    padding: 32px;
    padding-bottom: 0;
`;

export const SectionUnderline = styled.div`
    height: 1px;
    background-color: #E5E5E5;
    margin: 10px auto 0;
`;

export const SectionTitle = styled.h2`
    font-size: 30px;
    font-weight: 900;
    color: ${({theme}) => theme.colors.textPrimary};
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;;
    }
`;

export const Body = styled.div`
    padding: 20px;
`;