import styled from "styled-components";

export const CardBox = styled.div`
	background: var(--card-color);
	color: white;
	max-width: var(--card-size);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 10px;
	border-radius: 10px;
	box-shadow: 2px 2px 5px 0 black;
	overflow: hidden;
	gap: 20px;

	&:hover {
		background: var(--card-color-hover);
	}

	@media (max-width: 750px) {
		max-width: unset;
		width: 90%;
	}

	@media (max-width: 550px) {
		flex-direction: column;
	}
`;

export const TextContent = styled.div`
	width: calc(60% - 20px);
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	padding: 3%;

	@media (max-width: 550px) {
		gap: 10px;
		width: 90%;
		padding: 0 0 20px 0;
	}

	@media (max-width: 425px) {
		h2 {
			font-size: 18px;
		}
		p {
			font-size: 13px;
		}
	}
`;

export const Original = styled.span`
	font-size: 15px;
	font-style: italic;
	font-weight: lighter;
`;

export const Overview = styled.p`
	width: 100%;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	text-align: justify;

	@media (max-width: 750px) {
		display: block;
	}
`;

export const Wrap = styled.div`
	&:hover {
		display: flex;
		height: fit-content;
		width: 100%;
	}
	&:hover p {
		display: unset;
	}

	@media (max-width: 550px) {
		display: block;
	}
`;

export const Img = styled.img`
	width: 40%;
	object-fit: cover;
	position: relative;
	align-self: stretch;

	@media (max-width: 550px) {
		width: 100%;
		height: 200px;
	}
	@media (max-width: 425px) {
		height: 150px;
	}
`;
