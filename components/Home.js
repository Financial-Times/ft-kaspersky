import Link from "next/link";
import styled from "styled-components";
import home from "~/assets/home.svg";
import { device } from "~/config/utils";

const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 10px;
  @media ${device.tablet} {
    padding: 15px 20px 40px 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const HomeImg = styled.img`
  margin-right: 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentBack = styled.div`
  a {
    font-weight: 600;
    text-transform: uppercase;
    color: #06a88e;

    &:hover {
      color: #23d0ad;
    }
  }

  margin-right: 10px;
`;

const ContentTitle = styled.div`
  color: #707070;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 1;
  font-size: 12px;
  @media ${device.tablet} {
    font-size: 15px;
  }

  span {
    margin-right: 10px;
    font-weight: 600;
  }
`;

const Home = ({ title, report }) => {
  return (
    <Container>
      <Wrapper>
        <HomeImg src={home.src} alt="home" />
        <Content>
          <ContentBack>
            <Link href={"/"}>Back</Link>
          </ContentBack>
          <ContentTitle>
            <span>/</span>
            {report && "Step"} {title}
          </ContentTitle>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Home;
