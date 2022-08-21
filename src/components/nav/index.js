import React from "react";
import { List, Nav, NavBar } from "./style";
import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<NavBar>
			<Nav>
				<List>
					<Link to={"/"}>
						<li>Home</li>
					</Link>
					<Link to={"/movies"}>
						<li>Movies</li>
					</Link>
					<Link to={"/tvshows"}>
						<li>Tv Shows</li>
					</Link>
				</List>
			</Nav>
		</NavBar>
	);
}
