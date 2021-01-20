//Create here the cards
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
export const PlanetCard = props => {
	return (
		<div className="card m-3" style={{ width: "18rem" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.planet.name}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<div className="d-flex justify-content-between">
					<a href="#" className="btn btn-outline-primary">
						Learn More!
					</a>
					<a href="#" className="btn btn-outline-danger">
						Fav
					</a>
				</div>
			</div>
		</div>
	);
};
PlanetCard.propTypes = {
	planet: PropTypes.object
};
