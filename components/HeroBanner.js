import Image from "next/image";
import styled from "styled-components";
import { device, scrollToReport } from "~/config/utils";

const HeroContainer = styled.div`
  min-height: calc(80vh);
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);

    @media ${device.tablet} {
      background-color: rgba(0, 0, 0, 0.2);
      min-height: calc(100vh - 245px);
    }
  }

  img {
    &[alt="hero"] {
      object-fit: cover;
      object-position: center center;
    }
  }
`;
const HeroContent = styled.div`
  color: white;
  width: 100%;
  z-index: 2;
  position: relative;
  line-height: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
`;

const HeroTitle = styled.div`
  text-align: left;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 20px;
  font-size: 40px;

  @media ${device.mobileM} {
    font-size: 55px;
  }

  @media ${device.tablet} {
    margin-bottom: 40px;
  }

  @media ${device.laptop} {
    font-size: 85px;
  }
`;

const HeroScrollContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 50%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(50%);

  @media ${device.tablet} {
    bottom: 15px;
  }
`;

const HeroScrollImage = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
  height: 40px;
  width: 40px;
  @media ${device.tablet} {
    height: 50px;
    width: 50px;
  }

  svg {
    width: 100%;
  }

  &:hover {
    path {
      fill: white;
      transition: all 0.5s ease-in;
    }
  }
  svg {
    path {
      transition: all 0.5s ease-in;
    }
  }
`;

const HeroDesc = styled.div`
  font-size: 20px;

  @media ${device.laptop} {
    font-size: 25px;
  }
`;

const TextContainer = styled.div`
  max-width: 650px;
  padding: 150px 0;

  @media ${device.laptop} {
    padding: 100px 0;
  }
`;

const HeroBanner = ({ title, desc, img }) => {
  return (
    <HeroContainer>
      <Image priority={true} src={img} alt="hero" layout="fill" />
      <HeroContent>
        <TextContainer>
          <HeroTitle>{title}</HeroTitle>
          {desc && <HeroDesc>{desc}</HeroDesc>}
        </TextContainer>
      </HeroContent>
      <HeroScrollContainer>
        <HeroScrollImage onClick={() => scrollToReport()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
          >
            <g id="right-arrow" transform="translate(70) rotate(90)">
              <g id="Group_642" data-name="Group 642">
                <g id="Group_641" data-name="Group 641">
                  <g id="Group_649" data-name="Group 649">
                    <path
                      id="Path_540"
                      data-name="Path 540"
                      d="M35,0A35,35,0,1,0,70,35,35,35,0,0,0,35,0Zm0,65.625A30.625,30.625,0,1,1,65.625,35,30.625,30.625,0,0,1,35,65.625Z"
                      fill="#7EFF33"
                    />
                    <path
                      id="Path_541"
                      data-name="Path 541"
                      d="M199.087,116.8l-2.447,2.444,12.671,12.638-12.653,12.655,2.447,2.444,13.868-13.869a1.732,1.732,0,0,0,0-2.444Z"
                      transform="translate(-167.729 -96.881)"
                      fill="#7EFF33"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </HeroScrollImage>
      </HeroScrollContainer>
    </HeroContainer>
  );
};

export default HeroBanner;
