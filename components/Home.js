import Link from 'next/link';
import styled from 'styled-components';
import home from '~/assets/home.svg';

const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	max-width: 883px;
	padding: 0 10px;
	margin: 0 auto;
`;
const HomeImg = styled.img`
	margin-right: 10px;
`;

const Content = styled.div`
	display: flex;
	font-weight: 500;
`;
const ContentBack = styled.div``;
const ContentTitle = styled.div``;

const Home = ({ title }) => {
	return (
		<Container>
			<HomeImg src={home.src} alt="home" />
			<Content>
				<ContentBack>
					<Link href={'/'}>Back</Link>
				</ContentBack>
				<ContentTitle>{title}</ContentTitle>
			</Content>
		</Container>
	);
};

export default Home;
