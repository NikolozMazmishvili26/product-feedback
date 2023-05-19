// import interface
import { SuggestionProps } from "../../Suggestions/SuggestionContent/SuggestionContent";

// import component
import { RoadmapContainer } from "../../../components";
import styled from "styled-components";

function Planned({ data, title }: { data: SuggestionProps[]; title: string }) {
  //
  const planned = data.filter((plan) => plan.status === title);

  return (
    <Container>
      <TitleContainer>
        <Title>
          {title}
          <Length>({planned.length})</Length>
        </Title>
        <Description>Ideas prioritized for research</Description>
      </TitleContainer>
      <Wrapper>
        {planned.map((plan) => {
          return (
            <RoadmapContainer data={plan} key={plan.id} progressTitle={title} />
          );
        })}
      </Wrapper>
    </Container>
  );
}

export default Planned;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  @media screen and (min-width: 768px) {
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
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
