import styled from "styled-components";

export const Button = styled.button`
	position: relative;
	overflow: hidden;
	outline: 0;
	border: 0;
	border-radius: 0.3rem;
	padding: 0.75rem 1.5rem 0.7rem;
	font-size: 18px;
	cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
	color: ${({ theme }) => theme.colors.surface.background};
	background-color: ${({ theme }) => theme.colors.surface.contrast};
	box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
	transition: background 400ms;
	cursor: pointer;
`;

export const TextButton = styled(Button)`
	color: ${({ theme }) => theme.colors.surface.contrast};
	background-color: transparent;
`;
