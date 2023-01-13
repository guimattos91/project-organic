import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;

    };

    body{
        font-family: 'Roboto', sans-serif;
        min-height: 100vh;
        overflow-y: scroll;
    }
`;
