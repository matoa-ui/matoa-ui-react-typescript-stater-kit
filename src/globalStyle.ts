import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /*------------------------------------*\
    # Global
  \*------------------------------------*/
    html {
      box-sizing: border-box;
      height: 100%;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }

    body {
      height: 100%;
      min-height: 100%;
      font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      font-weight: 400;
      color: #575756;
    }

    h1, h2, h3, h4, h5 {
      color: #2B486D;
      margin: 0;
    }

    h1 {
      font-weight: 600;
      font-size: 28px;
      line-height: normal;
      margin: 0 0 20px;
    }
    h2 {
      font-weight: 600;
      font-size: 24px;
      line-height: normal;
      margin: 0 0 20px;
    }
    h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: normal;
      margin: 0 0 20px;
    }
    h4 {
      font-weight: 600;
      font-size: 18px;
      line-height: normal;
      margin: 0 0 10px;
    }
    h5 {
      font-weight: 600;
      font-size: 16px;
      line-height: normal;
      margin: 0 0 10px;
    }
    h6 {
      font-weight: 600;
      font-size: 14px;
      line-height: normal;
      margin: 0 0 10px;
    }

    a, * > a, a:hover, a:focus {
      text-decoration: none;
      outline: none;

      -webkit-transition: all 0.2s ease-in;
      -moz-transition: all 0.2s ease-in;
      -ms-transition:all 0.2s ease-in;
      -o-transition: all 0.2s ease-in;
      transition: all 0.2s ease-in;
    }
    a {
      font-size: 1em;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    img {
      max-width: 100%;
    }
    iframe {
      max-width: initial !important;
    }
    #root {
      height: 100%;
    }

  /*------------------------------------*\
  # Custom
  \*------------------------------------*/


`;
