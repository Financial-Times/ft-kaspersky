import styled from "styled-components";
import { device } from "~/config/utils";
import q1 from "~/assets/q1.svg";
import q2 from "~/assets/q2.svg";

const Container = styled.div`
  max-width: 883px;
  margin: 0 auto;
  padding: 20px 10px;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #707070;
    top: 0;
    left: 0;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #707070;
    bottom: 0;
    left: 0;
  }

  @media ${device.tablet} {
    padding: 40px 10px;
  }
`;

const Wrapper = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    left: 5px;
    top: 0;
    background-image: url(${q1.src});
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;

    @media ${device.tablet} {
      width: 40px;
      height: 40px;
      left: 0px;
    }
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 5px;
    background-image: url(${q2.src});
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;

    @media ${device.tablet} {
      width: 40px;
      height: 40px;
      top: 0;
      right: 0;
      bottom: initial;
    }
  }
`;

const Content = styled.div`
  line-height: 1;
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: 400;
  padding: 0 10px 0 10px;

  @media ${device.tablet} {
    font-size: 36px;
    padding: 0 35px;
    margin-bottom: 40px;
    font-weight: 500;
  }
`;
const Author = styled.div`
  text-align: left;
  font-size: 20px;
  line-height: 1;
  text-transform: uppercase;
  position: relative;
  padding: 0 5px;

  &:before {
    content: "—";
    display: block;
    position: absolute;
    top: 50%;
    left: -25px;
    transform: translate(50%, -50%);
  }

  @media ${device.tablet} {
    padding: 0 35px;
  }
`;

const Quote = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        <Content>{data.content}</Content>
        <Author>{data.author}</Author>
      </Wrapper>
    </Container>
  );
};

export default Quote;
