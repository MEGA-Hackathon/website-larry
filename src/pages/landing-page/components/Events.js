import IconChartNetwork from "assets/icons/chart-network";
import IconSchool from "assets/icons/school";
import IconUserAlt from "assets/icons/user-alt";
import { Composition } from "atomic-layout";
import { PrimaryButton } from "components/button";
import React from "react";
import styled from "styled-components";

const AreasMobile = `
	Community
	Network
	Mega
`;
const AreasDesktop = `
	Community Network Mega
`;

const StyledBody = styled.p``;
const StyledHeader = styled.h1`
    line-height: 30px;
    margin: 25px 0px 10px 0px;
`;
const StyledPopup = styled.div`
    text-align: center;
    margin: 20px 30px;
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        margin: 20px 0px;
    }
    border-radius: 25px;
    border: 1px;
    padding: 25px;
`;
const StyledComposition = styled(Composition)`
    margin: 5px 10% 0px 10%;
`;

const StyledCommunityIcon = styled(IconUserAlt)`
    fill: #00b74a;
`;
const StyledNetworkIcon = styled(IconChartNetwork)`
    fill: #1266f1;
`;
const StyledMegaIcon = styled(IconSchool)`
    fill: #ffa900;
`;

const Popups = () => {
    const iconSize = 75;
    return (
        <>
            <center id="events">
                <h1 id="why-mega">Events</h1>
            </center>
            <StyledComposition areas={AreasMobile} areasMd={AreasDesktop}>
                {(Areas) => (
                    <>
                        <Areas.Community>
                            <StyledPopup>
                                <StyledHeader>
                                    Digital Storytelling for Social Good with AI
                                    Class
                                </StyledHeader>
                                <b style={{ color: "gray" }}>
                                    Feburary - April
                                </b>

                                <StyledBody>
                                    {`MEGA is teaming up with Columbia PHD students and Professors at Love and Future to educate the youth on the importance of Digital Storytelling and how it can be used to solve real world problems.`}
                                </StyledBody>

                                <PrimaryButton
                                    style={{
                                        marginRight: "10px",
                                        borderRadius: 100,
                                    }}
                                    onClick={() => {
                                        window.location.href = "/class.html";
                                    }}
                                >
                                    Register
                                </PrimaryButton>

                                <br />
                                <p style={{ color: "green" }}>
                                    Registration Open Now - Feburary
                                </p>
                            </StyledPopup>
                        </Areas.Community>
                        <Areas.Network>
                            <StyledPopup>
                                <StyledHeader>MEGA Hackathon 2023</StyledHeader>
                                <b style={{ color: "gray" }}>
                                    April 7th; 8th - 9th Hackathon
                                </b>

                                <StyledBody>
                                    {`Like last year, MEGA Hackathon will host another Hackathon event in 2023 to address real-world problems.`}
                                </StyledBody>

                                <PrimaryButton
                                    style={{
                                        marginRight: "10px",
                                        borderRadius: 100,
                                    }}
                                    onClick={() => {
                                        window.location.href = "/hack.html";
                                    }}
                                >
                                    Pre-Register
                                </PrimaryButton>

                                <p style={{ color: "green" }}>
                                    Pre-Register Now
                                </p>
                            </StyledPopup>
                        </Areas.Network>
                        <Areas.Mega>
                            <StyledPopup>
                                <StyledHeader>{`MEGA Hackathon 2022`}</StyledHeader>
                                <b style={{ color: "gray" }}>Complete</b>

                                <StyledBody>
                                    {`We had over 200+ registration, 40+ NGOs and Partners and over 10,000 in cash funding and 50,000 in awards sponsorships. The event was a blast!`}
                                </StyledBody>

                                <br />

                                <a
                                    style={{
                                        paddingLeft: "25px",
                                        paddingRight: "25px",
                                        paddingTop: "10px",
                                        paddingBottom: "10px",

                                        borderRadius: 100,
                                        backgroundColor: "transparent",
                                        border: "1.5px solid",
                                    }}
                                    onClick={() => {
                                        window.location.href =
                                            "https://mega-hack-2022-spring.devpost.com/";
                                    }}
                                >
                                    View Archive
                                </a>
                            </StyledPopup>
                        </Areas.Mega>
                    </>
                )}
            </StyledComposition>
        </>
    );
};

export default Popups;
