import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

// import interface
import { SuggestionProps } from "../../Suggestions/SuggestionContent/SuggestionContent";
// import component
import { Planned, InProgress, Live } from "../..";

function RoadmapContent({
  data,
  active,
}: {
  data: SuggestionProps[];
  active: string;
}) {
  //
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Container>
      {/*  */}
      <ContentContainer>
        {active === "planned" && isMobile && (
          <Planned data={data} title="planned" />
        )}
        {active === "in-progress" && isMobile && (
          <InProgress data={data} title="in-progress" />
        )}
        {active === "live" && isMobile && <Live data={data} title="live" />}
        {!isMobile && (
          <>
            <Planned data={data} title="planned" />
            <InProgress data={data} title="in-progress" />
            <Live data={data} title="live" />
          </>
        )}
      </ContentContainer>
    </Container>
  );
}

export default RoadmapContent;

const Container = styled.div`
  padding: 24px 24px 98px 24px;
  @media screen and (min-width: 768px) {
    padding: 32px 0px 95px 0px;
  }
`;

const TitleContainer = styled.div``;

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: var(--midnight-blue);
`;
const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: var(--slate-blue);
  margin-top: 4px;
`;

//

const ContentContainer = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 16px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
  }
`;
