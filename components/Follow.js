import styled from 'styled-components';

const Container = styled.div`
	background-color: #06a88e;
	padding: 60px 0;
`;
const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Title = styled.div`
	font-family: MetricWeb, sans-serif;
	font-weight: 500;
	color: white;
	font-size: 32px;
`;

const IconWrapper = styled.div`
	display: flex;
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		margin: 0 15px;
	}
`;

const IconItem = styled.img``;

import fb from '~/assets/FollowIcons/fb.svg';
import tw from '~/assets/FollowIcons/tw.svg';
import yt from '~/assets/FollowIcons/yt.svg';
import li from '~/assets/FollowIcons/linkedin.svg';
import instaGram from '~/assets/FollowIcons/instagam.svg';
import { device } from '~/config/utils';

const IconArray = [
	{
		type: 'fb',
		src: fb.src,
		link: 'https://www.facebook.com/Kaspersky',
	},
	{
		type: 'tw',
		src: tw.src,
		link: 'https://twitter.com/kaspersky',
	},
	{
		type: 'li',
		src: li.src,
		link: 'https://linkedin.com/company/kaspersky/',
	},
	{
		type: 'yt',
		src: yt.src,
		link: 'https://youtube.com/Kaspersky',
	},
	{
		type: 'in',
		src: instaGram.src,
		link: 'https://instagram.com/kasperskylab',
	},
];

const Follow = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Follow Kaspersky on</Title>
				<IconWrapper>
					{IconArray.map((icon, i) => {
						return (
							<a href={icon.link} key={i}>
								<IconItem src={icon.src} alt="icon" />
							</a>
						);
					})}
				</IconWrapper>
			</Wrapper>
		</Container>
	);
};

export default Follow;
