import Link from 'next/link';
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
`;

const SwiperPagination = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 0;

	.swiper-pagination-bullet {
		height: 10px;
		width: 35px;
		border-radius: 10px;
		margin: 0 5px;
		background-color: #f8971d;
		opacity: 0.8;
		transition: width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	.swiper-pagination-bullet-active {
		background-color: #009b3a;
		width: 55px;
		transition: width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
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
				>
					{data.map((slide, i) => (
						<SwiperSlide key={i}>
							<ReportItem data={slide} />
						</SwiperSlide>
					))}
				</Swiper>
			</RelatedSwiper>
			<SwiperPagination>
				<div className="swiper-pagination"></div>
			</SwiperPagination>
		</RelatedContainer>
	);
};

export default Related;
