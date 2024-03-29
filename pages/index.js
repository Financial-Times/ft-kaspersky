import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Metadata from "~/components/Metadata";
import { ARTICLE_URL, REPORT_URL, scrollToReport } from "~/config/utils";
import { device } from "~/config/utils";
import FtAnalytics from "~/config/FtAnalytics";
import FtEvents from "~/config/FtEvents";
import HeroBanner from "~/components/HeroBanner";
import ReportContainer from "~/components/Report/ReportContainer";
import ArticleContainer from "~/components/Articles/ArticleContainer";
import Follow from "~/components/Follow";
import Quote from "~/components/Quote";
import BTTButton from "~/components/BTTButton";
import NextReport from "~/components/NextReport";

const Introduction = styled.div``;

const AccordionWrapper = styled.div`
  @media ${device.tablet} {
    margin-bottom: 100px;
  }
  #item-01 {
    background-color: #7eff33;
  }
  #item-02 {
    background-color: #23d0ad;
  }
  #item-03 {
    background-color: #06a88e;
  }

  .accordion__item {
    cursor: pointer;

    &:hover {
      .accordion__heading {
        opacity: 0.75;
      }
      .accordion__panel {
        opacity: 1;
      }
    }

    .state {
      height: 15px;
      width: 15px;
      position: absolute;
      right: 10px;
      top: 20px;
      transform: translateY(-50%);

      @media ${device.tablet} {
        height: 30px;
        width: 30px;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
      }

      .line {
        height: 2px;
        width: 100%;
        background: black;
        position: absolute;
        top: 50%;

        @media ${device.tablet} {
          height: 3px;
        }
      }
      .plus {
        transform: rotate(90deg);
        transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 0.8);
      }
    }

    .accordion__button {
      max-width: 1220px;
      padding: 20px;
      margin: 0 auto;
      background-color: transparent;
      position: relative;
      font-size: 25px;
      text-transform: uppercase;
      line-height: 1;
      display: flex;

      @media ${device.tablet} {
        font-size: 40px;
      }

      @media ${device.laptop} {
        font-size: 50px;
      }

      span {
        padding-right: 15px;

        @media ${device.tablet} {
          padding-right: 25px;
        }
      }

      &[aria-expanded="true"] {
        .plus {
          transform: rotate(0deg);
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 0.8);
        }
      }
      &:before {
        display: none;
      }
    }
    .accordion__panel {
      background-color: #f8f8f8;
      @media ${device.tablet} {
        padding: 35px 10px;
      }
    }

    .heading {
      max-width: 90%;
    }
  }
`;

const AccordionContainer = styled.div`
  max-width: 883px;
  padding: 15px 15px;
  margin: 0 auto;

  @media ${device.tablet} {
    padding: 0 5px;
  }

  p {
    font-size: 24px;
    line-height: 1.2;
    color: #333333;

    sup {
      font-size: 10px;
    }
  }

  ul {
    list-style: decimal;
    padding-left: 20px;
    font-size: 24px;
    color: #333333;

    li {
      line-height: 1.3;
    }
  }
`;

const AccordionSources = styled.div`
  font-size: 16px;
  line-height: 1;
  color: #636364;

  sup {
    margin-right: 5px;
  }
`;

const Title = styled.p`
  font-size: 28px !important;
`;

export default function Home({ reportData, articleData }) {
  const router = useRouter();
  const [acc, setAcc] = useState(false);
  useEffect(() => {
    FtEvents();
    FtAnalytics();
    console.log(router.query.report);
    const container = document.querySelector("#item-02");
    if (router.query.report === "true") {
      setTimeout(() => {
        scrollToReport();
      }, 1100);
    }

    if (router.query.research === "true") {
      setAcc(true);
      container.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  }, [router]);

  const metaData = {
    title: "THREE STEPS TO SUPERIOR CYBER SECURITY",
    desc: "New research from Kaspersky shows that diversity, collaboration and training can help protect enterprise from major cyber threats.",
    contentType: "article",
    publicationDate: "2022-01-18",
    campaignName: "",
    advertiserName: "Kaspersky",
    primaryIndustryAdvertiser: "Technology",
    contentAuthor: "Longitude",
    brandedContent: true,
    contentStyle: "thought leadership",
    primaryTopic: "Technology",
    secondaryTopic: "Cyber Security",
    adbookId: 317877,
    hasVideo: true,
    videoStyle: null,
    pageDesignType: "bespoke",
    articleImage:
      "https://ft.com/partnercontent/kaspersky/images/heroAmended.jpg",
    articleUrl: "https://kaspersky.ft.com//",
  };

  return (
    <>
      <Head>
        <title>
          Three Steps To Superior Cyber Security - Financial Times - Partner
          Content by Kaspersky
        </title>
        <Metadata title={true} data={metaData} />
      </Head>
      <HeroBanner
        img={"https://ft.com/partnercontent/kaspersky/images/heroAmended.jpg"}
        title={"Three steps to superior cyber security"}
        desc={
          "New research from Kaspersky shows that diversity, collaboration and training can help protect enterprise from major cyber threats."
        }
      />
      <Introduction>
        <AccordionWrapper>
          <Accordion allowZeroExpanded>
            <AccordionItem id="item-01" uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>01.</span>
                  <div className="heading">
                    The threat of cyber attacks weighs heavily
                  </div>
                  <div className="state">
                    <span className="line" />
                    <span className="line plus" />
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <AccordionContainer>
                  <p>
                    This is true now more than ever: new ransomware models alone
                    are considered the biggest emerging risk facing
                    organisations today, according to Gartner — bigger even than
                    the pandemic and supply chain disruption <sup>1</sup>.
                  </p>
                  <p>
                    But new research from Kaspersky, in association with
                    Longitude, a Financial Times company, shows enterprises are
                    not prepared. Less than one in 10 are very well prepared to
                    deal with cyber security attacks by professional cyber
                    criminals (9 per cent), lone hackers (7 per cent) and nation
                    states (6 per cent).
                  </p>
                  <p>
                    “Most people are completely unprepared,” says Shawnee
                    Delaney, CEO of US-based insider threat specialist Vaillance
                    Group. “Every day, something changes: there’s a newer,
                    better virus; there’s a new technique; a new modus operandi.
                    It’s impossible to keep up with everything, and that’s
                    frightening for everyone.” And Delaney is more prepared than
                    most given her company’s security credentials and her
                    background at the Defense Intelligence Agency conducting
                    clandestine intelligence operations around the world.
                  </p>
                  <p>
                    The main reason companies are not prepared, according to
                    Kaspersky’s research, is their reliance on legacy technology
                    that is vulnerable to today’s threats. They also lack the
                    financial resources to recruit or consult skilled security
                    professionals.
                  </p>
                  <Quote
                    data={{
                      content:
                        "Every day, something changes: there’s a newer, better virus; there’s a new technique; a new modus operandi. It’s impossible to keep up with everything, and that’s frightening for everyone.",
                      author: "Shawnee Delaney, CEO, Vaillance Group",
                    }}
                  />
                  <p>
                    The risk is real, and companies are not prepared. What can
                    they do?
                  </p>
                  <p>
                    Kaspersky’s research shows three things they can change for
                    better security outcomes:
                  </p>
                  <ul>
                    <li>Make cyber security teams more diverse</li>
                    <li>
                      Closely integrate the C-suite with cyber security teams
                    </li>
                    <li>Invest in high-quality cyber security training</li>
                  </ul>
                  <AccordionSources>
                    <sup>1</sup>
                    https://www.gartner.com/en/newsroom/press-releases/2021-10-21-gartner-says-threat-of-new-ransomware-models-is-the-top-emerging-risk-facing-organizations
                  </AccordionSources>
                </AccordionContainer>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              id="item-02"
              uuid="b"
              {...(acc && { dangerouslySetExpanded: true })}
            >
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>02.</span>
                  <div className="heading">About the research</div>
                  <div className="state">
                    <span className="line" />
                    <span className="line plus" />
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <AccordionContainer>
                  <Title>
                    In partnership with Longitude, a Financial Times company,
                    Kaspersky surveyed 750 leaders at enterprises around the
                    world about their approach to cyber security.
                  </Title>
                  <p>
                    Respondents represented companies from of geographies
                    (Australia; Austria; Brazil; Canada; France; Germany; Hong
                    Kong; India; Italy; Mexico; Saudi Arabia; Singapore; UAE;
                    UK; and US) and industries (construction and engineering;
                    defence; e-commerce; education; entertainment; financial
                    services; government and public sector; healthcare;
                    hospitality; IT; manufacturing; media; non-profit; oil and
                    gas; pharmaceuticals; professional and business services;
                    retail; telecoms; utilities and energy; and wholesale
                    trade/B2B).
                  </p>
                  <p>
                    Respondents were knowledgeable about their organisation’s
                    cyber security strategy and worked at companies with at
                    least 1,000 employees.
                  </p>
                </AccordionContainer>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </AccordionWrapper>
      </Introduction>
      <ReportContainer data={reportData} />
      <ArticleContainer data={articleData} />
      <BTTButton />
      <Follow />
    </>
  );
}

export async function getStaticProps(context) {
  const fetchArticles = await fetch(ARTICLE_URL);
  const fetchReports = await fetch(REPORT_URL);

  const reportData = await fetchReports.json();
  const articleData = await fetchArticles.json();

  return {
    props: { reportData, articleData },
  };
}
