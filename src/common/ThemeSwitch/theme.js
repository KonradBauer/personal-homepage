import { useDispatch, useSelector } from "react-redux";
import { switchTheme, themeSliceState } from "./themeSlice";
import {
  StyledSun,
  Box,
  Button,
  ThemeContainer,
  IconWrapper,
  Text,
} from "./styled";

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const themeDark = useSelector(themeSliceState);

  return (
    <ThemeContainer>
      <Button onClick={() => dispatch(switchTheme())}>
        <Text>dark mode {themeDark ? "on" : "off"}</Text>
        <Box>
          <IconWrapper move={themeDark}>
            <StyledSun />
          </IconWrapper>
        </Box>
      </Button>
    </ThemeContainer>
  );
};
