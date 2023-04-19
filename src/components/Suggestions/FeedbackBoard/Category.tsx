import styled from "styled-components";

function Category({ category }: { category: string }) {
  return (
    <Container>
      <Title>{category}</Title>
    </Container>
  );
}

export default Category;

const Container = styled.div`
  width: fit-content;
  height: 30px;
  border-radius: 10px;
  background-color: var(--light-lilac);
  padding: 5px 16px;
  cursor: pointer;
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: var(--electric-blue);
`;
