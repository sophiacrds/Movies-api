import React from "react";
import Navigation from "../components/nav";
import Shows from "../components/TvShows";
import { GlobalStyle } from "../globalStyles";

export default function TvPage() {
	return (
		<main>
			<GlobalStyle />
			<Navigation />
			<Shows />
		</main>
	);
}
