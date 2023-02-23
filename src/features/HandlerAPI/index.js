import {
  Loading,
  LoadingText,
  Error,
  ErrorText,
  ButtonGit,
  SecondaryText,
} from "./styled";
import { ReactComponent as Danger } from "../../common/svg/danger.svg";

export const LoadingStatus = () => {
  return (
    <>
      <Loading>
        <LoadingText>Please wait, projects are being loaded...</LoadingText>
      </Loading>
    </>
  );
};

export const ErrorStatus = () => {
  return (
    <>
      <Error>
        <Danger />
        <ErrorText>Ooops! Something went wrong... </ErrorText>
        <SecondaryText>
          Sorry, failed to load Github projects. You can check them directly on
          Github.
        </SecondaryText>
      </Error>
      <a href="https://github.com/KonradBauer">
        <ButtonGit>Go to Github</ButtonGit>
      </a>
    </>
  );
};
