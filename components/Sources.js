import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 0 5px;
	max-width: 883px;
	margin: 0 auto;
	background-color: #f8f8f8;
	@media ${device.tablet} {
		padding: 10px;
		margin: 50px auto;
	}
`;
const Title = styled.div`
	font-size: 16px;
	color: #636364;
	text-transform: uppercase;
	position: relative;
	display: inline-block;
	margin-bottom: 5px;

	@media ${device.tablet} {
	}
`;
const SourceItemContainer = styled.div``;
const SourceItem = styled.div`
	font-size: 16px;
	a {
		font-weight: 400;
		color: #636364;
	}
`;

const Sources = ({ data }) => {
	return (
		<Container>
			<Wrapper>
				<Title>Source</Title>
				<SourceItemContainer>
					{data.map((note, i) => {
						return (
							<SourceItem
								key={i}
								dangerouslySetInnerHTML={{ __html: note.content }}
							/>
						);
					})}
				</SourceItemContainer>
			</Wrapper>
		</Container>
	);
};

export default Sources;
