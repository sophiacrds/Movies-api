import axios from "axios";

export const moviesApi = axios.create({
	baseURL:
		"https://api.themoviedb.org/3/movie/popular?api_key=a2af23c911b7f4267d76f66689f1ed00&language=en-US&page=1",
});

export const tvApi = axios.create({
	baseURL:
		"https://api.themoviedb.org/3/tv/popular?api_key=a2af23c911b7f4267d76f66689f1ed00&language=en-US",
});
