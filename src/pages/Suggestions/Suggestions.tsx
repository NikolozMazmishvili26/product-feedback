import styled from "styled-components";

// import components
import { BoardBox } from "../../components";

function Suggestions() {
  return (
    <Container>
      <BoardBox />
      <SuggestionBox>2</SuggestionBox>
    </Container>
  );
}

export default Suggestions;

const Container = styled.div``;

const SuggestionBox = styled.div``;
