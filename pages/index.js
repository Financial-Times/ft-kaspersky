import { useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import Metadata from '~/components/Metadata';
import { ARTICLE_URL, REPORT_URL } from '~/config/utils';
import { device } from '~/config/utils';
import FtAnalytics from '~/config/FtAnalytics';
import FtEvents from '~/config/FtEvents';

import HeroBanner from '~/components/HeroBanner';
import ReportContainer from '~/components/Report/ReportContainer';

import ArticleContainer from '~/components/Articles/ArticleContainer';
import Follow from '~/components/Follow';
import Quote from '~/components/Quote';

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
		.accordion__button {
			max-width: 1220px;
			padding: 20px 10px;
			margin: 0 auto;
			background-color: transparent;
			position: relative;
			font-size: 25px;
			text-transform: uppercase;
			line-height: 1;
			display: flex;

			@media ${device.tablet} {
				font-size: 50px;
				padding: 20px;
			}

			span {
				padding-right: 25px;
			}

			&[aria-expanded='true'] {
				&:before {
					content: '-';
				}
			}
			&:before {
				content: '+';
				position: absolute;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
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
	padding: 0 5px;
	margin: 0 auto;
	p {
		font-size: 24px;
		line-height: 1;
	}

	ul {
		list-style: decimal;
		padding-left: 20px;
		font-size: 24px;
	}
`;

const AccordionImage = styled.div`
	background-color: black;
	width: 100%;
	display: block;
	padding-bottom: 62%;
`;

const AccordionSources = styled.div`
	font-size: 16px;
	line-height: 1;
	color: #636364;
`;

export default function Home({ reportData, articleData }) {
	useEffect(() => {
		FtEvents();
		FtAnalytics();
	}, []);

	return (
		<>
			<Head>
				<title>
					Kaspersky - Financial Times - Partner Content by Marriott-Bonvey
				</title>
				<Metadata title={true} data={null} />
			</Head>
			<HeroBanner
				img={'https://ft.com/partnercontent/kaspersky/images/HubHero.jpg'}
				title={'Three steps to superior cyber security'}
				desc={
					'New research from Kaspersky shows that diversity, collaboration and training can help protect enterprise from major cyber threats.'
				}
			/>
			<Introduction>
				<AccordionWrapper>
					<Accordion allowZeroExpanded={true}>
						<AccordionItem id="item-01">
							<AccordionItemHeading>
								<AccordionItemButton>
									<span>0.1</span>
									<div className="heading">
										The threat of cyber security weighs heavily on enterprises
									</div>
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<AccordionContainer>
									<AccordionImage />
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
									<AccordionSources>
										<sup>1</sup>
										https://www.gartner.com/en/newsroom/press-releases/2021-10-21-gartner-says-threat-of-new-ransomware-models-is-the-top-emerging-risk-facing-organizations
									</AccordionSources>
								</AccordionContainer>
							</AccordionItemPanel>
						</AccordionItem>
						<AccordionItem id="item-02">
							<AccordionItemHeading>
								<AccordionItemButton>
									<span>0.2</span>
									<div className="heading">About the research</div>
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<AccordionContainer>
									<p>
										In partnership with Longitude, a Financial Times company,
										Kaspersky surveyed 750 leaders at enterprises around the
										world about their approach to cyber security.
									</p>
									<p>
										Respondents represented companies from of geographies
										(Australia; Austria; Brazil; Canada; France; Germany; Hong
										Kong; India; Italy; Mexico; Saudi Arabia; Singapore; UAE;
										UK; and US) and industries (construction and engineering;
										defence; e-commerce; education; entertainment; financial
										services; government and public sector; healthcare;
										hospitality; IT; manufacturing; media; non-profit; oil and
										gas; pharmaceuticals; professional and busines services;
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
						<AccordionItem id="item-03">
							<AccordionItemHeading>
								<AccordionItemButton>
									<span>0.3</span>
									<div className="heading">Enterprises are not prepared</div>
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<AccordionContainer>
									<AccordionImage />
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
												'Every day, something changes: there’s a newer, better virus; there’s a new technique; a new modus operandi. It’s impossible to keep up with everything, and that’s frightening for everyone.',
											author: 'Shawnee Delaney, CEO, Vaillance Group.',
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
								</AccordionContainer>
							</AccordionItemPanel>
						</AccordionItem>
					</Accordion>
				</AccordionWrapper>
			</Introduction>
			<ReportContainer data={reportData} />
			<ArticleContainer data={articleData} />
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
