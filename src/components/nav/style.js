import styled from "styled-components";

export const NavBar = styled.section`
	width: 20%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 750px) {
		height: unset;
		width: 100%;
	}
`;

export const Nav = styled.nav`
	width: 150px;
	background: var(--nav-color);
	border-radius: 20px;
	display: flex;
	justify-content: center;
	font-size: 20px;
	margin: 20px;
	position: fixed;
	z-index: 99;

	@media (max-width: 750px) {
		width: 95%;
		margin: 0;
		top: 20px;
	}
`;

export const List = styled.ul`
	width: inherit;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	gap: 10px;
	padding: 10px;

	@media (max-width: 750px) {
		flex-direction: row;
		width: 100%;
		text-align: center;
	}

	li {
		cursor: pointer;
		font-weight: bold;
	}

	a {
		width: 130px;
		border-radius: 10px;
		padding: 10px;
		text-decoration: none;
		color: white;

		@media (max-width: 550px) {
			width: 30%;
		}
		@media (max-width: 425px) {
			width: fit-content;
			font-size: 15px;
		}
	}
	.active {
		background: var(--sec-color);
	}
`;
