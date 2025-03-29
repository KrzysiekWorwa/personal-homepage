import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    color: inherit;
    outline-offset: 8px;
`;

export const Box = styled.span`
    padding: 3px;
    width: 48px;
    background: ${({ theme }) => theme.colors.themeSwitch.boxBackground};
    border-radius: 12px;
    border: 1px solid;
    display: flex;
`;

export const Text = styled.span`
    font-size: 12px;
    font-weight: 700;
    margin-right: 12px;
    text-transform: uppercase;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none; 
    }
`;

export const IconWrapper = styled.span`
    padding: 3px;
    border-radius: 50%;
    background: currentColor;
    display: flex;
    transition: transform 0.3s;

    ${({ $moveToRight }) => $moveToRight && css`
        transform: translateX(20px);
    `}
`;

export const Icon = styled(SunIcon)`
color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;