import { useState } from "react";
import styled from "styled-components";

// import assets
import { checkIcon } from "../../../assets";

function FilterValue({
  filterValue,
  isSelected,
  onSelect,
}: {
  filterValue: string;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <Content>
      <Container>
        <Value onClick={onSelect}>{filterValue}</Value>
        {isSelected && <CheckIcon src={checkIcon} alt="check" />}
      </Container>
    </Content>
  );
}

export default FilterValue;

const Value = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: var(--slate-blue);
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    color: var(--purple-color);
  }
`;

const Content = styled.div`
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--midnight-blue);
    display: block;
    opacity: 0.15;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
`;

const CheckIcon = styled.img``;
