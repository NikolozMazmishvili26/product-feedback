import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

// import components
import { ProgressBar } from "../../../components";
// import data
import data from "../../../../data.json";
// import interface
import { SuggestionProps } from "../SuggestionContent/SuggestionContent";

function RoadMap() {
  //
  const [dataRoadMap, setDataRoadMap] = useState<SuggestionProps[]>(
    data.productRequests
  );

  return (
    <Container>
      <TitleContainer>
        <Title>Roadmap</Title>
        <Link to="/roadmap">
          <View>View</View>
        </Link>
      </TitleContainer>
      {/*  */}
      <ProgressWrapper>
        <ProgressBar
          title="planned"
          color="var(--orange-color)"
          data={dataRoadMap}
        />
        <ProgressBar
          title="in-progress"
          color="var(--purple-color)"
          data={dataRoadMap}
        />
        <ProgressBar title="live" color="var(--sky-blue)" data={dataRoadMap} />
      </ProgressWrapper>
    </Container>
  );
}

export default RoadMap;

const Container = styled.div`
  display: block;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 24px 18px 36px 24px;

  @media screen and (min-width: 1110px) {
    padding: 19px 24px 24px 24px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 26px;
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: var(--midnight-blue);
`;

const View = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  text-decoration-line: underline;
  color: var(--electric-blue);
  cursor: pointer;
`;

const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;
