import styled from "styled-components";

export const SectionBody = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    margin: 72px 0px;
    box-shadow: 0 0 5px #ddd;
`;

export const SectionHeader = styled.header`
    align-items: center;
    padding: 32px;
    padding-bottom: 0;
`;

export const SectionUnderline = styled.div`
    height: 1px;
    background-color: #ddd;
    margin: 10px auto 0;
`;

export const SectionTitle = styled.h2`
    font-size: 30px;
    font-weight: 900;
    color: ${({theme}) => theme.colors.mineShaft};
    margin: 0;
`;

export const Body = styled.div`
    padding: 20px;
`;