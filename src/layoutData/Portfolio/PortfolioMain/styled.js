import styled from "styled-components";

export const PortfolioMain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  margin: 0 auto;
  margin-top: 24px;

  @media (max-width: 1024px) {
    grid-gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    grid-gap: 16px;
    margin-top: 16px;
  }
`;

export const Tile = styled.div`
  height: auto;
  min-height: 322px;
  width: 100%;
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  transition: 0.1s;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: ${({ theme }) => theme.color.silver};
  }

  @media (max-width: 768px) {
    min-height: 280px;
  }

  @media (max-width: 480px) {
    min-height: 240px;
  }
`;

export const ContentContainer = styled.div`
  padding: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  word-break: break-word;

  @media (max-width: 768px) {
    padding: 32px;
  }

  @media (max-width: 480px) {
    padding: 24px;
  }

  @media (max-width: 375px) {
    padding: 20px;
  }
`;

export const Title = styled.text`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.repoTitleColor};

  @media (max-width: 375px) {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
  }
  @media (min-width: 320px) and (max-width: 374px) {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.05em;
  }
`;

export const Description = styled.text`
  margin-top: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.slateGray};

  @media (max-width: 375px) {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
  }
  @media (min-width: 320px) and (max-width: 374px) {
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
  }
`;

export const Demo = styled.text`
  grid-gap: 8px;
  margin-top: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.slateGray};

  @media (max-width: 375px) {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
  }
  @media (min-width: 320px) and (max-width: 374px) {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
  }
`;

export const Code = styled.text`
  grid-gap: 8px;
  margin-top: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.slateGray};

  @media (max-width: 375px) {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
  }
  @media (min-width: 320px) and (max-width: 374px) {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
  }
`;

export const Links = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.scienceBlue};
  text-decoration: none;
  word-break: break-word;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
  }
`;
