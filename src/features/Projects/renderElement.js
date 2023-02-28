import {
  Tile,
  ContentContainer,
  Title,
  Description,
  Demo,
  Code,
  Links,
  Section,
  PortfolioMain,
} from "../../layoutData/Portfolio/PortfolioMain/styled";

export const Projects = ({ projects }) => (
  <PortfolioMain>
    {projects.map(({ id, name, description, homepage, html_url }) => (
      <Tile key={id}>
        <ContentContainer>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <Section>
            {!!homepage && (
              <Demo>
                Demo:{" "}
                <Links target="_blank" rel="noreferrer" href={homepage}>
                  {homepage}
                </Links>
              </Demo>
            )}
            <Code>
              Code:{" "}
              <Links target="_blank" rel="noreferrer" href={html_url}>
                {html_url}
              </Links>
            </Code>
          </Section>
        </ContentContainer>
      </Tile>
    ))}
  </PortfolioMain>
);
