import styled from "styled-components";
import { ReactComponent as ErrorSvgIcon } from "./errorIcon.svg"

export const Wrapper = styled.section`
    margin-top: 88px;
    margin-bottom: 20px;
    text-align: center;
`;

export const ErrorIcon = styled(ErrorSvgIcon)`
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ErrorTitle = styled.h3`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 24px;
    font-weight: 700;
`;

export const ErrorText = styled.p`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 32px;
`;

export const ErrorLinkButton = styled.a`
background: ${({ theme }) => theme.colors.buttonLink.buttonBackground};
color: white;
font-size: 20px;
font-weight: 600;
border: 1px solid;
border-color: ${({ theme }) => theme.colors.buttonLink.buttonBackground};
border-radius: 4px;
padding: 12px 16px;
cursor: pointer;
text-decoration: none;

&:hover {
        border-color: ${({ theme }) => theme.colors.buttonLink.buttonHover};
    }

@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
font-size: 18px;
}
`;