import styled from "styled-components";

export const SkillsContainer = styled.div`
  background: ${({ theme }) => theme.color.white};
  max-width: 1216px;
  height: 404px;
  margin: auto;
  width: 1216px;
  height: 404px;
  padding: 32px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;

export const SkillsContainerTitle = styled.text`
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

export const Skills = styled.div`
  display: grid;
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
  &::marker {
    display: grid;
    font-size: 30px;
    color: ${({ theme }) => theme.color.blue};
  }
`;