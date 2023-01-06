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

const galleryImages = [
    "https://media.discordapp.net/attachments/959222968054087680/960237934999654520/IMG_0187_2.JPG",
    "https://media.discordapp.net/attachments/959222968054087680/960124929276248124/5FDA9FDD-EA53-4FBB-B902-C9ED183533C7.jpg",
    "https://media.discordapp.net/attachments/959222968054087680/960124976151810088/IMG_2370.jpg",
    "https://media.discordapp.net/attachments/959222968054087680/960125004836663336/IMG_2374.jpg",
    "https://media.discordapp.net/attachments/959222968054087680/960125025313239060/IMG_2375.jpg",
    "https://media.discordapp.net/attachments/959222968054087680/960125318662873088/73A322D4-1443-4F9E-8084-5273111865DA.jpg",
    "https://media.discordapp.net/attachments/959222968054087680/960236572584841298/IMG_0180.JPG",
    "https://media.discordapp.net/attachments/959222968054087680/960237817810812928/IMG_0164.JPG",
];

const GalleryView = () => {
    const Theme = useTheme();
    const sm = Theme.breakpoints.sm;
    const md = Theme.breakpoints.md;
    const lg = Theme.breakpoints.lg;
    const xl = Theme.breakpoints.xl;
    return (
        <SponsorSection>
            <Header>Gallery</Header>
            <center>These are the images from MEGAHack2022</center>
            <br />
            <Swiper
                breakpoints={{
                    [0]: { slidesPerView: 1.25 },
                    [sm]: { slidesPerView: 1.25 },
                    [md]: {
                        slidesPerView: 1.25,
                    },
                    [lg]: {
                        slidesPerView: 1.25,
                    },
                    [xl]: {
                        slidesPerView: 1.25,
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
                {galleryImages.map((sponsor) => (
                    <SwiperSlide key={sponsor} style={{}}>
                        <StyledSwiperCard
                            style={{
                                backgroundColor: "white",
                                color: "black",
                                width: "100%",
                                height: "100%",
                                borderRadius: 25,
                            }}
                        >
                            <StyledCardImage
                                src={sponsor}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </StyledSwiperCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SponsorSection>
    );
};

const Gallery = () => {
    return (
        <>
            <GalleryView />
        </>
    );
};

export default Gallery;
