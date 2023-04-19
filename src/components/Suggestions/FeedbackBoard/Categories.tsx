import styled from "styled-components";

// import components
import { Category } from "../..";

const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

function Categories() {
  return (
    <Container>
      {categories.map((category, Index) => {
        return <Category key={Index} category={category} />;
      })}
    </Container>
  );
}

export default Categories;

const Container = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    background: #ffffff;
    border-radius: 10px;
    display: flex;
    padding: 24px 18px 36px 24px;
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 14px;
  }
  @media screen and (min-width: 1110px) {
    padding: 24px 50px 24px 24px;
  }
`;
