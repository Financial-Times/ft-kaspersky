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
  position: relative;

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

const Quote = styled.div`
  font-family: MetricWeb, sans-serif;
  font-weight: 500;
  line-height: 1;
  flex-basis: 100%;
  max-width: 100%;
  @media ${device.tablet} {
    flex-basis: 60%;
    max-width: 60%;
    font-size: 60px;
  }
`;

const CircleContainer = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  @media ${device.tablet} {
    flex-basis: 40%;
    max-width: 40%;
  }
`;

const Circle = styled.div``;
const CircleWrapper = styled.div``;
const CircleSpan = styled.div`
  display: flex;
  width: 144px;
  height: 144px;
  background: #06a88e;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: MetricWeb, sans-serif;
  font-weight: 500;
  @media ${device.tablet} {
    font-size: 60px;
  }
`;
const CircleTitle = styled.div`
  color: #06a88e;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
`;

const MiniPullOut = ({ data, id }) => {
  console.log(data);
  return (
    <Container>
      <Wrapper>
        <Tween
          duration={10000}
          to={{
            scrollTrigger: {
              trigger: `#mini-${id}`,
              start: "-200px 100px",
              end: "bottom 0",
              scrub: 0.5,
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
              markers: true,
            },
          }}
        >
          <Quote>{data.quote}</Quote>
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
