import { PageLinks } from "pages/links";
import React, { lazy, Suspense } from "react";
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

const LandingPage = lazy(() => import("pages/landing-page"));
const HomePage = lazy(() => import("pages/home"));
const AboutPage = lazy(() => import("pages/about"));
const ContactsPage = lazy(() => import("pages/contacts"));

const App = () => {
	return (
		<>
			<GlobalStyles />
			<HashRouter>
				<Routes>
					<Route
						path={"/"}
						element={
							<Suspense>
								<LandingPage />
							</Suspense>
						}
					/>
					<Route
						path={PageLinks.Home}
						element={
							<Suspense>
								<HomePage />
							</Suspense>
						}
					/>
					<Route
						path={PageLinks.About}
						element={
							<Suspense>
								<AboutPage />
							</Suspense>
						}
					/>
					<Route
						path={PageLinks.Contact}
						element={
							<Suspense>
								<ContactsPage />
							</Suspense>
						}
					/>
				</Routes>
			</HashRouter>
		</>
	);
};

export default App;
