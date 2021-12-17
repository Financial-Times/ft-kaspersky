import styled from 'styled-components';

const Container = styled.div`
	max-width: 883px;
	margin: 0 auto;
	padding: 10px;
`;
const Wrapper = styled.div``;
const Content = styled.div`
	font-size: 24px;
`;

const StandFirst = ({ data }) => {
	return (
		<Container>
			<Wrapper>
				<Content dangerouslySetInnerHTML={{ __html: data.content }} />
			</Wrapper>
		</Container>
	);
};

export default StandFirst;
