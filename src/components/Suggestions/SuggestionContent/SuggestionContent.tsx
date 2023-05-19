import { useState } from "react";
import styled from "styled-components";
// import data
import data from "../../../../data.json";

// import components
import { SuggestionHeader, Content } from "../../../components";

// interface

export interface SuggestionProps {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: Comment[];
}

interface Comment {
  id: number;
  content: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
  replies?: Reply[];
}

interface Reply {
  content: string;
  replyingTo: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
}

function SuggestionContent() {
  //
  const [suggestions, setSuggestions] = useState<SuggestionProps[]>(
    data.productRequests
  );
  const [selectedFilterValue, setSelectedFilterValue] =
    useState("Most Upvotes");

  const onlySuggestions = suggestions.filter(
    (suggestion) => suggestion.status === "suggestion"
  );

  return (
    <Wrapper>
      {/* suggestion header component */}
      <SuggestionHeader
        selectedFilterValue={selectedFilterValue}
        setSelectedFilterValue={setSelectedFilterValue}
        suggestions={onlySuggestions}
        setSuggestions={setSuggestions}
      />
      {/* suggestion content component */}
      <Content suggestions={onlySuggestions} />
    </Wrapper>
  );
}

export default SuggestionContent;

const Wrapper = styled.div`
  width: 100%;
`;
