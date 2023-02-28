import { Header, Photo, ThisIs, MyName, AboutMe } from "./styled";
import { Button } from "../Buttons";
import image from "../../common/images/konrad.png";

export const HeaderContent = () => {
  return (
    <Header>
      <Photo src={image} alt="Konrad Bauer" />
      <ThisIs>This is</ThisIs>
      <MyName>Konrad Bauer</MyName>
      <AboutMe>
        👨💻 I’m a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </AboutMe>
      <Button />
    </Header>
  );
};
