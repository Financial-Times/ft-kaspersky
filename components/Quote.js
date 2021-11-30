import styled from 'styled-components';
import { device } from '~/config/utils';
import q1 from '~/assets/q1.svg';
import q2 from '~/assets/q2.svg';

const Container = styled.div`
	max-width: 883px;
	margin: 0 auto;
`;

const Wrapper = styled.div`
	padding: 0 20px;
	margin: 0 auto;
	position: relative;

	&:before {
		content: '';
		position: absolute;
		display: block;
		width: 40px;
		height: 40px;
		left: 0;
		top: 0;
		background-image: url(${q1.src});
		background-position: center center;
		background-size: contain;
		background-repeat: no-repeat;
	}

	&:after {
		content: '';
		display: block;
		position: absolute;
		width: 40px;
		height: 40px;
		right: 0;
		top: 0;
		background-image: url(${q2.src});
		background-position: center center;
		background-size: contain;
		background-repeat: no-repeat;
	}
`;

const Content = styled.div`
	font-weight: 500;
	line-height: 1;
	margin-bottom: 15px;
	@media ${device.tablet} {
		font-size: 36px;
		padding: 0 35px;
	}
`;
const Author = styled.div`
	text-align: center;
	font-style: italic;
`;

const Quote = ({ data }) => {
	return (
		<Container>
			<Wrapper>
				<Content>{data.content}</Content>
				<Author>- {data.author}</Author>
			</Wrapper>
		</Container>
	);
};

export default Quote;
