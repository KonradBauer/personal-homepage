import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, selectThemeState } from "./themeSlice";
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
  const themeDark = useSelector(selectThemeState);

  return (
    <ThemeContainer>
      <Button onClick={() => dispatch(toggleTheme())}>
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
