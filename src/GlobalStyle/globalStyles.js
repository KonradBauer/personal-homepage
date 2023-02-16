import { createGlobalStyle } from "styled-components";

export const theme = {
  color: {
    white: "#FFFFFF",
    mercury: "#E5E5E5",
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    background: #FBFBFE;
  }
`;
