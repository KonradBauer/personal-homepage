import styled from "styled-components";

export const SkillsContainer = styled.section`
  background: ${({ theme }) => theme.color.white};
  margin: 0 auto clamp(40px, 6vw, 72px);
  padding: clamp(16px, 2.5vw, 32px);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  transition: background-color 0.5s ease-in-out;
`;

export const ContainerTitle = styled.h2`
  margin: 0 0 clamp(12px, 1.2vw, 15px) 0;
  font-weight: 900;
  font-size: clamp(18px, 2.4vw, 30px);
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
`;

export const ContainerLine = styled.hr`
  margin: clamp(12px, 1.2vw, 15px) 0 0 0;
  border: none;
  width: 100%;
  height: 1px;
  background: rgba(209, 213, 218, 0.3);
`;

export const Skills = styled.div`
  margin-top: clamp(20px, 2.5vw, 32px);
  padding: 0 8px;
  color: ${({ theme }) => theme.color.slateGray};
  font-weight: 400;
  font-size: clamp(14px, 1.4vw, 18px);
  line-height: 1.4;
  letter-spacing: 0.05em;
`;

export const List = styled.ul`
  display: grid;
  grid-column-gap: clamp(20px, 8vw, 100px);
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  padding: 0 0 0 clamp(16px, 1.6vw, 20px);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li`
  margin-bottom: clamp(6px, 0.6vw, 8px);
  color: ${({ theme }) => theme.color.black};

  &::marker {
    font-size: clamp(20px, 2.4vw, 30px);
    color: ${({ theme }) => theme.color.blue};
  }
`;
