import styled from "styled-components";
// import interface
import { SuggestionProps } from "../../Suggestions/SuggestionContent/SuggestionContent";
// import component
import { RoadmapContainer } from "../../../components";

function InProgress({
  data,
  title,
}: {
  data: SuggestionProps[];
  title: string;
}) {
  //
  const inProgress = data.filter((inProgress) => inProgress.status === title);

  return (
    <Container>
      <TitleContainer>
        <Title>
          {title}
          <Length>({inProgress.length})</Length>
        </Title>
        <Description>Ideas prioritized for research</Description>
      </TitleContainer>
      <Wrapper>
        {inProgress.map((inProgress) => {
          return (
            <RoadmapContainer
              data={inProgress}
              key={inProgress.id}
              progressTitle={title}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
}

export default InProgress;

const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const TitleContainer = styled.div``;

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: var(--midnight-blue);
  text-transform: capitalize;
`;

const Length = styled.span`
  margin-left: 5px;
`;

const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: var(--slate-blue);
`;
