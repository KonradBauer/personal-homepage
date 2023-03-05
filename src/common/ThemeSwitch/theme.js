import {
  StyledSun,
  Box,
  Button,
  ThemeContainer,
  IconWrapper,
  Text,
} from "./styled";

export const ThemeSwitch = () => {
  return (
    <ThemeContainer>
      <Button>
        <Text>dark mode off</Text>
        <Box>
          <IconWrapper>
            <StyledSun />
          </IconWrapper>
        </Box>
      </Button>
    </ThemeContainer>
  );
};
