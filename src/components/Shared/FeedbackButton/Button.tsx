import styled from "styled-components";

function Button() {
  return <FeedbackButton>+ Add Feedback</FeedbackButton>;
}

export default Button;

const FeedbackButton = styled.button`
  width: 134px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: var(--purple-color);
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: var(--light-lilac);
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    background-color: #c75af6;
  }

  @media screen and (min-width: 768px) {
    width: 158px;
    height: 44px;
    font-size: 14px;
    line-height: 20px;
  }
`;
