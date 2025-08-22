import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 64px;
  margin-bottom: 63px;

  @media (max-width: 1024px) {
    gap: 48px;
    margin-bottom: 48px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    margin-bottom: 40px;
    text-align: left;
  }

  @media (max-width: 480px) {
    gap: 24px;
    margin-bottom: 32px;
  }
`;

export const InfoContent = styled.div`
  flex: 1;
  min-width: 0;
  margin-top: 155px;

  @media (max-width: 1024px) {
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    margin-top: 0;
    width: 100%;
    order: 2;
  }

  @media (max-width: 480px) {
    margin-top: 0;
  }
`;

export const Photo = styled.img`
  flex-shrink: 0;
  margin-top: 100px;
  height: 384px;
  width: 384px;
  border-radius: 50%;

  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
    margin-top: 32px;
    align-self: flex-start;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 180px;
    margin-top: 32px;
  }

  @media (max-width: 375px) {
    width: 132px;
    height: 132px;
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
  color: ${({ theme }) => theme.color.black};
  font-style: normal;
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  letter-spacing: 0.05em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 38px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 32px;
  }

  @media (max-width: 375px) {
    font-size: 22px;
    line-height: 27px;
  }
`;

export const AboutMe = styled.section`
  color: ${({ theme }) => theme.color.slateGray};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
  }
`;
