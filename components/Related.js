import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { device } from '~/config/utils';
import ReportItem from './Report/ReportItem';

import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const RelatedContainer = styled.div`
	padding: 70px 20px 30px 20px;
	margin-bottom: 30px;

	.reportItem {
		.itemContent {
			width: 90%;
			height: 90%;
		}
	}
`;

const RelatedSwiper = styled.div`
	max-width: 1180px;
	margin: 0 auto;
	margin-bottom: 30px;
`;

const SwiperPagination = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 0;
	position: relative;
	max-width: 1180px;
	margin: 0 auto;

	.swiper-next {
		width: 30px;
		height: 30px;
		position: absolute;
		right: 0;

		&[aria-disabled='true'] {
			opacity: 0.5;
		}
	}

	.swiper-prev {
		width: 30px;
		height: 30px;
		position: absolute;
		left: 0;

		&[aria-disabled='true'] {
			opacity: 0.5;
		}

		svg {
			transform: rotate(180deg);
		}
	}

	.swiper-pagination-bullet {
		margin-right: 5px;
		height: 15px;
		width: 15px;
		border: 2px solid #707070;
		background-color: transparent;
		opacity: 1;
	}
	.swiper-pagination-bullet-active {
		background-color: #06a88e;
		border: 3px solid #06a88e;

		position: relative;
		&:after {
			content: '';
			height: 5px;
			width: 5px;
			position: absolute;
			top: 50%;
			right: 50%;
			border-radius: 100%;
			background-color: white;
			transform: translate(40%, -50%);
		}
	}
`;

const RelatedTitle = styled.div`
	font-family: 'Open Sans', sans-serif;
	font-weight: 700;
	font-size: 30px;
	color: #404545;
	text-align: center;
	line-height: 1;
	margin-bottom: 50px;
	letter-spacing: 1px;

	@media ${device.tablet} {
		font-size: 40px;
	}
`;

const Related = ({ data }) => {
	return (
		<RelatedContainer>
			<RelatedTitle>Related Content</RelatedTitle>
			<RelatedSwiper>
				<Swiper
					spaceBetween={10}
					slidesPerView={3}
					pagination={{
						el: '.swiper-pagination',
						clickable: true,
					}}
					navigation={{
						nextEl: '.swiper-next',
						prevEl: '.swiper-prev',
					}}
					breakpoints={{
						960: {
							slidesPerView: 3,
							spaceBetween: 50,
						},
						540: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						320: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
					}}
				>
					{data.map((slide, i) => (
						<SwiperSlide key={i}>
							<ReportItem data={slide} />
						</SwiperSlide>
					))}
				</Swiper>
			</RelatedSwiper>
			<SwiperPagination>
				<div className="swiper-next">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="43.683"
						height="35"
						viewBox="0 0 43.683 35"
					>
						<path
							id="arrow-next"
							d="M0,17.456l3.069,3.069L15.35,8.158V43.683h4.474V8.07L32.018,20.439,35,17.456,17.544,0Z"
							transform="translate(43.683) rotate(90)"
							fill="#00a88e"
						/>
					</svg>
				</div>
				<div className="swiper-pagination"></div>
				<div className="swiper-prev">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="43.683"
						height="35"
						viewBox="0 0 43.683 35"
					>
						<path
							id="arrow-next"
							d="M0,17.456l3.069,3.069L15.35,8.158V43.683h4.474V8.07L32.018,20.439,35,17.456,17.544,0Z"
							transform="translate(43.683) rotate(90)"
							fill="#00a88e"
						/>
					</svg>
				</div>
			</SwiperPagination>
		</RelatedContainer>
	);
};

export default Related;
