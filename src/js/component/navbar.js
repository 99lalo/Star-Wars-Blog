import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3" style={{ backgroundColor: "black" }}>
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
						style={{ width: "5em", height: "3em" }}
						alt="Card image cap"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-dark">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
