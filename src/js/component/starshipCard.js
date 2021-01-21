//Create here the cards
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const StarshipCard = props => {
	return (
		<div className="card m-3 bg-dark">
			<img
				className="card-img-top"
				src="https://cdn.pixabay.com/photo/2015/12/11/22/25/star-wars-1088872_960_720.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.starship.name}</h5>
				<p className="card-text">
					Model:
					{props.starship.model} <br />
					Cost:
					{props.starship.cost_in_credits}
				</p>
				<div className="d-flex justify-content-between">
					<Link to={{ pathname: `/stardetails/${props.starship.name}`, state: props.starship }}>
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
StarshipCard.propTypes = {
	starship: PropTypes.object
};
