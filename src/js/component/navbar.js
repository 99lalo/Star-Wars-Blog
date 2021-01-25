import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	var pathname = "";
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
				<div className="dropdown">
					<button
						className="btn btn-dark btn-lg dropdown-toggle"
						id="dropdownMenuButton"
						type="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="true">
						Favorites <span className="badge badge-danger">{store.favorites.length}</span>
					</button>
					<div className={store.favorites.length > 0 ? "dropdown-menu show bg-dark text-white" : "d-non"}>
						{store.favorites.map((value, index) => {
							let info = store.characters.filter((char, index) => {
								pathname = `/chardetails/${value}`;
								return char.name == value;
							});
							if (info == undefined) {
								info = store.planets.filter((char, index) => {
									pathname = `/pladetails/${value}`;
									return char.name == value;
								});
								if (info == undefined) {
									info = store.starships.filter((char, index) => {
										pathname = `/stardetails/${value}`;
										return char.name == value;
									});
								}
							}
							return (
								<li key={index} className="dropdown-item bg-dark text-white">
									<Link
										className="text-white"
										to={{
											pathname: pathname,
											state: info[0]
										}}>
										{value}
									</Link>
									<i
										className="fas fa-trash  float-right"
										onClick={e => actions.deleteFavorite(value)}
									/>
								</li>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};
