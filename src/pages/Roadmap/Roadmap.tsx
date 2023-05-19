import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import styled from "styled-components";

// import components
import { RoadmapHeader, RoadmapContent, FilterButtons } from "../../components";
// import interface
import { SuggestionProps } from "../../components/Suggestions/SuggestionContent/SuggestionContent";
// import data
import data from "../../../data.json";

function Roadmap() {
  //
  const [roadmapData, setRoadmapData] = useState<SuggestionProps[]>(
    data.productRequests
  );

  const [active, setActive] = useState("planned");

  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (!isMobile) {
      setRoadmapData(data.productRequests);
    }
  }, [isMobile]);

  return (
    <Container>
      {/* header */}
      <RoadmapHeader />
      {/* mobile filter buttons */}
      {isMobile ? (
        <FilterButtons
          roadmapData={roadmapData}
          setRoadmapData={setRoadmapData}
          setActive={setActive}
        />
      ) : null}
      {/* content */}
      <RoadmapContent data={roadmapData} active={active} />
    </Container>
  );
}

export default Roadmap;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  background-color: var(--pale-grayish-blue);
  @media screen and (min-width: 768px) {
    padding: 56px 40px 95px 40px;
  }
  @media screen and (min-width: 1110px) {
    padding: 78px 0px 179px 0px;
  }
`;

const Header = styled.div`
  width: 100%;
  background-color: var(--deep-blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 24px;
`;

// header left side

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
`;

const GoBackContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const LeftArrow = styled.img``;

const GoBackTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: var(--white-color);
`;

const RoadmapTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: #ffffff;
`;

// header rightside
const RightSide = styled.div``;
