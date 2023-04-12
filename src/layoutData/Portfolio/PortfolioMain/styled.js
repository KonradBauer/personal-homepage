import styled from "styled-components";

export const PortfolioMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  grid-gap: 32px;
  margin: auto;
  margin-top: 24px;
  width: 1216px;
  left: 352px;
  top: 1333px;

  @media (max-width: 375px) {
    width: 375px;
    grid-template-columns: 1fr;
    width: 288px;
    left: 16px;
    top: 1421px;
  }

  @media (width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const Tile = styled.div`
  height: 322px;
  width: 592px;
  left: 0px;
  top: 0px;
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  transition: 0.1s;

  &:hover {
    border-color: ${({ theme }) => theme.color.silver};
  }

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    width: 288px;
    height: 230px;
    word-break: break;
    flex-wrap: wrap;
  }

  @media (min-width: 320px) and (max-width: 374px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 250px;
    height: 220x;
    word-break: break;
    flex-wrap: wrap;
  }
`;

export const ContentContainer = styled.div`
  word-break: break;
  padding: 40px;
  height: 322px;
  left: 0px;
  top: 0px;
  border-radius: 4px;

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2px;
    width: 288px;
    height: 230px;
    word-break: break;
    flex-wrap: wrap;
  }
  @media (min-width: 320px) and (max-width: 374px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2px;
    width: 248px;
    height: 230px;
    word-break: break;
    flex-wrap: wrap;
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

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 375px) {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    word-break: break-word;
  }

  @media (min-width: 320px) and (max-width: 374px) {
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    word-break: break-word;
    flex-wrap: wrap;
  }
`;
