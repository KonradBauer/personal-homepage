import styled from "styled-components";

export const SkillsContainer = styled.div`
  background: ${({ theme }) => theme.color.white};
  max-width: 1216px;
  height: 404px;
  margin: auto;
  padding: 32px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 16px;
    gap: 12px;
    width: 292px;
    height: 720px;
    margin-bottom: 50px;
  }
  @media (min-width: 320px) and (max-width: 374px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 16px;
    gap: 12px;
    width: 292px;
    height: 720px;
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
    display: flex;
    flex-direction: column;
    max-width: 292px;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.05em;
  }

  @media (min-width: 320px) and (max-width: 374px) {
    display: flex;
    flex-direction: column;
    max-width: 292px;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.05em;
  }
  @media (min-width: 376px) and (max-width: 390px) {
    display: flex;
    flex-direction: column;
    max-width: 292px;
    font-style: normal;
    font-weight: 900;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.05em;
  }
`;

export const ContainerLine = styled.span`
  margin: 0;
  margin-top: 15px;
  width: 1151px;
  height: 1px;
  top: 659px;
  background: rgba(209, 213, 218, 0.3);

  @media (max-width: 375px) {
    margin-top: 0;
    width: 260px;
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
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
  }

  @media (min-width: 320px) and (max-width: 374px) {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
  }
  @media (min-width: 376px) and (max-width: 390px) {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 0.05em;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-column-gap: 100px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 376px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 8px;

  &::marker {
    display: grid;
    font-size: 30px;
    color: ${({ theme }) => theme.color.blue};
  }
`;
