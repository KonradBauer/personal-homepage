import { Header, Photo, ThisIs, MyName, AboutMe, InfoContent } from "./styled";
import { Button } from "../Buttons";
import image from "../../common/images/konrad.jpg";
import { ThemeSwitch } from "../../features/ThemeSwitch/theme";

export const HeaderContent = () => {
  return (
    <Header>
      <Photo src={image} alt="Konrad Bauer" />
      <InfoContent>
        <ThemeSwitch />
        <ThisIs>This is</ThisIs>
        <MyName>Konrad Bauer</MyName>
        <AboutMe>
          💻 I’m a passionate Frontend Developer in love with React, currently looking for new job
          opportunities.
        </AboutMe>
        <Button />
      </InfoContent>
    </Header>
  );
};
