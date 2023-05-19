import styled from "styled-components";
// import interface
import { SuggestionProps } from "../SuggestionContent/SuggestionContent";

function ProgressBar({
  title,
  color,
  data,
}: {
  title: string;
  color: string;
  data: SuggestionProps[];
}) {
  //
  const statistic = data.filter((statistic) => statistic.status === title);

  return (
    <Container>
      <LeftSide>
        <ProgressCircle color={color} />
        <Title>{title}</Title>
      </LeftSide>
      <RightSide>
        <Length>{statistic.length}</Length>
      </RightSide>
    </Container>
  );
}

export default ProgressBar;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const ProgressCircle = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: var(--slate-blue);
  text-transform: capitalize;
`;

const RightSide = styled.div``;

const Length = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  text-align: right;
  color: var(--slate-blue);
`;
