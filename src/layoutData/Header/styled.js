import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  margin-bottom: 63px;

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
    grid-gap: 32px;
  }
`;

export const InfoContent = styled.div`
  margin-top: 155px;
  width: 60%;

  @media (max-width: 375px) {
    margin-left: 16px;
    margin-top: -28px;
    width: 275px;
    flex-wrap: wrap;
  }

  @media (max-width: 320px) {
    margin-left: 16px;
    margin-top: -1-px;
    width: 275px;
    flex-wrap: wrap;
  }
`;

export const Photo = styled.img`
  display: flex;
  flex-shrink: 0;
  margin-top: 100px;
  height: 384px;
  width: 384px;
  border-radius: 50%;

  @media (max-width: 375px) {
    border-radius: 50%;
    width: 132px;
    height: 132px;
    margin-left: 13px;
    margin-top: 32px;
  }
`;

export const ThisIs = styled.h2`
  width: 43px;
  height: 16px;
  top: 183px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const MyName = styled.h1`
  display: flex;
  color: ${({ theme }) => theme.color.black};
  font-style: normal;
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  letter-spacing: 0.05em;

  @media (max-width: 375px) {
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.05em;
  }
`;

export const AboutMe = styled.section`
  height: 57px;
  top: 292px;
  color: ${({ theme }) => theme.color.slateGray};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;

  @media (max-with: 375px) {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 140%;
    letter-spacing: 0.05em;
    width: 275px;
    height: 96px;
  }
`;
