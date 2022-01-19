import styled from "styled-components";
import { animateValue, device } from "~/config/utils";

import { Tween } from "react-gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  max-width: 883px;
  margin: 0 auto;
  padding: 10px;

  @media ${device.tablet} {
    padding: 15px 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const Content = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  @media ${device.tablet} {
    flex-basis: 58%;
    max-width: 58%;
  }

  [data-long="true"] & {
    display: none;
    flex-basis: 0%;
    max-width: 0%;
  }
`;

const StatContainer = styled.div`
  flex-basis: 100%;
  max-width: 100%;

  [data-long="true"] & {
    flex-basis: 100%;
    max-width: 100%;
  }

  @media ${device.tablet} {
    flex-basis: 42%;
    max-width: 42%;
    padding: 35px 10px;
  }

  position: relative;

  &:before {
    content: "";
    position: absolute;
    height: 1px;
    width: 80%;
    top: 0;
    left: 50%;
    display: block;
    background-color: #707070;
    transform: translateX(-50%);
  }

  &:after {
    content: "";
    position: absolute;
    height: 1px;
    width: 80%;
    bottom: 0;
    left: 50%;
    display: block;
    background-color: #707070;
    transform: translateX(-50%);
  }

  [data-long="true"] & {
    &:before,
    &:after {
      width: 100%;
    }
  }
`;
const StatCircle = styled.div`
  width: 200px;
  height: 200px;
  background-color: #06a88e;
  color: white;
  margin: 20px auto;
  border-radius: 100%;
  font-size: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatContent = styled.div`
  font-size: 24px;
  line-height: 1.1;
  padding-right: 15px;

  @media ${device.tablet} {
    font-size: 36px;
  }
`;

const Stats = ({ data }) => {
  return (
    <Container>
      <Wrapper data-long={data.long}>
        <StatContainer id="stats">
          <StatCircle>
            <span id="percentage">{data.percent}</span>
            <span>%</span>
          </StatCircle>
          {data.content.length && <StatContent>{data.content}</StatContent>}
        </StatContainer>
        <Content dangerouslySetInnerHTML={{ __html: data.before }} />
      </Wrapper>
    </Container>
  );
};

export default Stats;
