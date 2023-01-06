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
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056587438912450601/image.png",
    },
    {
        name: "IchDen",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056596681052925993/image.png",
    },
    {
        name: "Education For All Coalition",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056587553710538812/image.png",
    },
    {
        name: "Stickermule",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056597091549466644/image.png",
    },
    {
        name: "Innovation Academy",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056596919746576404/image.png",
    },
    {
        name: "Resilience Inc",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056597195413000303/image.png",
    },
    {
        name: "SGAP Leaders",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056596435967160320/image.png",
    },
    {
        name: "_",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056596311593463919/image.png",
    },
    {
        name: "Global NGO Executive Committee",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056590619927126116/image.png",
    },
    {
        name: "Art Of Problem Solving",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056596172522930337/image.png",
    },
    {
        name: "Leading Learners",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056589990248845372/image.png",
    },
    {
        name: "Goliath Automation & Robotics",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056594580063125534/image.png",
    },
    {
        name: ".Bubble",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056594684463546420/image.png",
    },
    {
        name: "1Password",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056590106787594310/image.png",
    },
    {
        name: "Echo3D",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056590452981235753/image.png",
    },
    {
        name: "Slingshot Ahead",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056594218526715944/image.png",
    },
    {
        name: "Balsamiq",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056594332179771503/image.png",
    },
    {
        name: "_",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056594437255462952/image.png",
    },
    {
        name: "Rosenfeld",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056593816460726322/image.png",
    },
    {
        name: "Inspirit AI",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056593923503562872/image.png",
    },
    {
        name: "Voiceflow",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056594080907407423/image.png",
    },
    {
        name: "Taskade",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056593693936717877/image.png",
    },
    {
        name: ".xyz",
        image: "https://cdn.discordapp.com/attachments/915828251279122482/1056593561837113404/image.png",
    },
];

const partnersList = [
    {
        name: "Rutgers Prep",
        image: "https://cdn.campus360.org/uploads/universities/1609908545edcec70a8ec4085ac1055659c7c92859.png",
    },
    {
        name: "Hun School of Princeton",
        image: "https://upload.wikimedia.org/wikipedia/en/2/24/Hun_School_of_Princeton_Logo.jpg",
    },
    // {
    //     name: "Riverdale",
    //     image: "https://megahack.tech/static/media/rosenfeld.e0593a0139f834dd25e0.png",
    // },
    {
        name: "Lawrenceville",
        image: "https://upload.wikimedia.org/wikipedia/en/c/cd/Lawrenceville_School_seal.png",
    },
    {
        name: "Northfield Mount Hermon",
        // don't worry about it. :)
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEVgp+X///9apeRoq+aaxO1ZpORSoeNgqOXo8vpPoON6s+moy+97tOi/2POy0vHU5ff2+f3h7fnN4faOvuvc6viiye7B2vPx9/xxr+ew0PCEuOm51fJGnOI+meHd6/jH3vRDBZfgAAAE+0lEQVR4nO2a61riMBCG20LCBouguFAF1/u/y7WlM5mcmrIi7fp87y8xmSQfSTOHUhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBLVGVRQWsVkm4emmag5+AckcZwlcMC90vLm29cLUPk9LVsqAckqnWy53oZwu2xBQSrHEb/KgX+IlUZIsZXG9mw0wPT7GTPkxzjYWgOHWncDswTm/rJWeSVCk9Oy0Pyy/VkPI5XuAsbn7+isHwxX1BYJo+pN86UCsuTY36lwk1ibr1x+02qsNzLo3alwnIRn2ThdZtWYdmIs3atwvgloLfzUniU01+psKwjl41a+72+qPBKh6g/Of+WI2yN22royv713n50Ft9Zf1jbJ+OPXxRGfImHc2uh/DHMmTp8zubM0X7S79TaGN96JN73+OAdgxUpjB8P/SJs98F9Wu3l9584YXxYVrFWQ63rwbhpAP+keFFDTuEfYXoMNlEf5fmYicLSbc4pdB7l394hUu4TMBeFrpacQifw2/kKnYGf5qKw/JCHLaPQHB1TN2bQ7nWbGGICheVSbEVOoWfqLNJz9sepFYrzJga7UqG8L/XzzBQ+2gByN1ohrY6ds42KqsZrS2VYd1O4Odt70aYZGYUFGZwCS0OOZE8SE+76fgo1qSnFlZFRSI/aEy+E3H71Rk3vpDCxxPspVIoWVdo0Y1hhRWHn9syPc7+J7EdqQwpTK6A5KxWBY7pbKCy0uFcX1RiFdd/8rNlvXNy+WtoWUpjIr1jhY4zXmyosjM11eknDCnnXPxSHoJcLRVtZvJtNRuEwt1EoA8lLmpHZQ5J1UIWhILzNj9Sr/cCRXaJQdl+FlfDSXZqRUbi0xuwduuet/7PdUM4/wtxjAoWFEvlOW1/MnFIybmuE+tB/OGhNaWMbHnGaPw+FTjC5Gq2wKyZWZNfQdnYXKytczkOhfZ66rD2jkB637gLloZ5JU1fYYIV+cjWVwkLZ+sjBZBTShl+Cde1mGn1GqOj0vmYUbqN8h8LGrnFJ0ycU0uIvB9ApWpTkALn+f8oo7Co/Prf1+PSvpV0kBS1xhZw+9JeIkWUbCv14ozcZhd8ftdlRD7xKOrEJhd41WYnt54xfPfb/OMxHYWGc4sQIhfTiSovqIiXSfB0lim2TKCxWfjU2oZAyJA7IKmtBeRTP8DInhTLNGFIYhJy2KMIxGgc+s1LopBkDCsk92LSBcgxbO+QbNlFsm0hhYdwqS0LhLlgc6bGaORDMVELurdArhWYUyiV1z6aoK/KJT5SiJlNYOcXAhMenZmHbeQxZG1aUJpeRVzfFhAqdNCN1wvpWp4zWegwZglZTKmx/oWIrUf6vXWSaESpse1PUujOOrfUUTq/SqMjvaRT/5mKlIr+nsVFbYDyCdV3Xa4o4PtpPtVNLEUFYoLBpbekJ2zXSVjU8SjcD72E3g6xlLNp/8EvUumt3l1dzlLRfe8Yj0EHk4sf/FTt+X2HMNozKYr2EV+RoR/J9v6eJKbQvqccoDCPr2AxikRO8xw9yOE4zfqxCTjN+rkLq9IMV9j7vP1WYvUtbLq9Y/Ijr/7hLi0VIJK5Qb/uIIxpnG+klPe5qsDljfENUpf41JgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgHnzF+JfQ/97HpO8AAAAAElFTkSuQmCC",
    },
    {
        name: "Newark Academy",
        // oh god, not again
        image: "data:image/png;base64,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",
    },
    {
        name: "Milton Academy",
        image: "https://www.milton.edu/wp-content/uploads/2022/01/Milton-Academy-Logo.png",
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
            <br />
            <Swiper
                breakpoints={{
                    [0]: { slidesPerView: 2 },
                    [sm]: { slidesPerView: 2 },
                    [md]: {
                        slidesPerView: 2,
                    },
                    [lg]: {
                        slidesPerView: 2,
                    },
                    [xl]: {
                        slidesPerView: 2,
                    },
                }}
                style={{
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
                    <SwiperSlide
                        initialSlide={3}
                        key={sponsor.name}
                        style={{ maxWidth: 300, maxHeight: 300 }}
                    >
                        <StyledSwiperCard
                            style={{
                                backgroundColor: "white",
                                color: "black",
                                height: "100%",
                                width: "100%",
                                borderRadius: 25,
                            }}
                        >
                            <StyledCardImage
                                src={sponsor.image}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                            <StyledCardBody
                                style={{ position: "absolute", bottom: 15 }}
                            >
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
            <br />
            <Swiper
                breakpoints={{
                    [0]: { slidesPerView: 2 },
                    [sm]: { slidesPerView: 2 },
                    [md]: {
                        slidesPerView: 2,
                    },
                    [lg]: {
                        slidesPerView: 2,
                    },
                    [xl]: {
                        slidesPerView: 2,
                    },
                }}
                style={{
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
                    <SwiperSlide
                        key={sponsor.name}
                        style={{ maxWidth: 300, maxHeight: 300 }}
                    >
                        <StyledSwiperCard
                            style={{
                                backgroundColor: "white",
                                color: "black",
                                height: "100%",
                                width: "100%",
                                borderRadius: 25,
                            }}
                        >
                            <center>
                                <StyledCardImage
                                    src={sponsor.image}
                                    style={{
                                        objectFit: "contain",
                                        width: "75%",
                                        height: "75%",
                                        paddingTop: "7%",
                                    }}
                                />
                            </center>
                            <StyledCardBody
                                style={{ position: "absolute", bottom: 15 }}
                            >
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
