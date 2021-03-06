import { createGlobalStyle } from "styled-components";
import "rc-slider/assets/index.css";
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background-color: #121212;
        font-family: 'Roboto', sans-serif;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing:antialiased !important;
    }
`;

export default GlobalStyle;
