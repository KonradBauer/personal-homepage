import { Header, Photo, ThisIs, MyName, AboutMe, InfoContent } from "./styled";
import { Button } from "../Buttons";
import image from "../../common/images/konrad.jpg";

export const HeaderContent = () => {
  return (
    <Header>
      <Photo src={image} alt="Konrad Bauer" />
      <InfoContent>
        <ThisIs>This is</ThisIs>
        <MyName>Konrad Bauer</MyName>
        <AboutMe>
          💻 I’m a Frontend Developer in love with React, currently looking for
          new job opportunities. Im' always ready to learn new things and
          technologies.
        </AboutMe>
        <Button />
      </InfoContent>
    </Header>
  );
};
