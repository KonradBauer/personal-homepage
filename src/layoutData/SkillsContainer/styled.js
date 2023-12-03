import styled from "styled-components";

export const SkillsContainer = styled.div`
  background: ${({ theme }) => theme.color.white};
  margin: auto;
  padding: 32px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  transition: background-color 0.5s ease-in-out;

  @media (max-width: 375px) {
    padding: 16px;
    gap: 12px;
    width: 100%;
    height: auto;
    margin-bottom: 50px;
  }
`;

export const ContainerTitle = styled.text`
  height: 36px;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: 375px) {
    max-width: 100%;
    font-size: 18px;
    line-height: 22px;
  }
`;

export const ContainerLine = styled.div`
  margin: 0;
  margin-top: 15px;
  width: 100%;
  height: 1px;
  color: rgba(209, 213, 218, 0.3);

  @media (max-width: 375px) {
    width: 100%;
    height: 1px;
  }
`;

export const Skills = styled.div`
  margin-top: 0;
  color: ${({ theme }) => theme.color.slateGray};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;

  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-column-gap: 100px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 376px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.black};

  &::marker {
    display: grid;
    font-size: 30px;
    color: ${({ theme }) => theme.color.blue};
  }
`;
