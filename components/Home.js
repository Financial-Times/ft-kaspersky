import Link from 'next/link';
import styled from 'styled-components';
import home from '~/assets/home.svg';
import { device } from '~/config/utils';

const Container = styled.div`
	max-width: 1220px;
	margin: 0 auto;
	padding: 10px;
	@media ${device.tablet} {
		padding: 15px 20px 40px 20px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
const HomeImg = styled.img`
	margin-right: 10px;
`;

const Content = styled.div`
	display: flex;
`;
const ContentBack = styled.div`
	a {
		font-weight: 300;
		text-transform: uppercase;
	}

	margin-right: 10px;
`;

const ContentTitle = styled.div`
	color: #707070;
	text-transform: uppercase;
	font-weight: 300;
	span {
		margin-right: 10px;
	}
`;

const Home = ({ title }) => {
	return (
		<Container>
			<Wrapper>
				<HomeImg src={home.src} alt="home" />
				<Content>
					<ContentBack>
						<Link href={'/'}>Back</Link>
					</ContentBack>
					<ContentTitle>
						<span>/</span>
						Section {title}
					</ContentTitle>
				</Content>
			</Wrapper>
		</Container>
	);
};

export default Home;
