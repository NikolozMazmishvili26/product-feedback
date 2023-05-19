import { useState } from "react";
import { SuggestionProps } from "./SuggestionContent";
import styled from "styled-components";

// import assets
import { suggestionsIcon, downArrow } from "../../../assets";

// import components
import { FeedbackButton, FilterValue } from "../../../components";

function SuggestionHeader({
  selectedFilterValue,
  setSelectedFilterValue,
  setSuggestions,
  suggestions,
}: {
  selectedFilterValue: string;
  setSelectedFilterValue: React.Dispatch<React.SetStateAction<string>>;
  suggestions: SuggestionProps[];
  setSuggestions: React.Dispatch<React.SetStateAction<SuggestionProps[]>>;
}) {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const filterValues = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  const handleSelectFilterValue = (filterValue: string) => {
    setSelectedFilterValue(filterValue);
    const sortFunc = (a: SuggestionProps, b: SuggestionProps) => {
      switch (filterValue) {
        case "Most Upvotes":
          return b.upvotes - a.upvotes;
        case "Least Upvotes":
          return a.upvotes - b.upvotes;
        case "Most Comments":
          return (b.comments?.length ?? 0) - (a.comments?.length ?? 0);
        case "Least Comments":
          return (a.comments?.length ?? 0) - (b.comments?.length ?? 0);
        default:
          return 0;
      }
    };
    setSuggestions((suggestions) => [...suggestions].sort(sortFunc));
    setShowFilterMenu(false);
  };

  //

  return (
    <>
      <Container>
        <LeftSide>
          {/* suggestion */}
          <SuggestionContainer>
            <SuggestionImage src={suggestionsIcon} alt="suggestion" />
            <SuggestionTitle>{suggestions.length} Suggestions</SuggestionTitle>
          </SuggestionContainer>
          {/* sort */}
          <SortContainer>
            <SortTitle>Sort by : </SortTitle>
            <MustUpvotesButton
              onClick={() => setShowFilterMenu(!showFilterMenu)}
            >
              {selectedFilterValue}
              <DownArrowImage src={downArrow} alt="arrow" />
            </MustUpvotesButton>
          </SortContainer>
        </LeftSide>
        <RightSide>
          <FeedbackButton />
        </RightSide>
      </Container>
      {/* filter container */}
      {showFilterMenu && (
        <FilterContainer>
          {filterValues.map((filterValue, Index) => {
            const isSelected = selectedFilterValue === filterValue;
            return (
              <FilterValue
                key={Index}
                filterValue={filterValue}
                isSelected={isSelected}
                onSelect={() => handleSelectFilterValue(filterValue)}
              />
            );
          })}
        </FilterContainer>
      )}
    </>
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

const FilterContainer = styled.div`
  position: absolute;
  z-index: 9999;
  left: 50%;
  transform: translate(-50%);
  margin-top: 16px;
  background-color: var(--white-color);
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  border-radius: 10px;
  width: 255px;
`;

const DownArrowImage = styled.img``;

// right side

const RightSide = styled.div``;
