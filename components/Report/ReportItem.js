import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { device } from '~/config/utils';

const ItemContainer = styled.div`
	position: relative;
	padding-bottom: 56%;

	@media ${device.tablet} {
		padding-bottom: 120%;
	}

	&:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.3);
	}

	img {
		&[alt='reportImage'] {
			object-fit: cover;
			object-position: center center;
		}
	}
`;
const ItemContent = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 1;
	color: white;
	padding: 20px;
`;
const ItemSection = styled.div`
	font-size: 12px;
	text-transform: uppercase;
	line-height: 1;
	background-color: #7eff33;
	border-radius: 3px;
	color: black;
	display: inline;
	padding: 5px 10px;

	@media ${device.tablet} {
		margin-bottom: 20px;
	}

	span {
		font-weight: 600;
	}
`;

const ItemTitle = styled.div`
	text-transform: uppercase;
	line-height: 1;
	margin-bottom: 50px;
	@media ${device.tablet} {
		font-size: 36px;
	}
`;

const ItemContentWrapper = styled.div`
	position: absolute;
	bottom: 30px;
`;

const ItemCta = styled.button`
	padding: 10px 25px;
	background-color: white;
	border-radius: 3px;
	color: #06a88e;
	font-size: 15px;
	font-weight: 500;
	line-height: 1;

	border: 1px solid #ffffff;

	cursor: pointer;
	transition: all 0.5s ease-in-out;

	&:hover {
		background-color: #06a88e;
		color: #ffffff;
		border: 1px solid #06a88e;
		transition: all 0.5s ease-in-out;
	}
`;

const ReportItem = ({ data }) => {
	return (
		<ItemContainer>
			<Image src={data.metaData.articleImage} layout="fill" alt="reportImage" />
			<ItemContent>
				<ItemSection>
					Section <span>{data.section}</span>
				</ItemSection>
				<ItemContentWrapper>
					<ItemTitle>{data.metaData.title}</ItemTitle>

					<Link href={`/report/${data.id}`} passHref>
						<ItemCta>Read now</ItemCta>
					</Link>
				</ItemContentWrapper>
			</ItemContent>
		</ItemContainer>
	);
};

export default ReportItem;
