import styled from "styled-components";
import Image from "next/image";
import { device } from "~/config/utils";

const Wrap = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const Container = styled.div`
  border-radius: 5px;
  a {
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: none;
    }
  }
  @media ${device.tablet} {
    max-width: 350px;
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  text-underline: none;
  z-index: 4;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px 15px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  text-transform: uppercase;
  font-family: MetricWeb, sans-serif;
  font-size: 25px;
  transition: color 0.5s ease;

  &:hover {
    transition: color 0.5s ease;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 63%;

  @media ${device.tablet} {
    padding-bottom: 43%;
  }

  &:after {
    content: "";
    position: absolute;
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
  }

  img {
    object-fit: cover;
    object-position: center;
  }
`;

const ItemSection = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  line-height: 1;
  background-color: #7eff33;
  border-radius: 3px;
  color: black;
  display: inline;
  padding: 5px 10px;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 2;

  @media ${device.tablet} {
    margin-bottom: 20px;
  }

  span {
    font-weight: 600;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-right: 20px;
  }
`;

const NextReport = ({ data }) => {
  if (data.section === 1) {
    return null;
  } else {
    return (
      <Wrap>
        <Container>
          <a href={data.metaData.articleUrl}>
            <Wrapper>
              <ImageWrapper>
                <ItemSection>
                  Step <span>{data.section}</span>
                </ItemSection>
                <Image src={data.metaData.articleImage} layout={"fill"} />
              </ImageWrapper>
              <Content>
                <ContentWrapper>
                  <span>Continue Reading</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43.683"
                    height="35"
                    viewBox="0 0 43.683 35"
                  >
                    <path
                      id="arrow-next"
                      d="M0,17.456l3.069,3.069L15.35,8.158V43.683h4.474V8.07L32.018,20.439,35,17.456,17.544,0Z"
                      transform="translate(43.683) rotate(90)"
                      fill="#00a88e"
                    />
                  </svg>
                </ContentWrapper>
              </Content>
            </Wrapper>
          </a>
        </Container>
      </Wrap>
    );
  }
};

export default NextReport;
