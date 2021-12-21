import styled from 'styled-components';
import ArticleItem from './ArticleItem';

const Container = styled.div`
	padding-bottom: 40px;
	position: relative;
`;

const ArticleContainer = ({ data }) => {
	return (
		<Container>
			{data.map((article, i) => {
				return <ArticleItem key={i} data={article} />;
			})}
		</Container>
	);
};

export default ArticleContainer;
