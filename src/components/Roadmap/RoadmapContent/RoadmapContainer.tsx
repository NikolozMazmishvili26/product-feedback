import styled from "styled-components";
// import interface
import { SuggestionProps } from "../../Suggestions/SuggestionContent/SuggestionContent";
// import assets
import { upArrow, commentsIcon } from "../../../assets";

function RoadmapContainer({
  data,
  progressTitle,
}: {
  data: SuggestionProps;
  progressTitle: string;
}) {
  //
  const { category, description, title, upvotes, comments } = data;

  return (
    <Container progressTitle={progressTitle}>
      <Content>
        <ProgressBar>
          <Circle progressTitle={progressTitle} />
          <ProgressTitle>{progressTitle}</ProgressTitle>
        </ProgressBar>
        {/*  */}
        <FeatureBox>
          <FeatureTitle>{title}</FeatureTitle>
          <FeatureDescription>{description}</FeatureDescription>
          <Button>{category}</Button>
        </FeatureBox>
        {/* comment  */}
        <CommentContainer>
          <Upvotes>
            <UpArrow src={upArrow} alt="upArrow" />
            <UpvotesLength>{upvotes}</UpvotesLength>
          </Upvotes>
          {/*  */}
          <Comments>
            <CommentsIcon src={commentsIcon} alt="comments" />
            <CommentsLength>{comments?.length}</CommentsLength>
          </Comments>
        </CommentContainer>
      </Content>
    </Container>
  );
}

export default RoadmapContainer;

const Container = styled.div<{ progressTitle: string }>`
  background-color: var(--white-color);
  border-radius: 10px;
  overflow: hidden;

  &::before {
    content: "";
    width: 100%;
    height: 6px;
    background-color: ${(props) =>
      props.progressTitle === "planned"
        ? "var(--orange-color )"
        : props.progressTitle === "in-progress"
        ? "var(--purple-color)"
        : "var(--sky-blue)"};
    display: block;
  }
`;

const Content = styled.div`
  padding: 16px 24px;
  @media screen and (min-width: 768px) {
    padding: 25px 32px 32px 32px;
  }
`;

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  @media screen and (min-width: 768px) {
    column-gap: 16px;
  }
`;

const Circle = styled.div<{ progressTitle: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.progressTitle === "planned"
      ? "var(--orange-color )"
      : props.progressTitle === "in-progress"
      ? "var(--purple-color)"
      : "var(--sky-blue)"};
`;

const ProgressTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: var(--slate-blue);
  text-transform: capitalize;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 23px;
  }
`;

// featureBox

const FeatureBox = styled.div`
  margin-top: 16px;
`;

const FeatureTitle = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.180556px;
  color: var(--midnight-blue);
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

const FeatureDescription = styled.p`
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

const Button = styled.button`
  margin-top: 8px;
  background-color: var(--light-lilac);
  border: none;
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: var(--electric-blue);
  text-transform: capitalize;
  border-radius: 10px;
  width: fit-content;
  height: 30px;
  padding-left: 16px;
  padding-right: 16px;
  @media screen and (min-width: 768px) {
    margin-top: 21px;
  }
`;

// comments

const CommentContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Upvotes = styled.div`
  width: 69px;
  height: 32px;
  background-color: var(--light-lilac);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding-left: 16px;
  padding-right: 16px;
`;

const UpArrow = styled.img``;

const UpvotesLength = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.180556px;
  color: var(--midnight-blue);
`;

const Comments = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
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
