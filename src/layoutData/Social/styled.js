import styled from "styled-components";
import { ReactComponent as GithubBlack } from "../../common/svg/githubBlack.svg";
import { ReactComponent as LinkedinBlack } from "../../common/svg/linkedinBlack.svg";

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 120px;
  max-width: 670px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 80px;
    gap: 20px;
  }

  @media (max-width: 480px) {
    margin-top: 60px;
    gap: 16px;
  }

  @media (max-width: 375px) {
    margin-top: 48px;
  }
`;

export const LetsTalk = styled.text`
  display: block;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.slateGray};
  margin-bottom: 8px;
`;

export const Email = styled.text`
  display: block;
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
  transition: 0.1s;
  word-break: break-all;

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 34px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 30px;
  }

  @media (max-width: 375px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Info = styled.text`
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 28px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    margin-bottom: 24px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const Logos = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    padding-bottom: 32px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    padding-bottom: 24px;
  }
`;

export const StyledGithubBlack = styled(GithubBlack)`
  color: ${({ theme }) => theme.color.black};
  transition: 0.1s;

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }
`;

export const StyledLinkedinBlack = styled(LinkedinBlack)`
  color: ${({ theme }) => theme.color.black};
  transition: 0.1s;

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }
`;
