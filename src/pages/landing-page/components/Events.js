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

const StyledBody = styled.p`
	color: #000;
`;
const StyledHeader = styled.h1`
	line-height: 30px;
	margin: 25px 0px 10px 0px;
	color: #000;
`;
const StyledPopup = styled.div`
	text-align: center;
	margin: 20px 30px;
	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: 20px 0px;
	}
	border-radius: 25px;
	background-color: #fff;
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
								<StyledHeader>Digital Storytelling for Social Good with AI Class</StyledHeader>
								<b style={{ color: "#000" }}>Registration Open Now - Feburary</b>

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
							</StyledPopup>
						</Areas.Community>
						<Areas.Network>
							<StyledPopup>
								<StyledHeader>April 1 2023</StyledHeader>
								<b style={{ color: "#000" }}>MEGA Hackathon 2023</b>

								<StyledBody>
									{`Like last year, MEGA Hackathon will host another Hackathon event in 2023 to address real-world problems.`}
								</StyledBody>
							</StyledPopup>
						</Areas.Network>
						<Areas.Mega>
							<StyledPopup>
								<StyledHeader>{`COMPLETED`}</StyledHeader>
								<b style={{ color: "#000" }}>MEGA Hackathon 2022</b>

								<StyledBody>
									{`We had over 200+ registration, 40+ NGOs and Partners and over 10,000 in cash funding and 50,000 in awards sponsorships. The event was a blast!`}
								</StyledBody>
								{/* <PrimaryButton
                                    style={{
                                        marginRight: "10px",
                                        borderRadius: 100,
                                    }}
                                    onClick={() => {
                                        window.location.href = "#/events";
                                    }}
                                >
                                    View Archive
                                </PrimaryButton> */}
							</StyledPopup>
						</Areas.Mega>
					</>
				)}
			</StyledComposition>
		</>
	);
};

export default Popups;
