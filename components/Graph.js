import Script from 'next/script';
import styled from 'styled-components';

const Container = styled.div`
	max-width: 1220px;
	margin: 0 auto;
	padding: 10px;
	background-color: #7eff33;
`;

const Graph = ({ data }) => {
	return (
		<Container>
			<div
				className="infogram-embed"
				data-id={data.id}
				data-type="interactive"
				data-title={data.title}
			></div>
			<Script
				id="grpahId"
				dangerouslySetInnerHTML={{
					__html: `!function(e,i,n,s){var t="InfogramEmbeds",d=e.getElementsByTagName("script")[0];if(window[t]&&window[t].initialized)window[t].process&&window[t].process();else if(!e.getElementById(n)){var o=e.createElement("script");o.async=1,o.id=n,o.src="https://e.infogram.com/js/dist/embed-loader-min.js",d.parentNode.insertBefore(o,d)}}(document,0,"infogram-async");`,
				}}
			></Script>
		</Container>
	);
};

export default Graph;
