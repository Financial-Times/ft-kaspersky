import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { device } from '~/config/utils';

import { Tween } from 'react-gsap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
	max-width: 883px;
	margin: 0 auto;
	padding: 10px;

	@media ${device.tablet} {
		padding: 15px 10px;
	}
`;

const Wrapper = styled.div`
	display: flex;
`;

const Content = styled.div`
	flex-basis: 58%;
	max-width: 58%;
`;

const StatContainer = styled.div`
	flex-basis: 42%;
	max-width: 42%;

	position: relative;

	&:before {
		content: '';
		position: absolute;
		height: 1px;
		width: 80%;
		top: 0;
		left: 50%;
		display: block;
		background-color: #707070;
		transform: translateX(-50%);
	}

	&:after {
		content: '';
		position: absolute;
		height: 1px;
		width: 80%;
		bottom: 0;
		left: 50%;
		display: block;
		background-color: #707070;
		transform: translateX(-50%);
	}
`;
const StatCircle = styled.div`
	width: 200px;
	height: 200px;
	background-color: #06a88e;
	color: white;
	margin: 20px auto;
	border-radius: 100%;
	font-size: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StatContent = styled.div`
	font-size: 36px;
	line-height: 1.1;
	padding-right: 15px;
`;

function animateValue(id, start, end, duration) {
	if (start === end) return;
	var range = end - start;
	var current = start;
	var increment = end > start ? 1 : -1;
	var stepTime = Math.abs(Math.floor(duration / range));
	var obj = document.getElementById(id);
	var timer = setInterval(function () {
		current += increment;
		obj.innerHTML = current;
		if (current == end) {
			clearInterval(timer);
		}
	}, stepTime);
}

const Stats = ({ data }) => {
	return (
		<Container>
			<Wrapper>
				<Tween
					duration={10000}
					to={{
						scrollTrigger: {
							trigger: `#test`,
							start: '200px 200px',
							end: 'bottom 200px',
							scrub: 0.5,
							onEnter: () => {
								animateValue('percentage', 0, data.percent, 2500);
							},
							markers: true,
						},
					}}
				>
					<StatContainer id="test">
						<StatCircle>
							<span id="percentage">0</span>
							<span>%</span>
						</StatCircle>
						<StatContent>{data.content}</StatContent>
					</StatContainer>
					<Content dangerouslySetInnerHTML={{ __html: data.before }} />
				</Tween>
			</Wrapper>
		</Container>
	);
};

export default Stats;
