import React from "react";
import Navigation from "../components/nav";
import Movies from "../components/Movies";
import { GlobalStyle } from "../globalStyles";

export default function MoviesPage() {
	return (
		<main>
			<GlobalStyle />
			<Navigation />
			<Movies />
		</main>
	);
}
