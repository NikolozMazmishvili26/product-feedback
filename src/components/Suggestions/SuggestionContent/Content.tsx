import { useState } from "react";
import styled from "styled-components";

// import assets
import { emptyIllustration } from "../../../assets";
// import components
import { FeedbackButton, Suggestion } from "../../../components";
// import data
import data from "../../../../data.json";

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

function Content() {
  //
  const [suggestions, setSuggestions] = useState<SuggestionProps[]>(
    data.productRequests
  );

  return (
    <Container>
      <MainContent>
        {suggestions.length > 0 ? (
          <>
            {/* suggestions container */}
            <Wrapper>
              {suggestions.map((suggestion) => {
                const { id } = suggestion;
                return <Suggestion key={id} suggestion={suggestion} />;
              })}
            </Wrapper>
          </>
        ) : (
          <>
            {/* empty */}
            <EmptyContainer>
              <EmptyImage src={emptyIllustration} alt="empty" />
              <EmptyTitle>There is no feedback yet.</EmptyTitle>
              <EmptyDescription>
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
              </EmptyDescription>
              <FeedbackButton />
            </EmptyContainer>
          </>
        )}
      </MainContent>
    </Container>
  );
}

export default Content;

const Container = styled.div`
  width: 100%;
  padding: 32px 24px 47px 24px;
  @media screen and (min-width: 768px) {
    padding: 24px 0px 54px 0px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  border-radius: 10px;
`;

// empty container styles

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 76px 24px 76px 24px;
  background-color: var(--white-color);
  @media screen and (min-width: 768px) {
    padding: 110px 0px 165px 0px;
  }
`;

const EmptyTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.25px;
  color: var(--midnight-blue);
  margin-top: 39px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.333333px;
  }
  @media screen and (min-width: 1110px) {
    margin-top: 54px;
  }
`;

const EmptyDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  color: var(--slate-blue);
  margin-top: 14px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 23px;
    margin-top: 16px;
    max-width: 410px;
    margin-bottom: 48px;
  }
`;

const EmptyImage = styled.img`
  @media screen and (min-width: 1110px) {
    width: 130px;
  }
`;

// suggestions

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
