import App from "App";
import React from "react";
import { Provider as StoreProvider, useSelector } from "react-redux";
import AppStore from "state/store";
import { ThemeProvider } from "styled-components";
import DarkTheme, { LightTheme } from "styles/theme";

const ThemeRouter = (props) => {
	const theme = useSelector((state) => state.theme);
	return <ThemeProvider theme={theme == "light" ? LightTheme : DarkTheme}>{props.children}</ThemeProvider>;
};

const Router = () => {
	return (
		<StoreProvider store={AppStore}>
			<ThemeRouter>
				<App />
			</ThemeRouter>
		</StoreProvider>
	);
};

export default Router;
