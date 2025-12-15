import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "../../common/svg/sunIcon.svg";

export const ThemeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: clamp(8px, 1vw, 12px);
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  color: inherit;
  outline-offset: 8px;
  padding: 0;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: clamp(10px, 1vw, 12px);
  text-transform: uppercase;
  font-weight: 700;
  margin-right: clamp(8px, 1vw, 12px);

  @media (max-width: 420px) {
    display: none;
  }
`;

export const Box = styled.span`
  background: #e5e5e5;
  border: 1px solid #6e7e91;
  padding: 3px;
  border-radius: 12px;
  width: clamp(44px, 4vw, 48px);
  display: flex;
`;

export const IconWrapper = styled.span`
  background-color: gray;
  padding: 3px;
  border-radius: 50%;
  display: flex;
  transition: transform 0.3s ease;

  ${({ move }) =>
    move &&
    css`
      transform: translateX(clamp(24px, 2.3vw, 28px));
    `}
`;

export const StyledSun = styled(SunIcon)`
  color: white;
  width: clamp(14px, 1.4vw, 16px);
  height: clamp(14px, 1.4vw, 16px);
`;
