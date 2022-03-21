import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    body {
        font-family: 'IBM Plex Sans Condensed', sans-serif;
        padding: 20px 60px;
        width: 100%;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }
`;
