import styled from "styled-components";
// import components
import { BoardHeader, Categories, RoadMap } from "../..";

function BoardBox() {
  return (
    <Container>
      <BoardHeader />
      <Categories />
      <RoadMap />
    </Container>
  );
}

export default BoardBox;

const Container = styled.div`
  display: grid;
  align-items: stretch;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
  }
  @media screen and (min-width: 1110px) {
    grid-template-columns: 255px;
    row-gap: 24px;
    column-gap: 0px;
  }
`;
