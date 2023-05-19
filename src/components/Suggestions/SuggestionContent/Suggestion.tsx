import styled from "styled-components";

// import interface
import { SuggestionProps } from "./SuggestionContent";
// import assets
import { upArrow, commentsIcon } from "../../../assets";

function Suggestion({ suggestion }: { suggestion: SuggestionProps }) {
  //
  const { category, description, id, status, title, upvotes, comments } =
    suggestion;
  return (
    <Container>
      <LeftSide>
        {/* description */}
        <Description>
          <Title>{title}</Title>
          <Describe>{description}</Describe>
          <CategoryButton>{category}</CategoryButton>
        </Description>
        {/* upvotes */}
        <UpvotesBox>
          <Arrow src={upArrow} alt="arrow" />
          <Votes>{upvotes}</Votes>
        </UpvotesBox>
      </LeftSide>
      {/* comments */}
      <CommentsBox>
        <CommentsIcon src={commentsIcon} alt="comments" />
        <CommentsLength>{comments?.length}</CommentsLength>
      </CommentsBox>
    </Container>
  );
}

export default Suggestion;

const Container = styled.div`
  position: relative;
  background-color: var(--white-color);
  border-radius: 10px;
  padding: 24px;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
  @media screen and (min-width: 1110px) {
    padding: 28px 32px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 40px;
  }
`;

const Description = styled.div`
  @media screen and (min-width: 768px) {
    order: 2;
  }
`;
const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.180556px;
  color: var(--midnight-blue);
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
  }
`;
const Describe = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: var(--slate-blue);
  margin-top: 9px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 23px;
  }
`;

const CategoryButton = styled.button`
  border-radius: 10px;
  border: none;
  background-color: var(--light-lilac);
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: var(--electric-blue);
  width: 111px;
  height: 30px;
  margin-top: 13px;
  text-transform: capitalize;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-top: 12px;
  }
`;

//

const UpvotesBox = styled.div`
  width: 69px;
  height: 32px;
  border-radius: 10px;
  background-color: var(--light-lilac);
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 13px 0px 16px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    flex-direction: column;
    width: 40px;
    height: 53px;
    padding: 14px 0px 8px 0px;
  }
`;

const Arrow = styled.img``;

const Votes = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.180556px;
  color: var(--midnight-blue);
`;

// comments

const CommentsBox = styled.div`
  position: absolute;
  display: flex;
  column-gap: 4px;
  right: 24px;
  bottom: 31px;
  @media screen and (min-width: 768px) {
    position: initial;
    column-gap: 8px;
  }
`;

const CommentsIcon = styled.img``;

const CommentsLength = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.180556px;
  color: var(--midnight-blue);
`;
