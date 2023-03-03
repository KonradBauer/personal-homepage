import styled from "styled-components";
import { ReactComponent as GithubBlack } from "../../common/svg/githubBlack.svg";
import { ReactComponent as LinkedinBlack } from "../../common/svg/linkedinBlack.svg";

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 120px;
  max-width: 670px;

  @media (max-width: 375px) {
    margin: auto;
    width: 288px;
    height: 236px;
    left: 16px;
    top: 2567px;
  }
`;

export const LetsTalk = styled.text`
  margin-top: 30px;
  height: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const Email = styled.text`
  display: flex;
  margin-top: 20px;
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

  @media (max-width: 375px) {
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.05em;
    margin-top: 12px;
    margin-bottom: -12px;
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

  @media (max-width: 375px) {
    width: 288px;
    display: flex;
    flex-wrap: wrap;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
    word-break: break-word;
  }
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
