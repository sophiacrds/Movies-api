import React from "react";
import { GlobalStyle } from "../../globalStyles";
import { CardBox, Img, Original, Overview, TextContent, Wrap } from "./style";

export default function Card(p) {
	function unwrapOverview(id) {
		const elements = document.querySelectorAll(`.hide${id}`);
		const elementsArr = Array.from(elements);

		if (window.innerWidth > 550) {
			for (let i = 0; i < elementsArr.length; i++) {
				elementsArr[i].style.display = "none";
			}
		}
	}

	function wrapOverview(id) {
		const elements = document.querySelectorAll(`.hide${id}`);
		const elementsArr = Array.from(elements);

		if (window.innerWidth > 550) {
			for (let i = 0; i < elementsArr.length; i++) {
				elementsArr[i].style.display = "initial";
			}
		}
	}

	return (
		<CardBox>
			<GlobalStyle />
			<Img
				src={`https://image.tmdb.org/t/p/w500/${
					window.innerWidth > 550 ? p.img : p.img2
				}`}
				alt={`Poster of "${p.title}"`}
				title={`Poster of "${p.title}"`}
			/>
			<TextContent>
				<h1 className={`hide${p.rank}`}>#{p.rank}</h1>
				<h2>
					{p.title}{" "}
					<Original className={`hide${p.rank}`}>({p.originalTitle})</Original>
				</h2>
				<Wrap
					onMouseEnter={() => unwrapOverview(`${p.rank}`)}
					onMouseLeave={() => wrapOverview(`${p.rank}`)}
				>
					<Overview>{p.overview}</Overview>
				</Wrap>
				<p className={`hide${p.rank}`}>Community rating: {p.rate}</p>
			</TextContent>
		</CardBox>
	);
}
