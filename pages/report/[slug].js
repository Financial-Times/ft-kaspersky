import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styled from "styled-components";

import FtAnalytics from "~/config/FtAnalytics";
import FtEvents from "~/config/FtEvents";
import { ARTICLE_URL, REPORT_URL } from "~/config/utils";

import Metadata from "~/components/Metadata";
import Content from "~/components/Content";
import { device } from "~/config/utils";
import Quote from "~/components/Quote";
import Home from "~/components/Home";
import Sources from "~/components/Sources";
import Cta from "~/components/Cta";
import Graph from "~/components/Graph";
import StandFirst from "~/components/StandFirst";
import Stats from "~/components/Stats";
import Related from "~/components/Related";
import BTTButton from "~/components/BTTButton";
import MiniPullOut from "~/components/MiniPullOut";
import Follow from "~/components/Follow";
import NextReport from "~/components/NextReport";

const ArticleWrapper = styled.div``;

const ArticleTitle = styled.div`
  max-width: 883px;
  margin: 0 auto;
  padding: 10px;

  text-align: left;
  font-size: 48px;
  letter-spacing: 0px;
  color: #06a88e;
  text-transform: uppercase;
  line-height: 1;

  @media ${device.tablet} {
    padding: 15px 10px;
  }
`;

const HeroImgWrapper = styled.div`
  position: relative;
  display: block;
  padding-bottom: 70%;
  @media ${device.tablet} {
    padding-bottom: 23.4375%;
  }

  img {
    object-fit: cover;
    object-position: center center;
  }
`;

export default function ArticlePage({ post, related, articles }) {
  useEffect(() => {
    FtEvents();
    FtAnalytics();
  });

  useEffect(() => {
    const hasConsentedToBehaviouralAds = () => {
      const consentValue = getCookieValue("FTConsent");
      return consentValue && consentValue.includes("behaviouraladsOnsite:on");
    };

    const getCookieValue = (cookieKey) => {
      const re = new RegExp(`${cookieKey}=([^;]+)`);
      const match = document.cookie.match(re);
      if (!match) {
        return false;
      }
      return decodeURIComponent(match[1]);
    };

    window.addEventListener("load", function () {
      if (hasConsentedToBehaviouralAds()) {
        permutive.consent({
          opt_in: true,
          token: "behaviouraladsOnsite:on",
        });
      } else {
        const cookieContainer = document.querySelector(".o-cookie-message");
        const cookieButton =
          cookieContainer &&
          document.querySelector(".o-cookie-message__button");
        cookieButton.addEventListener("click", (e) => {
          permutive.consent({
            opt_in: true,
            token: "behaviouraladsOnsite:on",
          });
        });
      }
    });
  }, []);

  const relatedItems = related.concat(articles);
  const nextArticle = related.find((article) => article.id === post.next);

  return (
    <>
      <Head>
        <title>{post.metaData.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <Metadata data={post.metaData} />
      </Head>
      <Script
        id="permutive"
        dangerouslySetInnerHTML={{
          __html: `
          !function (n, e, o, r, i) { if (!e) { e = e || {}, window.permutive = e, e.q = [], e.config = i || {}, e.config.projectId = o, e.config.apiKey = r, e.config.environment = e.config.environment || "production"; for (var t = ["addon", "identify", "track", "trigger", "query", "segment", "segments", "ready", "on", "once", "user", "consent"], c = 0; c < t.length; c++) { var f = t[c]; e[f] = function (n) { return function () { var o = Array.prototype.slice.call(arguments, 0); e.q.push({ functionName: n, arguments: o }) } }(f) } } }(document, window.permutive, "e1c3fd73-dd41-4abd-b80b-4278d52bf7aa", "b2b3b748-e1f6-4bd5-b2f2-26debc8075a3", { "consentRequired": true });
          window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push(function () { if (0 === window.googletag.pubads().getTargeting("permutive").length) { var g = window.localStorage.getItem("_pdfps"); window.googletag.pubads().setTargeting("permutive", g ? JSON.parse(g) : []) } });
          window.permutive.addon('web', {
            page: {
              type: 'Partner Content ${
                post.metaData.hasVideo ? "Video" : "Article"
              }',
            }
          });`,
        }}
      />
      <Script
        strategy="beforeInteractive"
        async
        src="https://e1c3fd73-dd41-4abd-b80b-4278d52bf7aa.edge.permutive.app/e1c3fd73-dd41-4abd-b80b-4278d52bf7aa-web.js"
      />
      <HeroImgWrapper>
        <Image
          src={post.metaData.articleImage}
          alt={"hero image"}
          layout="fill"
        />
      </HeroImgWrapper>
      <Home title={post.section} report={true} />
      <ArticleWrapper className="articleWrapper">
        <ArticleTitle>{post.metaData.title}</ArticleTitle>
        {post.content.map((el) => {
          switch (el.type) {
            case "content":
              return <Content key={el.id} id={el.id} data={el.data} />;
            case "quote":
              return <Quote key={el.id} data={el.data} />;
            case "notes":
              return <Sources key={el.id} data={el.data} />;
            case "cta":
              return <Cta key={el.id} data={el.data} />;
            case "graph":
              return <Graph key={el.id} data={el.data} />;
            case "standFirst":
              return <StandFirst key={el.id} data={el.data} />;
            case "stat":
              return <Stats key={el.id} data={el.data} />;
            case "miniPullOut":
              return <MiniPullOut key={el.id} data={el.data} />;
          }
        })}
      </ArticleWrapper>
      <NextReport data={nextArticle} />
      <Related data={relatedItems} />
      <BTTButton />
      <Follow />
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export async function getStaticProps({ params }) {
  const results = await fetch(REPORT_URL);
  const reports = await results.json();
  const fetchArticles = await fetch(ARTICLE_URL);
  const articles = await fetchArticles.json();

  const post = reports.find((article) => article.id === params.slug);
  const related = reports.filter((article) => {
    return article.id != params.slug;
  });

  return {
    props: { post, related, articles },
  };
}
