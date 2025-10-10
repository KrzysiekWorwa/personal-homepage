import styled, { keyframes } from "styled-components";
import { ReactComponent as SpinnerSvg } from "./Spinner.svg"

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const LoadingWrapper = styled.section`
     margin-top: 88px;
     margin-bottom: 88px;
     text-align: center;
     font-size: 20px;
     display: grid;
     justify-items: center;

     @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 32px;
        margin-bottom: 32px;
        font-size: 17px;
    }
`;

export const LoadingSpinner = styled(SpinnerSvg)`
    margin-top: 48px;
    animation: ${rotate} 1s linear infinite;
    height: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 32px;
        width: 60px;
    }
`;