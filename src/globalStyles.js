import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  :root{
    --card-color: #273E47;
    --card-color-hover: #3d535b;
    --bd-color: #0E171A;
    --nav-color: #BD632F;
    --sec-color: #a35d35;

    --card-size: 500px;
    --card-container-size: 550px;

    --ff-ordinary: sans-serif;
  }

  body{
    background: var(--bd-color);
    font-family: var(--ff-ordinary);
  }

  main{
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    @media (max-width: 750px){
		flex-direction: column-reverse;
	}
  }
`;

export const Cards = styled.section`
	width: var(--card-container-size);
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: 750px) {
		width: 100%;
		padding-top: 90px;
	}
`;
