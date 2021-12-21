import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
	min-height: 75px;
`;

const Wrapper = styled.div`
	padding: 0 5px;
	max-width: 883px;
	margin: 0 auto;
	@media ${device.tablet} {
		padding: 0 10px;
	}
`;
const LinkContainer = styled.a``;
const LinkButton = styled.button`
	padding: 13px 25px;
	background-color: #06a88e;
	border-radius: 3px;
	color: #ffffff;
	font-size: 15px;
	font-weight: 500;
	line-height: 1;
	bottom: 20px;
	border: 1px solid #06a88e;

	cursor: pointer;
	transition: all 0.5s ease-in-out;

	&:hover {
		background-color: #7eff33;
		color: black;
		border: 1px solid #7eff33;
		transition: all 0.5s ease-in-out;
	}
`;

const Cta = ({ data }) => {
	return (
		<Container>
			<Wrapper>
				<LinkContainer href={data.link} target={'_blank'}>
					<LinkButton>{data.text}</LinkButton>
				</LinkContainer>
			</Wrapper>
		</Container>
	);
};

export default Cta;
