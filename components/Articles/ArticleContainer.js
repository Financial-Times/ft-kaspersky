import styled from "styled-components";
import ArticleItem from "./ArticleItem";
import { device } from "~/config/utils";

const Container = styled.div`
  padding-bottom: 40px;
  position: relative;
`;

const Wrapper = styled.div`
  background-color: #f8f8f8;
`;

const ReportTitle = styled.div`
  padding: 0 20px;
  font-family: MetricWeb, sans-serif;
  color: #06a88e;
  text-transform: uppercase;
  font-size: 52px;
  font-weight: 400;
  position: relative;
  max-width: 1220px;
  margin: 0 auto;

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

const ArticleContainer = ({ data }) => {
  return (
    <Wrapper>
      <ReportTitle>
        <span>Articles</span>
      </ReportTitle>
      <Container>
        {data.map((article, i) => {
          return <ArticleItem key={i} data={article} />;
        })}
      </Container>
    </Wrapper>
  );
};

export default ArticleContainer;
