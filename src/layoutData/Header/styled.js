import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: clamp(24px, 5vw, 64px);
  margin-bottom: clamp(32px, 5vw, 63px);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
`;

export const InfoContent = styled.div`
  flex: 1;
  min-width: 0;
  margin-top: clamp(0px, 12vw, 155px);

  @media (max-width: 768px) {
    margin-top: 0;
    width: 100%;
    order: 2;
  }
`;

export const Photo = styled.img`
  flex-shrink: 0;
  margin-top: clamp(32px, 8vw, 100px);
  width: clamp(132px, 30vw, 384px);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 20%;

  @media (max-width: 768px) {
    align-self: flex-start;
  }
`;

export const ThisIs = styled.h2`
  margin: 0 0 clamp(8px, 1vw, 12px) 0;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const MyName = styled.h1`
  margin: 0 0 clamp(16px, 2vw, 24px) 0;
  color: ${({ theme }) => theme.color.black};
  font-weight: 900;
  font-size: clamp(22px, 3vw, 38px);
  line-height: 1.2;
  letter-spacing: 0.05em;
`;

export const AboutMe = styled.p`
  margin: 0 0 clamp(24px, 3vw, 32px) 0;
  color: ${({ theme }) => theme.color.slateGray};
  font-weight: 400;
  font-size: clamp(14px, 1.6vw, 20px);
  line-height: 1.4;
  letter-spacing: 0.05em;
`;
