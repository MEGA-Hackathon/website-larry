import IconChartNetwork from "assets/icons/chart-network";
import IconSchool from "assets/icons/school";
import IconUserAlt from "assets/icons/user-alt";
import { Composition } from "atomic-layout";
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
            <center>
                <h1 id="why-mega">Why MEGA?</h1>
            </center>
            <StyledComposition areas={AreasMobile} areasMd={AreasDesktop}>
                {(Areas) => (
                    <>
                        <Areas.Community>
                            <StyledPopup>
                                <StyledCommunityIcon size={iconSize} />
                                <StyledHeader>
                                    A Motivated, Driven Community
                                </StyledHeader>
                                <StyledBody>
                                    {`At the core of our league is a community of innovators and problem solvers working passionate about creating solutions for the UN's 17 sustainability goals.`}
                                </StyledBody>
                            </StyledPopup>
                        </Areas.Community>
                        <Areas.Network>
                            <StyledPopup>
                                <StyledNetworkIcon size={iconSize} />
                                <StyledHeader>
                                    Knowledge Network & Connections
                                </StyledHeader>
                                <StyledBody>
                                    {`MEGA is backed by a coalition of NGO's, entreprenuers, and tech companies able to provide decades of experiance, guidance, and advice to our members.`}
                                </StyledBody>
                            </StyledPopup>
                        </Areas.Network>
                        <Areas.Mega>
                            <StyledPopup>
                                <StyledMegaIcon size={iconSize} />
                                <StyledHeader>{`A Truly "MEGA" Hackathon`}</StyledHeader>
                                <StyledBody>
                                    {`Our Hackathon is truly MEGA. Last season, we had 200+ attendees from 20+ different countries, 40+ NGOs and Partners who donated over 10k USD in funding and 50k in awards, sponsorships and internships that changed lives.`}
                                </StyledBody>
                            </StyledPopup>
                        </Areas.Mega>
                    </>
                )}
            </StyledComposition>
        </>
    );
};

export default Popups;
