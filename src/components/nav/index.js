import React from "react";
import { List, Nav, NavBar } from "./style";
import { NavLink } from "react-router-dom";

export default function Navigation() {
	return (
		<NavBar>
			<Nav>
				<List>
					<NavLink to={"/"}>
						<li>Home</li>
					</NavLink>
					<NavLink to={"/movies"}>
						<li>Movies</li>
					</NavLink>
					<NavLink to={"/tvshows"}>
						<li>Tv Shows</li>
					</NavLink>
				</List>
			</Nav>
		</NavBar>
	);
}
