import Navbar from "components/navbar";
import React from "react";

const EventsPage = () => {
	//get window height
	const height = window.innerHeight;

	return (
		<>
			<Navbar />
			<iframe width="99%" height={height - 10} src="https://megahack.tech" />
		</>
	);
};

export default EventsPage;
