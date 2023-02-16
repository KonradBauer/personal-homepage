import { createGlobalStyle } from "styled-components";

export const theme = {
  color: {
    white: "#FFFFFF",
    mercury: "#E5E5E5",
    slateGray: "#6E7E91",
    black: "#252525",
    ScienceBlue: "#0366D6",
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    background: #FBFBFE;
  }
`;
