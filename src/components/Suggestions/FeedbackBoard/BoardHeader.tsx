import styled from "styled-components";

// import assets
import { hamburger } from "../../../assets";

function BoardHeader() {
  return (
    <Container>
      <LeftSide>
        <Title>Frontend Mentor</Title>
        <Text>Feedback Board</Text>
      </LeftSide>
      <RightSide>
        <Hamburger src={hamburger} alt="hamburger" />
      </RightSide>
    </Container>
  );
}

export default BoardHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  @media screen and (min-width: 768px) {
    align-items: flex-end;
    border-radius: 10px;
  }
  @media screen and (min-width: 1110px) {
    height: 137px;
    padding: 0px 0px 24px 24px;
  }
`;

// left side

const LeftSide = styled.div``;

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.1875px;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.25px;
  }
`;
const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 22px;
  }
`;

// right side

const RightSide = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.img`
  cursor: pointer;
`;
