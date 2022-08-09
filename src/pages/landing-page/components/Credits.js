import React from "react";
import styled, { useTheme } from "styled-components";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const StyledCardHeader = styled.h3`
	margin: 0px 0px 0.1rem 0px;
`;
const StyledCardBody = styled.div`
	width: fill-available;
	margin: 5px 1rem 0px 1rem;
`;
const StyledCardImage = styled.img`
	object-fit: cover;
	background-position: center;
	height: 40%;
	width: 100%;
`;
const StyledSwiperCard = styled.div`
	padding: 0;
	aspect-ratio: 1 / 1;
	border-radius: 2.5%;
	overflow: hidden;
	user-select: none;
	background-color: ${({ theme }) => theme.colors.surface.elevations[0]};
	${({ theme }) => (theme.shadows ? theme.shadows[0] : "")};
`;
const Header = styled.h1`
	font-size: 30px;
	text-align: center;
	margin-bottom: 0px;
`;
const SponsorSection = styled.section`
	margin-top: 25px;
`;
const ParnerSection = styled.section`
	margin-top: -10px;
`;

const Sponsors = () => {
	const Theme = useTheme();
	const sm = Theme.breakpoints.sm;
	const md = Theme.breakpoints.md;
	const lg = Theme.breakpoints.lg;
	const xl = Theme.breakpoints.xl;
	return (
		<SponsorSection>
			<Header>Sponsors</Header>
			<Swiper
				breakpoints={{
					[0]: { slidesPerView: 1.25 },
					[sm]: { slidesPerView: 1.75 },
					[md]: {
						slidesPerView: 2,
					},
					[lg]: {
						slidesPerView: 4,
					},
					[xl]: {
						slidesPerView: 4.5,
					},
				}}
				style={{ marginLeft: "10%", marginRight: "10%", paddingTop: "5px", paddingBottom: "40px" }}
				spaceBetween={25}
				centeredSlides={true}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
			>
				<SwiperSlide>
					<StyledSwiperCard>
						<StyledCardImage src="https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png" />
						<StyledCardBody>
							<StyledCardHeader>Rosenfeld</StyledCardHeader>
							{"I'm just better, undisputably so. I'm not a good person, but I'm better than you."}
						</StyledCardBody>
					</StyledSwiperCard>
				</SwiperSlide>
				<SwiperSlide>
					<StyledSwiperCard>Hello</StyledSwiperCard>
				</SwiperSlide>
				<SwiperSlide>
					<StyledSwiperCard>Hello</StyledSwiperCard>
				</SwiperSlide>
				<SwiperSlide>
					<StyledSwiperCard>Hello</StyledSwiperCard>
				</SwiperSlide>
				<SwiperSlide>
					<StyledSwiperCard>Hello</StyledSwiperCard>
				</SwiperSlide>
				<SwiperSlide>
					<StyledSwiperCard>Hello</StyledSwiperCard>
				</SwiperSlide>
			</Swiper>
		</SponsorSection>
	);
};

const Partners = () => {
	return (
		<ParnerSection>
			<Header>Partners NGOs & Schools</Header>
		</ParnerSection>
	);
};

const Credits = () => {
	return (
		<>
			<Sponsors />
			<Partners />
		</>
	);
};

export default Credits;
