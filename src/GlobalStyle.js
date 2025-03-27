import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background: ${({ theme }) => theme.backgrounds.whiteLilac};
        font-family: "Inter", sans-serif;
        padding: 119px;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding: 21px;
        }
    }
`;