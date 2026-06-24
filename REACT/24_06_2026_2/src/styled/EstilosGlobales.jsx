import { createGlobalStyle } from "styled-components";

const EstilosGlobales = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: ${({theme}) => theme.colores.fondo};
        color: ${({theme}) => theme.colores.texto}
    }
`;

export default EstilosGlobales;
