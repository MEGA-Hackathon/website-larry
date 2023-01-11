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
const RegisterPage = lazy(() => import("pages/register"));
const EventsPage = lazy(() => import("pages/events"));
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
						path={PageLinks.Events}
						element={
							<Suspense>
								<EventsPage />
							</Suspense>
						}
					/>
					<Route
						path={PageLinks.Register}
						element={
							<Suspense>
								<RegisterPage />
							</Suspense>
						}
					/>
					<Route
						path={PageLinks.About}
						element={
							<Suspense>
								<EventsPage />
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
