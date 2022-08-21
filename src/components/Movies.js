import React from "react";
import Card from "./card";
import { moviesApi } from "../services/TMDBApi";
import { Cards } from "../globalStyles";

export default class Movies extends React.Component {
	state = {
		movies: [],
	};

	handleMovies = async () => {
		const response = await moviesApi.get();

		const infos = response.data.results.map((i, index) => {
			return {
				title: i.title,
				originalTitle: i.original_title,
				overview:
					i.overview !== ""
						? i.overview
						: "Overview not available at the moment",
				release: i.release_date,
				posterPath: i.poster_path,
				backdropPath: i.backdrop_path,
				rate: i.vote_average,
				rank: index + 1,
			};
		});

		this.setState({ movies: infos });
	};

	componentDidMount() {
		this.handleMovies();
	}

	render() {
		return (
			<>
				<Cards>
					{this.state.movies.map((i) => (
						<Card
							rank={i.rank}
							img={i.posterPath}
							img2={i.backdropPath}
							title={i.title}
							originalTitle={i.originalTitle}
							overview={i.overview}
							rate={i.rate}
							key={i.rank}
						/>
					))}
				</Cards>
			</>
		);
	}
}
