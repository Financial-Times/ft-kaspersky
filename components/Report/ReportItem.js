import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { device } from "~/config/utils";

const ItemContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: white;
  padding: 20px;
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

  @media ${device.tablet} {
    margin-bottom: 20px;
  }

  span {
    font-weight: 600;
  }
`;

const ItemTitle = styled.div`
  text-transform: uppercase;
  line-height: 1;
  padding: 0 10px;
  margin-bottom: 50px;
  font-size: 40px;

  @media ${device.tablet} {
    font-size: 28px;
  }

  @media ${device.laptop} {
    font-size: 36px;
  }
`;

const ItemContentWrapper = styled.div`
  position: absolute;
  bottom: 30px;
`;

const ItemCta = styled.button`
  padding: 10px 25px;
  border-radius: 3px;
  background-color: #06a88e;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  line-height: 1;
  border: 1px solid #06a88e;

  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #7eff33;
    color: black;
    border: 1px solid #7eff33;
    transition: all 0.5s ease-in-out;
  }
`;

const ItemContainer = styled.div`
  position: relative;
  padding-bottom: 150%;
  overflow: hidden;

  @media ${device.tablet} {
    padding-bottom: 120%;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19);

    @media ${device.tablet} {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  &:hover {
    img {
      transform: scale(1.4);
      transition: transform 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    &:after {
      background-color: rgba(0, 0, 0, 0.4);
      transition: background-color 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }

  img {
    &[alt="reportImage"] {
      object-fit: cover;
      object-position: center center;
      transition: transform 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }
`;

const ReportItem = ({ data, link }) => {
  return (
    <ItemContainer className="reportItem">
      <Image src={data.metaData.articleImage} layout="fill" alt="reportImage" />
      <ItemContent className="itemContent">
        {data.section && (
          <ItemSection>
            Step <span>{data.section}</span>
          </ItemSection>
        )}
        <ItemContentWrapper>
          <ItemTitle>{data.metaData.title}</ItemTitle>

          <a href={`/${link}/${data.id}`}>
            <ItemCta>Read now</ItemCta>
          </a>
        </ItemContentWrapper>
      </ItemContent>
    </ItemContainer>
  );
};

export default ReportItem;
