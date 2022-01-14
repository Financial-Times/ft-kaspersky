import styled from "styled-components";
import { animateValue, device } from "~/config/utils";

import { Tween } from "react-gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  max-width: 883px;
  margin: 30px auto;
  padding: 10px;
  position: relative;

  @media ${device.tablet} {
    padding: 35px 10px;
  }

  &:before {
    content: "";
    height: 1px;
    display: block;
    width: calc(100% - 20px);
    background-color: black;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &:after {
    content: "";
    height: 1px;
    display: block;
    width: calc(100% - 20px);
    background-color: black;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;

    [data-flip="true"] & {
      flex-direction: row-reverse;
    }
  }
`;

const Quote = styled.div`
  font-family: MetricWeb, sans-serif;
  font-weight: 500;
  line-height: 1;
  flex-basis: 100%;
  max-width: 100%;
  font-size: 40px;
  margin-bottom: 20px;
  display: grid;
  place-content: center;

  @media ${device.tablet} {
    margin-bottom: 0;
    flex-basis: 60%;
    max-width: 60%;
    font-size: 60px;
  }
`;

const CircleContainer = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  display: flex;
  place-items: center;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    flex-basis: 40%;
    max-width: 40%;
  }
`;

const Circle = styled.div``;
const CircleWrapper = styled.div`
  margin-right: 15px;

  @media ${device.tablet} {
    &:nth-child(1) {
      margin-right: 15px;
    }
  }
`;

const CircleSpan = styled.div`
  display: flex;
  width: 104px;
  height: 104px;
  background: #06a88e;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: MetricWeb, sans-serif;
  font-weight: 500;
  font-size: 40px;

  @media ${device.tablet} {
    font-size: 60px;
    width: 144px;
    height: 144px;
  }
`;
const CircleTitle = styled.div`
  color: #06a88e;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
`;

const MiniPullOut = ({ data, id }) => {
  return (
    <Container data-flip={data.invert}>
      <Wrapper>
        <Tween
          duration={10000}
          to={{
            scrollTrigger: {
              trigger: `#mini-${id}`,
              start: "-400px 100px",
              end: "bottom 0",
              scrub: 0.5,
              once: true,
              onEnter: () => {
                return data.circles.map((item) => {
                  animateValue(
                    `percent-${id}-${item.id}`,
                    0,
                    item.perCent,
                    2500
                  );
                });
              },
              markers: false,
            },
          }}
        >
          <Quote>{data.quote}.</Quote>
          <CircleContainer id={`mini-${id}`}>
            {data.circles.map((item, i) => {
              return (
                <CircleWrapper key={i}>
                  <CircleSpan>
                    <Circle id={`percent-${id}-${item.id}`}>0</Circle>
                    <span>%</span>
                  </CircleSpan>
                  <CircleTitle>{item.title}</CircleTitle>
                </CircleWrapper>
              );
            })}
          </CircleContainer>
        </Tween>
      </Wrapper>
    </Container>
  );
};

export default MiniPullOut;
