import styled from "styled-components";
import { ReactComponent as GithubBlack } from "../../common/svg/githubBlack.svg";
import { ReactComponent as LinkedinBlack } from "../../common/svg/linkedinBlack.svg";

export const SocialContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2vw, 24px);
  margin-top: clamp(48px, 10vw, 120px);
  max-width: 670px;
  width: 100%;
`;

export const LetsTalk = styled.p`
  margin: 0 0 clamp(6px, 0.8vw, 8px) 0;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const Email = styled.a`
  display: block;
  font-weight: 900;
  font-size: clamp(18px, 2.6vw, 32px);
  line-height: 1.2;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
  transition: color 0.1s;
  word-break: break-all;

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }
`;

export const Info = styled.p`
  margin: 0 0 clamp(20px, 2.6vw, 32px) 0;
  font-weight: 400;
  font-size: clamp(14px, 1.4vw, 18px);
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
`;

export const Logos = styled.div`
  display: flex;
  gap: clamp(16px, 2vw, 24px);
  margin-top: clamp(16px, 2vw, 24px);
  padding-bottom: clamp(24px, 3.3vw, 40px);
`;

export const StyledGithubBlack = styled(GithubBlack)`
  color: ${({ theme }) => theme.color.black};
  transition: color 0.1s;

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }
`;

export const StyledLinkedinBlack = styled(LinkedinBlack)`
  color: ${({ theme }) => theme.color.black};
  transition: color 0.1s;

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }
`;
