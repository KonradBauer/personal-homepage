import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../../common/svg/spinner.svg";
import { ReactComponent as Danger } from "../../common/svg/danger.svg";

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 95px;
  height: 224px;
  border-radius: 0px;

  @media (max-width: 375px) {
    margin-top: 10px;
    max-width: 288px;
    height: 200px;
    margin: auto;
  }
`;

export const StyledDanger = styled(Danger)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 23px;
`;

export const ErrorText = styled.text`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0.05em;
  width: 420px;
  height: 30px;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0.05em;
    max-width: 300px;
  }
`;

export const SecondaryText = styled.text`
  margin-top: 32px;
  width: 426px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    word-break: break-word;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 140%;
    letter-spacing: 0.05em;
    max-width: 200px;
  }
`;

export const AnchorButton = styled.a`
  display: flex;
  margin: auto;
  margin-top: 32px;
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

  @media (max-width: 375px) {
    margin-bottom: 40px;
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
