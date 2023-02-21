import styled from "styled-components";

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 120px;
  max-width: 670px;
`;

export const LetsTalk = styled.text`
  width: 43px;
  height: 16px;
  top: 183px;
  left: calc(50% - 43px / 2 - 129.5px);
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const Email = styled.text`
  display: flex;
  margin-top: 40px;
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
  left: calc(50% - 691px / 2 - 262.5px);
  color: ${({ theme }) => theme.color.black};
  transition: 0.1s;

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }
`;

export const Info = styled.text`
  width: 670px;
  height: 75px;
  left: calc(50% - 670px / 2 - 273px);
  top: 2380px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
`;

export const Logos = styled.div`
  display: flex;
  margin-top: 56px;
  padding-bottom: 20px;
  grid-gap: 24px;
  left: 0.18%;
  right: 0%;
  top: 0.37%;
  bottom: 0.61%;
`;
