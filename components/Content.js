import styled from 'styled-components';
import { device } from '~/config/utils';

const ContentWrapper = styled.div`
	max-width: 883px;
	padding: 0 10px;
	margin: 0 auto;
`;

const ContentText = styled.div`
	&.dropCap:first-letter {
		font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
		float: left;
		line-height: 0.65;
		color: #000000;
		font-size: 48px;
		margin: 5px 15px 10px 0;
		background-color: red;
		line-height: 1;
		padding: 10px 20px;
		@media ${device.tablet} {
			font-size: 48px;
		}
	}
`;

const Content = ({ data, id }) => {
	return (
		<ContentWrapper data-pos={id}>
			<ContentText
				className={data.hasDropCap ? 'dropCap' : ' '}
				dangerouslySetInnerHTML={{ __html: data.content }}
			/>
		</ContentWrapper>
	);
};

export default Content;
