import { useState } from "react";
import styled from "styled-components";

function Category({
  category,
  isActive,
  onClick,
}: {
  category: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Container isActive={isActive} onClick={onClick}>
      <Title isActive={isActive}>{category}</Title>
    </Container>
  );
}

export default Category;

const Container = styled.div<{ isActive: boolean }>`
  width: fit-content;
  height: 30px;
  border-radius: 10px;
  background-color: var(--light-lilac);
  padding: 5px 16px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isActive ? "var(--electric-blue)" : null};
`;

const Title = styled.p<{ isActive: boolean }>`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: var(--electric-blue);
  color: ${(props) =>
    props.isActive ? "var(--white-color)" : "var(--electric-blue)"};
`;
