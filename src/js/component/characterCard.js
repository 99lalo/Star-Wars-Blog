//Create here the cards
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const CharacterCard = props => {
	return (
		<div className="card m-3 " style={{ width: "18rem" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.character.name}</h5>
				<p className="card-text">
					Gender:
					{props.character.gender} <br />
					Hair Color:
					{props.character.hair_color} <br />
					Eye-Color:
					{props.character.eye_color}
				</p>
				<div className="d-flex justify-content-between">
					<Link to={`/chardetails/${props.character.name}`}>
						<a href="#" className="btn btn-outline-primary">
							Learn More!
						</a>
					</Link>
					<a href="#" className="btn btn-outline-danger">
						Fav
					</a>
				</div>
			</div>
		</div>
	);
};
CharacterCard.propTypes = {
	character: PropTypes.object
};
