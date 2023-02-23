import { ButtonHireMe } from "./styled";
import { ReactComponent as ButtonElement } from "../../common/svg/buttonElement.svg";

export const Button = () => {
  const send = () => {
    window.location.href = "mailto:konradbauer94@gmail.com";
  };

  return (
    <ButtonHireMe onClick={send}>
      <ButtonElement />
      Hire Me
    </ButtonHireMe>
  );
};
