import HeaderImage from "assets/header.png";
import { PrimaryButton, TextButton } from "components/button";
import React from "react";
import styled from "styled-components";
import Waves from "./Waves";

const StyledHeaderTitle = styled.h1`
	line-height: 2rem;
	margin: 0px;
	margin-bottom: -5px;
`;

const StyledMask = styled.span`
	background-size: cover;
	background-position: 50% 25%;
	background-image: url(${HeaderImage});
	background-color: ${({ theme }) => theme.colors.surface.background};
	opacity: 40%;
	filter: blur(1px);
	z-index: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
`;
const StyledHeader = styled.div`
	height: 100vh;
	padding: 0px 5%;
	display: flex;
	overflow: hidden;
	position: relative;
	align-items: center;

	* {
		z-index: 1;
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<StyledMask />
			<Waves />
			<div>
				<StyledHeaderTitle>
					Mega <br /> Hackathon
				</StyledHeaderTitle>
				<p>Nonprofit organization host seasonal hackathons aiming for UN 17 sustainable development goals</p>
				<div>
					<PrimaryButton style={{ marginRight: "10px" }}>Register</PrimaryButton>
					<TextButton>Learn more</TextButton>
				</div>
			</div>
		</StyledHeader>
	);
};

export default Header;
