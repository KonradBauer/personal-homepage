import { ButtonHireMe } from "./styled";
import { ReactComponent as ButtonElement } from "../../common/svg/buttonElement.svg";

export const Button = () => {
  const send = () => {
    window.location.href = "mailto:konradbauer94@gmail.com";
  };

  const title = "konradbauer94@gmail.com";

  return (
    <ButtonHireMe onClick={send} title={title}>
      <ButtonElement />
      Hire Me
    </ButtonHireMe>
  );
};
