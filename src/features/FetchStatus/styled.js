import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../../common/svg/spinner.svg";

export const Loading = styled.div`
  margin: auto;
  margin-top: 88px;
  text-align: center;
  height: 224px;
  width: 475px;
  border-radius: 0px;

  @media (max-width: 375px) {
    margin-top: 10px;
    width: 288px;
    height: 200px;
  }
`;

export const LoadingText = styled.text`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    letter-spacing: 0.05em;
  }
`;

export const Error = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 88px;
  height: 200px;
  left: 753px;
  top: 1333px;
`;

export const ErrorText = styled.text`
  margin-top: 80px;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0.05em;
  position: absolute;
  width: 420px;
  height: 30px;
  left: calc(50% - 420px / 2 + 6px);
  top: 1609px;
  color: ${({ theme }) => theme.color.black};
`;

export const SecondaryText = styled.text`
  margin-top: 60px;
  position: absolute;
  width: 400px;
  top: 1671px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: 375px) {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 140%;
    letter-spacing: 0.05em;
  }
`;

export const AnchorButton = styled.a`
  display: flex;
  margin: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  width: 168px;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  padding: 12px 16px 12px 16px;
  font-style: normal;
  font-size: 20.0584px;
  line-height: 24px;
  text-align: center;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: 0.1s;
  text-decoration: none;

  &:hover {
    box-shadow: 2px -2px 0px #6d93be, -2px 2px 0px #6d93be, 2px 2px 0px #6d93be,
      -2px -2px 0px #6d93be;
  }
`;

const rotate = keyframes`
to {
  transform: rotate(360deg);
}
`;

export const StyledSpinner = styled(Spinner)`
  margin-top: 48px;
  animation: ${rotate} 1s linear infinite;

  @media (max-width: 375px) {
    width: 110px;
    height: 110px;
  }
`;
