import styled from 'styled-components';
import { device } from '~/config/utils';

import scrollImg from '~/assets/scroll.svg';

const HeroContainer = styled.div`
	min-height: calc(100vh - 105px);
	position: relative;

	&:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.2);
	}
`;
const HeroContent = styled.div`
	font-family: museo-sans, sans-serif;
	position: absolute;
	top: 50%;
	right: 60%;
	color: white;
	z-index: 2;
	line-height: 1;
	transform: translate(50%, -80%);

	width: 100%;
	max-width: 800px;
`;

const HeroTitle = styled.div`
	text-align: left;
	text-transform: uppercase;
	font-weight: 700;
	margin-bottom: 20px;

	@media ${device.tablet} {
		font-size: 85px;
		margin-bottom: 40px;
	}
`;

const HeroScrollContainer = styled.div`
	position: absolute;
	bottom: 15px;
	right: 50%;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const HeroScrollImage = styled.img`
	margin-bottom: 20px;
	@media ${device.tablet} {
		height: 70px;
		width: 70px;
	}
`;

const HeroScrollText = styled.span`
	font-family: museo-sans, sans-serif;
	color: white;
	text-transform: uppercase;
	font-size: 20px;
	line-height: 1;
	font-weight: 500;
`;

const HeroDesc = styled.div`
	font-size: 28px;

	@media ${device.tablet} {
		font-size: 36px;
	}
`;

const HeroBanner = ({ title, desc }) => {
	return (
		<HeroContainer>
			<HeroContent>
				<HeroTitle>{title}</HeroTitle>
				{desc && <HeroDesc>{desc}</HeroDesc>}
			</HeroContent>
			<HeroScrollContainer>
				<HeroScrollImage src={scrollImg.src} />
			</HeroScrollContainer>
		</HeroContainer>
	);
};

export default HeroBanner;
