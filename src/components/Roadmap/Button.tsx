import { useEffect, useState } from "react";
import styled from "styled-components";
// import interface
import { SuggestionProps } from "../Suggestions/SuggestionContent/SuggestionContent";

function Button({
  text,
  data,
  setData,
  setActive,
}: {
  text: string;
  data: SuggestionProps[];
  setData: React.Dispatch<React.SetStateAction<SuggestionProps[]>>;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [roadMap, setRoadmap] = useState(data);

  useEffect(() => {
    const planned = roadMap.filter((data) => data.status === "planned");
    setData(planned);
  }, []);

  //
  const length = roadMap.filter((data) => data.status === text).length;

  const handleRoadmap = () => {
    const filterData = roadMap.filter((data) => data.status === text);
    setData(filterData);
  };

  const handleButton = () => {
    setActive(text);
  };

  return (
    <Container onClick={handleRoadmap}>
      <Title onClick={handleButton}>{text}</Title>
      <Length>({length})</Length>
    </Container>
  );
}

export default Button;

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;
const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.180556px;
  color: var(--midnight-blue);
  mix-blend-mode: normal;
  /* opacity: 0.4; */
  text-transform: capitalize;
  cursor: pointer;
`;
const Length = styled.p``;
