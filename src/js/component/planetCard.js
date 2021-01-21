//Create here the cards
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const PlanetCard = props => {
	return (
		<div className="card m-3 bg-dark">
			<img
				className="card-img-top"
				src="https://atlas-content-cdn.pixelsquid.com/stock-images/death-star-do2Z7l0-600.jpg"
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
					<a href="#" className="btn btn-outline-danger">
						<i className="far fa-heart" />
					</a>
				</div>
			</div>
		</div>
	);
};
PlanetCard.propTypes = {
	planet: PropTypes.object
};