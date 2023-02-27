import {
  Tile,
  ContentContainer,
  Title,
  Description,
  Demo,
  Code,
  Links,
} from "../Portfolio/PortfolioContent/styled";

export const Projects = ({ repositories }) => {
  <Tile>
    {repositories.map(({ id, name, description, homepage, html_url }) => (
      <ContentContainer key={id}>
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
    ))}
  </Tile>;
};
