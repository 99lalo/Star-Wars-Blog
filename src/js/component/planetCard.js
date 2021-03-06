import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const PlanetCard = props => {
	const { store, actions } = useContext(Context);
	let heart = store.favorites.find((value, index) => {
		return value == props.planet.name;
	});
	return (
		<div className="card m-3 bg-dark">
			<img
				className="card-img-top"
				src="https://cdn.vox-cdn.com/thumbor/vg3R3bZvBaxxJmq7clMKs1gfP3w=/0x6:1000x673/1200x800/filters:focal(0x6:1000x673)/cdn.vox-cdn.com/imported_assets/1388389/death-star.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.planet.name}</h5>
				<p className="card-text">
					Terrain: {props.planet.terrain} <br />
					Population: {props.planet.population}
				</p>
				<div className="d-flex justify-content-between">
					<Link to={{ pathname: `/pladetails/${props.planet.name}`, state: props.planet }}>
						<span href="#" className="btn btn-outline-primary">
							Learn More!
						</span>
					</Link>
					<button
						href="#"
						className="btn btn-outline-danger"
						onClick={e =>
							heart == undefined
								? props.addFavorites(props.planet.name)
								: props.deleteFavorite(props.planet.name)
						}>
						<i className={heart == undefined ? "far fa-heart" : "fas fa-heart"} />
					</button>
				</div>
			</div>
		</div>
	);
};
PlanetCard.propTypes = {
	planet: PropTypes.object,
	addFavorites: PropTypes.func,
	deleteFavorite: PropTypes.func
};
