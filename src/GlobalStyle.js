import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background: ${({ theme }) => theme.colors.body.background};
        font-family: "Inter", sans-serif;
        padding: 119px;
        color: ${({ theme }) => theme.colors.body.text};
        transition: background 0.3s;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding: 21px;
        }
    }
`;