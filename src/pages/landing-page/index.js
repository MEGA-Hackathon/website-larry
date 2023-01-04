import React from "react";
import Credits from "./components/Credits";
import Events from "./components/Events";
import Header from "./components/Header";
import LandingNavbar from "./components/Navbar";
import Popups from "./components/Popups";

const LandingPage = () => {
	return (
		<>
			<LandingNavbar />
			<Header />
			<Events />
			<Popups />
			<Credits />
		</>
	);
};

export default LandingPage;
