import { PageLinks, PageNames } from "pages/links";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useScroll } from "../../hooks/useScroll";
import { setTheme } from "../../state/store";
import CustomLogo from "./customlogo";
import { DarkThemeToggle, LightThemeToggle, NavLink, StyledNav, StyledNavBrand, StyledNavigations } from "./styled";

const Navbar = () => {
	const { isScrolled } = useScroll();
	const theme = useSelector((state) => state.theme);
	const dispatch = useDispatch();
	const Icon = theme == "light" ? DarkThemeToggle : LightThemeToggle;
	return (
		<StyledNav isScrolled={isScrolled}>
			<StyledNavBrand to={"/"}>
				<CustomLogo isScrolled={isScrolled} />
				<div>MEGA Hackathon</div>
			</StyledNavBrand>
			<StyledNavigations>
				{PageNames.map((name, index) => (
					<NavLink to={PageLinks[name]} key={index}>
						{name}
					</NavLink>
				))}
				<Icon size={20} onClick={() => dispatch(setTheme(theme == "light" ? "dark" : "light"))} />
			</StyledNavigations>
		</StyledNav>
	);
};

export default Navbar;
