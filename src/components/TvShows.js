import React from "react";
import Card from "../components/card";
import { Cards } from "../globalStyles";
import { tvApi } from "../services/TMDBApi";

export default class Shows extends React.Component {
	state = {
		shows: [],
	};

	handleShows = async () => {
		const response = await tvApi.get();

		console.log(response);

		const infos = response.data.results.map((i, index) => {
			return {
				title: i.name,
				originalTitle: i.original_name,
				overview: i.overview
					? i.overview
					: "Overview not available at the moment",
				release: i.release_date,
				posterPath: i.poster_path,
				backdropPath: i.backdrop_path,
				rate: i.vote_average,
				rank: index + 1,
			};
		});

		this.setState({ shows: infos });
	};

	componentDidMount() {
		this.handleShows();
	}

	render() {
		return (
			<Cards>
				{this.state.shows.map((i) => (
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
		);
	}
}
