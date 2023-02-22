import styled from "styled-components";

export const Header = styled.div`
  width: 1216px;
  height: 384px;
  margin: auto;
  margin-top: 119px;
  margin-bottom: 73px;
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
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
`;

export const ButtonHireMe = styled.button`
  position: absolute;
  margin-left: 460px;
  margin-top: 250px;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
`;
