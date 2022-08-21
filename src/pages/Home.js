import React from "react";
import HomeMsg from "../components/homeMsg";
import Navigation from "../components/nav";
import { GlobalStyle } from "../globalStyles";

export default function Home() {
	return (
		<>
			<main>
				<GlobalStyle />
				<Navigation />
				<HomeMsg />
			</main>
		</>
	);
}
