import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "theme",
	initialState: "dark",
	reducers: {
		setTheme: (_, action) => {
			return action.payload;
		},
		resetTheme: () => {
			return "dark";
		},
	},
});

export default slice.reducer;
export const { setTheme, resetTheme } = slice.actions;
export const themeSlice = slice;
