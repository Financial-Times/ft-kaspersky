import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { device } from '~/config/utils';

import time from '~/assets/time.svg';

const Content = styled.div`
	flex-basis: 100%;
	max-width: 100%;
	padding-right: 30px;

	@media ${device.tablet} {
		flex-basis: 35%;
		max-width: 35%;
		padding-right: 30px;
	}
`;

const ContentDesc = styled.div`
	font-weight: 300;
	line-height: 1;
	color: #333333;
	@media ${device.tablet} {
		font-size: 24px;
		margin-bottom: 20px;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	max-width: 1220px;
	padding: 5px;
	margin: 0 auto;

	&:hover {
		img {
			transform: scale(1.4);
			transition: transform 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19);
		}
	}

	@media ${device.tablet} {
		flex-direction: row;
		padding: 0 20px;
		margin-bottom: 30px;

		&:nth-child(2) {
			flex-direction: row-reverse;

			${Content} {
				padding-left: 30px;
			}
		}
	}
`;

const ContentReadTime = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 30px;
	text-transform: uppercase;
	color: #333333;
	font-weight: 200;

	span {
		line-height: 1;
	}
`;

const ContentReadTimeImg = styled.img`
	margin-right: 5px;
`;

const ContentTitle = styled.div`
	font-weight: 400;
	text-transform: uppercase;
	line-height: 1;
	color: #06a88e;
	margin-top: 0;
	position: relative;
	padding-bottom: 15px;

	&:after {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		width: 110px;
		height: 2px;
		background-color: #707070;
	}
	@media ${device.tablet} {
		font-size: 44px;
		margin-bottom: 40px;
	}
`;

const ContentButton = styled.button`
	padding: 10px 25px;
	background-color: #06a88e;
	color: white;
	border-radius: 3px;
	font-size: 15px;
	font-weight: 500;
	line-height: 1;
	border: 1px solid #06a88e;
	cursor: pointer;
	transition: all 0.5s ease-in-out;

	&:hover {
		background-color: white;
		color: #06a88e;
		border: 1px solid #06a88e;
		transition: all 0.5s ease-in-out;
	}
`;

const ImageWrapper = styled.div`
	flex-basis: 100%;
	max-width: 100%;
	position: relative;

	@media ${device.tablet} {
		flex-basis: 65%;
		max-width: 65%;
		padding-bottom: 40%;
	}

	img {
		object-fit: cover;
		object-position: center center;
		transition: transform 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}
`;

const ArticleItem = ({ data }) => {
	return (
		<Container>
			<Content>
				<ContentReadTime>
					<ContentReadTimeImg src={time.src} alt="time" />
					<span>Read Time: {data.time} mins</span>
				</ContentReadTime>
				<ContentTitle>{data.metaData.title}</ContentTitle>
				<ContentDesc>{data.metaData.desc}</ContentDesc>
				<Link href={`/article/${data.id}`} passHref>
					<ContentButton>Read now</ContentButton>
				</Link>
			</Content>
			<ImageWrapper>
				<Image
					src={data.metaData.articleImage}
					alt="Article image"
					layout="fill"
				/>
			</ImageWrapper>
		</Container>
	);
};

export default ArticleItem;
