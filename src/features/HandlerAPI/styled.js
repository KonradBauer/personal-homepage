import styled from "styled-components";

export const Loading = styled.div`
  margin: auto;
  margin-top: 88px;
  text-align: center;
  height: 224px;
  width: 475px;
  left: 731px;
  top: 1333px;
  border-radius: 0px;
`;

export const LoadingText = styled.text`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
`;

export const Error = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 88px;
  height: 300px;
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
