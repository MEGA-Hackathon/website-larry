import { GiMoon } from "react-icons/gi";
import { HiSun } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
	color: ${({ theme }) => theme.colors.surface.contrast};
	text-decoration: none;
	text-transform: capitalize;
	cursor: pointer;
	position: relative;
	&::before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		bottom: 1px;
		height: 2px;
		width: 0;
		background: ${({ theme }) => theme.colors.surface.contrast};
		transition: width 150ms linear;
	}
	&:hover::before {
		width: 100%;
	}
`;
export const DarkThemeToggle = styled(HiSun)`
	cursor: pointer;
`;
export const LightThemeToggle = styled(GiMoon)`
	cursor: pointer;
`;

export const StyledBrandSvg = styled.svg`
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.surface.contrast};
	transition: height 0.25s ease-out;
	height: ${({ isScrolled }) => (isScrolled ? "40px" : "45px")};
	path {
		fill: ${({ theme }) => theme.colors.surface.background};
	}
`;

export const StyledNavigations = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	margin-left: auto;
	margin-right: 0px;
	margin-top: auto;
	margin-bottom: auto;
	> *:not(:last-child) {
		margin-right: 20px;
	}
`;

export const StyledNavBrand = styled.div`
	flex: 1;
	display: flex;
	margin-left: 0px;
	margin-right: auto;
	margin-top: auto;
	margin-bottom: auto;

	font-size: large;
	font-weight: 600;
	cursor: pointer;

	> * {
		margin-top: auto;
		margin-bottom: auto;
	}
	> *:not(:last-child) {
		margin-right: 8px;
	}
`;

export const StyledNav = styled.nav`
	flex: 1;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding-left: 3%;
	padding-right: 3%;
	padding-top: 5px;
	padding-bottom: 5px;
	z-index: 5;

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 64px;

	background-color: ${({ theme }) => theme.colors.surface.elevations[0]};
	transition: height 0.25s ease-out;
	height: ${({ isScrolled }) => (isScrolled ? "50px" : "64px")};
`;
