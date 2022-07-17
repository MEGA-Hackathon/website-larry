const breakpoints = {
	xs: 576,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
};

export const LightTheme = {
	colors: {
		surface: {
			contrast: "rgb(0, 0, 0)",
			background: "rgb(255, 255, 255)",
			darkened: "rgb(225, 225, 240)",
			elevations: ["rgb(41, 25, 61)", "rgb(65, 51, 82)", "rgb(88, 77, 104)"],
		},
		primary: {
			contrast: "rgb(255, 255, 255)",
			color: "#110027",
			accent: "#413352",
		},
	},
	breakpoints,
};
export const DarkTheme = {
	colors: {
		surface: {
			contrast: "rgb(255, 255, 255)",
			background: "rgb(17, 0, 39)",
			darkened: "rgb(11, 0, 25)",
			elevations: ["rgb(41, 25, 61)", "rgb(65, 51, 82)", "rgb(88, 77, 104)"],
		},
		primary: {
			contrast: "rgb(255, 255, 255)",
			color: "#110027",
			accent: "#413352",
		},
	},
	breakpoints,
};
export default DarkTheme;
