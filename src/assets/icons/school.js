import React from "react";

const IconSchool = (props) => {
	return (
		<svg
			id="Layer_1"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			data-name="Layer 1"
			width={props.size}
			height={props.size}
			{...props}
		>
			<path d="m24 9v2h-6l-5-5h8a3 3 0 0 1 3 3zm-24 0v2h6l5-5h-8a3 3 0 0 0 -3 3zm17-6.5-4-2.5h-2v6h2v-1zm.172 10.5h6.828v11h-9v-4a3 3 0 0 0 -6 0v4h-9v-11h6.828l5.172-5zm-11.172 7h-3v2h3zm0-4h-3v2h3zm8-3a2 2 0 1 0 -2 2 2 2 0 0 0 2-2zm4 5h3v-2h-3zm0 4h3v-2h-3zm-6-3a1 1 0 0 0 -1 1v4h2v-4a1 1 0 0 0 -1-1z" />
		</svg>
	);
};
export default IconSchool;
