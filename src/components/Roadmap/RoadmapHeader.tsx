import styled from "styled-components";
import { Link } from "react-router-dom";

// import components
import { FeedbackButton } from "..";

// import assets
import { leftArrow } from "../../assets";

function Header() {
  return (
    <Container>
      <LeftSide>
        <Link to="/">
          <GoBackContainer>
            <LeftArrow src={leftArrow} alt="leftArrow" />
            <GoBackTitle>Go Back</GoBackTitle>
          </GoBackContainer>
        </Link>
        <RoadmapTitle>Roadmap</RoadmapTitle>
      </LeftSide>
      <RightSide>
        <FeedbackButton />
      </RightSide>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  background-color: var(--deep-blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 24px;
  @media screen and (min-width: 768px) {
    border-radius: 10px;
    padding: 27px 32px;
  }
`;

// header left side

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
`;

const GoBackContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const LeftArrow = styled.img``;

const GoBackTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: var(--white-color);
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const RoadmapTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.333333px;
  }
`;

// header rightside
const RightSide = styled.div``;
