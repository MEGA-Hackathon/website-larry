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

const sponsorList = [
    {
        name: "Shaws 4 Shelters",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Rosenfeld Media",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "IchDen",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Education For All Coalition",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Stickermule",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Innovation Academy",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Resilience Inc",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "SGAP Leaders",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "_",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Global NGO Executive Committee",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Art Of Problem Solving",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Leading Learners",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Goliath Automation & Robotics",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: ".Bubble",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "1Password",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Echo3D",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Slingshot Ahead",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Balsamiq",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "_",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Rosenfeld",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Inspirit AI",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Voiceflow",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Taskade",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: ".xyz",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
];

const partnersList = [
    {
        name: "Rutgers Prep",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Hun School of Princeton",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Riverdale",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Lawrenceville",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Northfield Mount Hermon",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Newark Academy",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
    {
        name: "Milton Academy",
        image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    },
];

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
                style={{
                    marginLeft: "10%",
                    marginRight: "10%",
                    paddingTop: "5px",
                    paddingBottom: "40px",
                }}
                spaceBetween={25}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                {sponsorList.map((sponsor) => (
                    <SwiperSlide key={sponsor.name}>
                        <StyledSwiperCard>
                            <StyledCardImage src={sponsor.image} />
                            <StyledCardBody>
                                <StyledCardHeader>
                                    {sponsor.name}
                                </StyledCardHeader>
                            </StyledCardBody>
                        </StyledSwiperCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SponsorSection>
    );
};

const Partners = () => {
    const Theme = useTheme();
    const sm = Theme.breakpoints.sm;
    const md = Theme.breakpoints.md;
    const lg = Theme.breakpoints.lg;
    const xl = Theme.breakpoints.xl;
    return (
        <ParnerSection>
            <Header>Partners NGOs & Schools</Header>
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
                style={{
                    marginLeft: "10%",
                    marginRight: "10%",
                    paddingTop: "5px",
                    paddingBottom: "40px",
                }}
                spaceBetween={25}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                {partnersList.map((sponsor) => (
                    <SwiperSlide key={sponsor.name}>
                        <StyledSwiperCard>
                            <StyledCardImage src={sponsor.image} />
                            <StyledCardBody>
                                <StyledCardHeader>
                                    {sponsor.name}
                                </StyledCardHeader>
                            </StyledCardBody>
                        </StyledSwiperCard>
                    </SwiperSlide>
                ))}
            </Swiper>
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
