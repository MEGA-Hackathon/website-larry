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
		<StyledComposition areas={AreasMobile} areasMd={AreasDesktop}>
			{(Areas) => (
				<>
					<Areas.Community>
						<StyledPopup>
							<StyledCommunityIcon size={iconSize} />
							<StyledHeader>Powerful Community</StyledHeader>
							<StyledBody>
								{`A community of innovators and problem solvers working to help create solutions toward the
							UN's 17 sustainability goals.`}
							</StyledBody>
						</StyledPopup>
					</Areas.Community>
					<Areas.Network>
						<StyledPopup>
							<StyledNetworkIcon size={iconSize} />
							<StyledHeader>Knowledge Network</StyledHeader>
							<StyledBody>
								{`A coalition of NGO's, entreprenuers, and tech companies providing guidance, advice and persoanlised help to our members.`}
							</StyledBody>
						</StyledPopup>
					</Areas.Network>
					<Areas.Mega>
						<StyledPopup>
							<StyledMegaIcon size={iconSize} />
							<StyledHeader>{`A "MEGA" Hackathon`}</StyledHeader>
							<StyledBody>
								{`A truly global event with members from all over the globe and from all ages, we strive to foster innovation and cretivity among all.`}
							</StyledBody>
						</StyledPopup>
					</Areas.Mega>
				</>
			)}
		</StyledComposition>
	);
};

export default Popups;
