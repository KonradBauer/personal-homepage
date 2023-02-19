import { createGlobalStyle } from "styled-components";

export const theme = {
  color: {
    white: "#FFFFFF",
    mercury: "#E5E5E5",
    slateGray: "#6E7E91",
    black: "#252525",
    scienceBlue: "#0366D6",
    blue: "#2517EB",
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    background: #FBFBFE;
  }
`;
