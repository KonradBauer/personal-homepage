import { SocialContainer, LetsTalk, Email, Info, Logos } from "./styled";
import { ReactComponent as Hand } from "../../common/svg/hand.svg";
import { ReactComponent as GithubBlack } from "../../common/svg/githubBlack.svg";
import { ReactComponent as LinkedInBlack } from "../../common/svg/linkedinBlack.svg";

export const Socials = () => {
  return (
    <SocialContainer>
      <LetsTalk>Let’s talk!</LetsTalk>
      <Email>konradbauer94@gmail.com</Email>
      <Info>
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to conatct me
        <Hand />
      </Info>
      <Logos>
        <a href="https://github.com/KonradBauer">
          <GithubBlack title="GitHub" />
        </a>
        <a href="https://linkedin.com/in/konrad-bauer">
          <LinkedInBlack title="LinkedIn" />
        </a>
      </Logos>
    </SocialContainer>
  );
};
