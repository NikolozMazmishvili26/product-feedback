import styled from "styled-components";
// import components
import { BoardHeader, Categories, RoadMap } from "../..";

function BoardBox() {
  return (
    <Container>
      <BoardHeader />
      <VisibleContainer>
        <Categories />
      </VisibleContainer>
      <VisibleContainer>
        <RoadMap />
      </VisibleContainer>
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

const VisibleContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
