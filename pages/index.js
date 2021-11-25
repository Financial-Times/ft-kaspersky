import { useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Metadata from '~/components/Metadata';
import { ARTICLE_URL, REPORT_URL } from '~/config/utils';
import { device } from '~/config/utils';
import FtAnalytics from '~/config/FtAnalytics';
import FtEvents from '~/config/FtEvents';

import HeroBanner from '~/components/HeroBanner';
import ReportContainer from '~/components/Report/ReportContainer';

import Progression from '~/components/Progression';
import ArticleContainer from '~/components/Articles/ArticleContainer';
import Follow from '~/components/Follow';

const Introduction = styled.div`
	max-width: 1220px;
	padding: 5px;
	margin: 0 auto;
	position: relative;
	@media ${device.tablet} {
		padding: 50px 20px;
	}
`;

const IntroductionTitle = styled.h1`
	font-family: MetricWeb, sans-serif;
	color: #06a88e;
	font-weight: 400;
	line-height: 1;
	text-align: left;
	text-transform: uppercase;
	margin: 0;
	padding: 0;
	@media ${device.tablet} {
		font-size: 48px;
	}
`;
const IntroductionContentWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10px;
`;

const IntroductionContent = styled.div``;
const IntroductionDescription = styled.div`
	display: flex;
	font-family: MetricWeb, sans-serif;
	font-size: 22px;
	color: #333333;
	height: calc(100% - 100px);
	justify-content: center;
	line-height: 1;
	align-items: center;

	&:after {
		content: '';
		display: block;
		width: 100vw;
		position: absolute;
		height: 50%;
		background-color: #7eff33;
		left: -30%;
		z-index: -1;
	}
`;

const IntroductionImageWrapper = styled.div`
	width: 100%;
	display: block;
	padding-bottom: 56%;
	background-color: black;
`;

export default function Home({ reportData, articleData }) {
	useEffect(() => {
		FtEvents();
		FtAnalytics();
	}, []);

	return (
		<>
			<Head>
				<title>Kaspersky</title>
				<Metadata title={true} data={null} />
			</Head>
			<HeroBanner title={'Campaign Title goes here'} />
			<Introduction>
				<IntroductionContentWrapper>
					<IntroductionContent>
						<IntroductionTitle>Introduction</IntroductionTitle>
						<IntroductionDescription>
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
							nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
							erat, sed diam voluptua. At vero eos et accusam et justo duo
							dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
							sanctus est Lorem ipsum dolor sit amet in secular.
						</IntroductionDescription>
					</IntroductionContent>
					<IntroductionImageWrapper></IntroductionImageWrapper>
				</IntroductionContentWrapper>
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
