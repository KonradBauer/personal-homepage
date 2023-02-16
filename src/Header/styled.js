import styled from "styled-components";

export const Header = styled.div`
  max-width: 1216px;
  height: 384px;
  margin: auto;
  margin-top: 119px;
`;

export const Photo = styled.img`
  position: absolute;
  width: 398px;
  height: 398px;
  left: calc(50% - 398px / 2 - 416px);
  top: 115px;
  border-radius: 50%;
`;

export const ThisIs = styled.text`
  position: absolute;
  width: 43px;
  height: 16px;
  left: calc(50% - 43px / 2 - 129.5px);
  top: 183px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const MyName = styled.text`
  position: absolute;
  width: 415px;
  height: 46px;
  left: calc(50% - 415px / 2 + 56.5px);
  top: 211px;
  color: ${({ theme }) => theme.color.black};
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  letter-spacing: 0.05em;
`;

export const AboutMe = styled.text`
  position: absolute;
  width: 633px;
  height: 57px;
  left: calc(50% - 633px / 2 + 165.5px);
  top: 292px;
  color: ${({ theme }) => theme.color.slateGray};
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
`;

export const ButtonHireMe = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  position: absolute;
  width: 154px;
  height: 49px;
  left: 809px;
  top: 381px;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.ScienceBlue};
  color: ${({ theme }) => theme.color.white};
`;