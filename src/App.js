import LandingPage from "pages/landing-page";
import React from "react";
import { createGlobalStyle } from "styled-components";
import { HashRouter, Route, Routes } from "../node_modules/react-router-dom/index";

const GlobalStyles = createGlobalStyle`
	html, body {
		margin: 0;
		padding: 0;
		font-family: "Chakra Petch", "Roboto", sans-serif;

		color: ${({ theme }) => theme.colors.surface.contrast};
		background-color: ${({ theme }) => theme.colors.surface.background};
	}
	
	body, input, textarea, button {
		font-family: "Chakra Petch", "Roboto", sans-serif;
	}
`;

const App = () => {
	return (
		<>
			<GlobalStyles />
			<HashRouter>
				<Routes>
					<Route index element={<LandingPage />} />
				</Routes>
			</HashRouter>
		</>
	);
};

export default App;
