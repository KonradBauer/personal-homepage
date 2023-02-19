import styled from "styled-components";

export const SkillsContainer = styled.div`
  background: ${({ theme }) => theme.color.white};
  margin-top: 576px;
  max-width: 1216px;
  height: 404px;
  margin: auto;
  padding: 32px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;

export const ContainerTitle = styled.text`
  width: 328px;
  height: 36px;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
`;

export const ContainerLine = styled.div`
  margin-top: 15px;
  width: 1151px;
  height: 1px;
  left: calc(50% - 1151px / 2 + 1.5px);
  top: 659px;
  background: rgba(209, 213, 218, 0.3); ;
`;

export const Skills = styled.div`
  display: grid;
  margin-top: 48px;
  grid-template-columns: 1fr 1fr 1fr;
  color: ${({ theme }) => theme.color.slateGray};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  margin-bottom: 8px;

  &::marker {
    display: grid;
    font-size: 30px;
    color: ${({ theme }) => theme.color.blue};
  }
`;