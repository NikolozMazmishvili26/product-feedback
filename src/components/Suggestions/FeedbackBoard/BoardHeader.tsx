import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

// import assets
import { hamburger, closeIcon } from "../../../assets";
// import components
import { Categories, RoadMap } from "../../../components";

function BoardHeader() {
  //
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [showMenu]);

  const backDropRef = useRef(null);

  const handleBackdrop: React.MouseEventHandler<HTMLDivElement> | undefined = (
    event
  ) => {
    if (event.target === backDropRef.current) {
      setShowMenu(false);
    }
  };

  return (
    <>
      <Container>
        <LeftSide>
          <Title>Frontend Mentor</Title>
          <Text>Feedback Board</Text>
        </LeftSide>
        <RightSide>
          {showMenu ? (
            <MenuIcon
              src={closeIcon}
              alt="close"
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <MenuIcon
              src={hamburger}
              alt="hamburger"
              onClick={() => setShowMenu(true)}
            />
          )}
        </RightSide>
      </Container>
      {/* Backdrop */}
      {showMenu && (
        <Backdrop ref={backDropRef} onClick={handleBackdrop}>
          <Content>
            <Categories />
            <RoadMap />
          </Content>
        </Backdrop>
      )}
    </>
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

const MenuIcon = styled.img`
  cursor: pointer;
`;

// Backdrop

const Backdrop = styled.div`
  width: 100%;
  position: absolute;
  height: 100vh;
  z-index: 9999;
  top: 73px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: height 2s ease-in;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  width: 271px;
  height: 100%;
  background-color: var(--pale-grayish-blue);
  padding: 24px 24px 0px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;
