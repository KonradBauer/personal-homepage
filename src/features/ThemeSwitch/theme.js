import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, selectThemeState, selectThemeIsDark } from "./themeSlice";
import { StyledSun, Box, Button, ThemeContainer, IconWrapper, Text } from "./styled";

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDark = useSelector(selectThemeState);

  return (
    <ThemeContainer>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Text>dark mode {isDark ? "on" : "off"}</Text>
        <Box>
          <IconWrapper move={isDark}>
            <StyledSun />
          </IconWrapper>
        </Box>
      </Button>
    </ThemeContainer>
  );
};
