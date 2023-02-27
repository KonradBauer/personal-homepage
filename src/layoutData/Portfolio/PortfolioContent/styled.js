import styled from "styled-components";

export const PortfolioContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  grid-gap: 32px;
  margin: auto;
  margin-top: 24px;
  width: 1216px;
  left: 352px;
  top: 1333px;
`;

export const Tile = styled.div`
  height: 322px;
  width: 592px;
  left: 0px;
  top: 0px;
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  transition: 0.1s;

  &:hover {
    border-color: ${({ theme }) => theme.color.silver};
  }
`;

export const ContentContainer = styled.div`
  word-break: break;
  padding: 56px;
  height: 322px;
  left: 0px;
  top: 0px;
  border-radius: 4px;
`;

export const Title = styled.text`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.scienceBlue};
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
`;

export const Section = styled.div``;

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

  &:hover {
    text-decoration: underline;
  }
`;
