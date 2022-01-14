import Script from "next/script";
import styled from "styled-components";
import { device } from "~/config/utils";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";

const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 10px;
  background-color: #7eff33;

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

const Graph = ({ data }) => {
    const router = useRouter();

    useEffect(() => {
        const script = document.createElement("script");

        script.src = "https://www.ft.com/partnercontent/kaspersky/graph.js?ts=3";
        script.async = true;

        document.body.appendChild(script);
        console.log(document.querySelector("iframe"));
        if (document.querySelector("iframe")) {
            console.log(document.querySelector("iframe"));
            document.querySelector("iframe").contentWindow.location.reload();
        }

        return () => {
            document.body.removeChild(script);
        };
    }, [router]);
    return (
        <Container>
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
        </Container>
    );
};

export default Graph;
