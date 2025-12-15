import styled from "styled-components";

export const PortfolioMain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: clamp(16px, 2vw, 32px);
  margin: 0 auto;
  margin-top: clamp(16px, 1.5vw, 24px);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

export const Tile = styled.div`
  height: auto;
  min-height: clamp(240px, 20vw, 322px);
  width: 100%;
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  transition: border-color 0.1s;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  &:hover {
    border-color: ${({ theme }) => theme.color.silver};
  }
`;

export const ContentContainer = styled.div`
  padding: clamp(20px, 3vw, 40px);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2vw, 24px);
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;

export const Title = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: clamp(16px, 1.8vw, 24px);
  line-height: 1.2;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.repoTitleColor};
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const Description = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: clamp(14px, 1.4vw, 18px);
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.slateGray};
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const Demo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(4px, 0.5vw, 8px);
  font-weight: 400;
  font-size: clamp(13px, 1.4vw, 18px);
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const Code = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(4px, 0.5vw, 8px);
  margin-top: clamp(4px, 0.5vw, 8px);
  font-weight: 400;
  font-size: clamp(13px, 1.4vw, 18px);
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const Links = styled.a`
  font-weight: 400;
  font-size: clamp(13px, 1.4vw, 18px);
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.scienceBlue};
  text-decoration: none;
  overflow-wrap: break-word;
  word-break: break-all;
  hyphens: auto;

  &:hover {
    text-decoration: underline;
  }
`;
