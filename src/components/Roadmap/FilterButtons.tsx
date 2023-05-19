import styled from "styled-components";
// import component
import { Button } from "../../components";
// import interface
import { SuggestionProps } from "../Suggestions/SuggestionContent/SuggestionContent";

function FilterButtons({
  roadmapData,
  setRoadmapData,
  setActive,
}: {
  roadmapData: SuggestionProps[];
  setRoadmapData: React.Dispatch<React.SetStateAction<SuggestionProps[]>>;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Wrapper>
      <Content>
        <Button
          text="planned"
          data={roadmapData}
          setData={setRoadmapData}
          setActive={setActive}
        />
        <Button
          text="in-progress"
          data={roadmapData}
          setData={setRoadmapData}
          setActive={setActive}
        />
        <Button
          text="live"
          data={roadmapData}
          setData={setRoadmapData}
          setActive={setActive}
        />
      </Content>
    </Wrapper>
  );
}

export default FilterButtons;

const Wrapper = styled.div`
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #8c92b3;
    display: block;
    opacity: 0.25;
    margin-top: 17px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 41px 0px 41px;
`;
