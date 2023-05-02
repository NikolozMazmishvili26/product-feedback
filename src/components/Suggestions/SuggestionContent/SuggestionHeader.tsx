import styled from "styled-components";

// import assets
import { suggestionsIcon, downArrow } from "../../../assets";

// import components
import { FeedbackButton } from "../../../components";

function SuggestionHeader() {
  return (
    <Container>
      <LeftSide>
        {/* suggestion */}
        <SuggestionContainer>
          <SuggestionImage src={suggestionsIcon} alt="suggestion" />
          <SuggestionTitle>6 Suggestions</SuggestionTitle>
        </SuggestionContainer>
        {/* sort */}
        <SortContainer>
          <SortTitle>Sort by : </SortTitle>
          <MustUpvotesButton>
            Most Upvotes
            <DownArrowImage src={downArrow} alt="arrow" />
          </MustUpvotesButton>
        </SortContainer>
      </LeftSide>
      <RightSide>
        <FeedbackButton />
      </RightSide>
    </Container>
  );
}

export default SuggestionHeader;

const Container = styled.div`
  background-color: var(--deep-blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
  @media screen and (min-width: 768px) {
    border-radius: 10px;
    padding: 14px 12px 14px 24px;
  }
  @media screen and (min-width: 1110px) {
    height: 72px;
    width: 100%;
  }
`;

// left side
const LeftSide = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    column-gap: 38px;
  }
`;

// suggestion

const SuggestionContainer = styled.div`
  column-gap: 16px;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
const SuggestionImage = styled.img``;
const SuggestionTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: var(--white-color);
`;

// sort

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3px;
`;

const SortTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  text-align: right;
  color: var(--light-lilac);
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const MustUpvotesButton = styled.button`
  border: none;
  background-color: transparent;
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  text-align: right;
  color: var(--light-lilac);
  cursor: pointer;
  display: flex;
  column-gap: 9px;
  align-items: center;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const DownArrowImage = styled.img``;

// right side

const RightSide = styled.div``;
