import styled from "styled-components";
import { device } from "~/config/utils";
import ReportItem from "./ReportItem";

const ReportWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 1220px;
  padding: 5px;
  margin: 0 auto;

  @media ${device.tablet} {
    flex-direction: row;
    padding: 0 20px;
    margin-bottom: 100px;
  }

  .jump {
    animation: 0.4s jump ease infinite alternate;
  }

  @keyframes jump {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
`;

const ReportWrapperContent = styled.div`
  max-width: 100%;
  flex-basis: 100%;
  padding: 0 10px;

  @media ${device.tablet} {
    flex-basis: 23%;
    max-width: 23%;
    padding-right: 20px;
  }
`;
const ReportWrapperTitle = styled.h2`
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1;
  color: #06a88e;
  margin-top: 0;
  position: relative;
  padding-bottom: 15px;
  font-size: 36px;
  max-width: 250px;

  @media ${device.tablet} {
    font-size: 44px;
    max-width: initial;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 110px;
    height: 2px;
    background-color: #707070;
  }
`;

const ReportWrapperDesc = styled.div`
  font-weight: 300;
  line-height: 1;
  color: #333333;
  font-size: 20px;

  @media ${device.tablet} {
    font-size: 24px;
  }
`;

const ReportItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row: auto auto;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  max-width: 100%;
  flex-basis: 100%;
  padding: 15px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    flex-basis: 77%;
    max-width: 77%;
    padding: initial;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`;

const ReportTitle = styled.div`
  padding: 0 20px;
  font-family: MetricWeb, sans-serif;
  color: #06a88e;
  text-transform: uppercase;
  font-size: 52px;
  font-weight: 400;
  position: relative;

  span {
    position: relative;
    width: 100%;
    line-height: 1;
    display: block;
    padding-bottom: 20px;
    text-align: center;
    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: #06a88e;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  padding-top: 35px;
  padding-bottom: 45px;

  @media ${device.tablet} {
    font-size: 52px;
    padding-top: 70px;
    padding-bottom: 90px;
  }
`;
const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;

  @media ${device.tablet} {
    flex-direction: row;
    margin-bottom: 100px;
  }
`;

const ReportContainer = ({ data }) => {
  return (
    <Container>
      <ReportTitle>
        <span>Report</span>
      </ReportTitle>
      <ReportWrapper id="reportContainer">
        <ReportWrapperContent>
          <ReportWrapperTitle className={"reportTitle"}>
            Report Title
          </ReportWrapperTitle>
          <ReportWrapperDesc>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore.
          </ReportWrapperDesc>
        </ReportWrapperContent>
        <ReportItemContainer>
          {data.map((report, i) => {
            return <ReportItem key={i} data={report} />;
          })}
        </ReportItemContainer>
      </ReportWrapper>
    </Container>
  );
};

export default ReportContainer;
