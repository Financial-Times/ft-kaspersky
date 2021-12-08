import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 0 5px;
	max-width: 883px;
	margin: 0 auto;
	@media ${device.tablet} {
		padding: 0 10px;
	}
`;
const Title = styled.div`
	font-size: 16px;
	color: #636364;
	text-transform: uppercase;
	position: relative;
	display: inline-block;

	&:after {
		content: '';
		display: block;
		position: absolute;
		bottom: 1px;
		left: 0;
		height: 1px;
		width: 100%;
		background-color: #636364;
	}

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
