import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/theme.reducer";

const AppStore = configureStore({
	reducer: {
		theme: themeReducer,
	},
});

export default AppStore;
export { resetTheme, setTheme } from "./reducers/theme.reducer";
