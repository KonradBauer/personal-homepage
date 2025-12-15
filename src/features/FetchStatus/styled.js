import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../../common/svg/spinner.svg";
import { ReactComponent as Danger } from "../../common/svg/danger.svg";

export const Loading = styled.div`
  margin: clamp(10px, 7vw, 88px) auto 0;
  text-align: center;
  height: auto;
  max-width: clamp(288px, 40vw, 475px);
  width: 100%;
`;

export const LoadingText = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: clamp(14px, 1.6vw, 20px);
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
`;

export const Error = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: clamp(10px, 7.5vw, 95px) auto 0;
  height: auto;
  max-width: clamp(288px, 40vw, 475px);
  width: 100%;
`;

export const StyledDanger = styled(Danger)`
  margin-bottom: clamp(16px, 2vw, 23px);
  width: clamp(32px, 4vw, 48px);
  height: auto;
`;

export const ErrorText = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: clamp(16px, 2vw, 24px);
  line-height: 1.2;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
  text-align: center;
`;

export const SecondaryText = styled.p`
  margin: clamp(20px, 2.6vw, 32px) 0 0;
  max-width: clamp(200px, 35vw, 426px);
  width: 100%;
  font-weight: 400;
  font-size: clamp(12px, 1.6vw, 20px);
  line-height: 1.4;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
  word-break: break-word;
`;

export const AnchorButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: clamp(8px, 1.2vw, 16px);
  margin: clamp(24px, 2.6vw, 32px) auto clamp(0px, 3vw, 40px);
  padding: clamp(10px, 1vw, 12px) clamp(14px, 1.3vw, 16px);
  min-width: 168px;
  width: auto;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  font-weight: 600;
  font-size: clamp(18px, 1.6vw, 20px);
  line-height: 1.2;
  text-align: center;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: box-shadow 0.1s;
  text-decoration: none;

  &:hover {
    box-shadow: 2px -2px 0px #6d93be, -2px 2px 0px #6d93be,
                2px 2px 0px #6d93be, -2px -2px 0px #6d93be;
  }
`;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled(Spinner)`
  margin-top: clamp(32px, 4vw, 48px);
  width: clamp(110px, 12vw, 160px);
  height: clamp(110px, 12vw, 160px);
  animation: ${rotate} 1s linear infinite;
`;
