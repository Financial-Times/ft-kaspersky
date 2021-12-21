import styled from 'styled-components';
import { device } from '~/config/utils';

const BttContainer = styled.div`
	margin-bottom: 30px;
	max-width: 1220px;
	padding: 20px;
	margin: 0 auto;
	text-align: center;

	@media ${device.tablet} {
		text-align: right;
	}
`;

const BttWrapper = styled.button`
	display: inline-flex;
	position: relative;
	margin: 0 auto;
	background: none;
	border: none;
	padding: 0;
	cursor: pointer;
`;

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}

const BTTButton = () => {
	return (
		<BttContainer>
			<BttWrapper onClick={scrollToTop}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="50"
					height="50"
					viewBox="0 0 50 50"
				>
					<g id="btn_b2t" transform="translate(70 10) rotate(90)">
						<path
							id="circle"
							d="M25,0A25,25,0,1,0,50,25,25,25,0,0,0,25,0Zm0,46.875A21.875,21.875,0,1,1,46.875,25,21.875,21.875,0,0,1,25,46.875Z"
							transform="translate(40 70) rotate(180)"
							fill="#06a88e"
						/>
						<g
							id="Layer_2"
							data-name="Layer 2"
							transform="translate(-8.979 57) rotate(-90)"
						>
							<g
								id="Layer_1"
								data-name="Layer 1"
								transform="translate(2 11.979)"
							>
								<path
									id="Path_542"
									data-name="Path 542"
									d="M0,7.481,1.315,8.8,6.579,3.5V18.721H8.5V3.458l5.226,5.3L15,7.481,7.519,0Z"
									transform="translate(3 3)"
									fill="#00a88e"
								/>
							</g>
						</g>
					</g>
				</svg>
			</BttWrapper>
		</BttContainer>
	);
};

export default BTTButton;
