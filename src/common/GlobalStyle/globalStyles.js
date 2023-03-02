import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const theme = {
  color: {
    white: "#FFFFFF",
    mercury: "#E5E5E5",
    slateGray: "#6E7E91",
    black: "#252525",
    scienceBlue: "#0366D6",
    blue: "#2517EB",
    dodgerBlue: "#2188FF",
    silver: "#C4C4C4",
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    background: #FBFBFE;
    box-sizing: border-box;
  }
`;

export const GlobalContainer = styled.div`
  width: 1216px;
  margin: auto;

  @media (max-width: 375px) {
    max-width: 375px;
    margin: auto;
  }
`;
