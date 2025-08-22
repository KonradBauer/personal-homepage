import styled from "styled-components";

export const SkillsContainer = styled.div`
  background: ${({ theme }) => theme.color.white};
  margin: auto;
  padding: 32px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  transition: background-color 0.5s ease-in-out;
  margin-bottom: 72px;

  @media (max-width: 768px) {
    padding: 24px;
    margin-bottom: 56px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    margin-bottom: 48px;
  }

  @media (max-width: 375px) {
    padding: 16px;
    margin-bottom: 40px;
  }
`;

export const ContainerTitle = styled.text`
  display: block;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    line-height: 28px;
  }

  @media (max-width: 375px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const ContainerLine = styled.div`
  margin: 0;
  margin-top: 15px;
  width: 100%;
  height: 1px;
  background: rgba(209, 213, 218, 0.3);
`;

export const Skills = styled.div`
  margin-top: 32px;
  color: ${({ theme }) => theme.color.slateGray};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  padding: 0 8px;

  @media (max-width: 768px) {
    margin-top: 24px;
    font-size: 16px;
    padding: 0 8px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    font-size: 15px;
    padding: 0 8px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 17px;
    padding: 0 8px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-column-gap: 100px;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  padding: 0 0 0 20px;

  @media (max-width: 1024px) {
    grid-column-gap: 60px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    padding: 0 0 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 0 0 20px;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.black};

  &::marker {
    font-size: 30px;
    color: ${({ theme }) => theme.color.blue};
  }

  @media (max-width: 768px) {
    margin-bottom: 6px;
  }
`;
