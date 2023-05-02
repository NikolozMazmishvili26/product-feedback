import styled from "styled-components";

// import components
import { BoardBox, SuggestionContent } from "../../components";

function Suggestions() {
  return (
    <Container>
      <BoardBox />
      <SuggestionContent />
    </Container>
  );
}

export default Suggestions;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: auto;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 40px;
    margin-top: 56px;
    padding-left: 39px;
    padding-right: 39px;
  }
  @media screen and (min-width: 1110px) {
    flex-direction: row;
    row-gap: 0;
    column-gap: 30px;
    margin-top: 94px;
  }
  @media screen and (min-width: 1450px) {
    padding: 0px;
  }
`;
