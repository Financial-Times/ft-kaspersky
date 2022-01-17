import Script from "next/script";
import styled from "styled-components";
import { device } from "~/config/utils";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";

const Container = styled.div`
  .mobile {
    display: block;
  }

  .tablet {
    display: none;
  }

  @media ${device.mobileXL} {
    .mobile {
      display: none;
    }

    .tablet {
      display: block;
    }
  }
`;

const Wrapper = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 10px;
  background-color: #7eff33;
`;
const Title = styled.div`
  font-size: 28px;
  text-align: center;
    font-family: MetricWeb, sans-serif;
  font-weight: 500;
  line-height: 1;
  padding: 0 10px;
  margin-bottom: 20px;
  font-style: italic;

}
  @media ${device.mobileXL} {
   font-size: 32px;
    margin-bottom: 20px;
`;

const Graph = ({ data }) => {
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://www.ft.com/partnercontent/kaspersky/graph.js?ts=3";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [router]);
  return (
    <Container>
      <Wrapper>
        <div
          className="infogram-embed tablet"
          data-id={data.id}
          data-type="interactive"
          data-title={data.title}
        />
        <div
          className="infogram-embed mobile"
          data-id={data.id_mob}
          data-type="interactive"
          data-title={data.title_mob}
        />
        <Title>{data.mainTitle}</Title>
      </Wrapper>
    </Container>
  );
};

export default Graph;
