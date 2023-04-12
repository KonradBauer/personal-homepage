import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const themeLight = {
  color: {
    white: "#FFFFFF",
    mercury: "#E5E5E5",
    slateGray: "#6E7E91",
    black: "#252525",
    scienceBlue: "#0366D6",
    blue: "#2517EB",
    dodgerBlue: "#2188FF",
    silver: "#C4C4C4",
    repoTitleColor: "#0366D6",
  },
};

export const themeDark = {
  color: {
    white: "#363636",
    mercury: "#E5E5E5",
    slateGray: "#FFFFFF",
    black: "#FFFFFF",
    scienceBlue: "#0366D6",
    blue: "#2517EB",
    dodgerBlue: "#2188FF",
    silver: "#C4C4C4",
    repoTitleColor: "#FFFFFF",
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    transition: background-color 0.5s ease-in-out;
  }
`;

export const GlobalContainer = styled.div`
  width: 1216px;
  margin: auto;

  @media (max-width: 375px) {
    max-width: 375px;
    margin: auto;
  }

  @media (min-width: 320px) and (max-width: 374px) {
    max-width: 320px;
    margin: auto;
  }
`;
