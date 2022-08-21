import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MoviesPage from "./MoviesPage";
import TvPage from "./TvPage";

export default function AppRoutes() {
	return (
		<Router basemname={`/${process.env.PUBLIC_URL}`}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="movies" element={<MoviesPage />} />
				<Route path="tvshows" element={<TvPage />} />
			</Routes>
		</Router>
	);
}
