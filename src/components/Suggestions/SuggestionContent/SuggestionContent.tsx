import styled from "styled-components";

// import components
import { SuggestionHeader, Content } from "../../../components";

function SuggestionContent() {
  return (
    <Wrapper>
      {/* suggestion header component */}
      <SuggestionHeader />
      {/* suggestion content component */}
      <Content />
    </Wrapper>
  );
}

export default SuggestionContent;

const Wrapper = styled.div`
  width: 100%;
`;
