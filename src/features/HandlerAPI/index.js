import { Loading, LoadingText, Error, ErrorText } from "./styled";
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
      </Error>
    </>
  );
};
