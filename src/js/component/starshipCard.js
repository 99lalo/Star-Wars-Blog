import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const StarshipCard = props => {
	const { store, actions } = useContext(Context);
	let heart = store.favorites.find((value, index) => {
		return value == props.starship.name;
	});
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
					Model: {props.starship.model} <br />
					Cost: {props.starship.cost_in_credits}
				</p>
				<div className="d-flex justify-content-between">
					<Link to={{ pathname: `/stardetails/${props.starship.name}`, state: props.starship }}>
						<span href="#" className="btn btn-outline-primary">
							Learn More!
						</span>
					</Link>
					<button
						href="#"
						className="btn btn-outline-danger"
						onClick={e =>
							heart == undefined
								? props.addFavorites(props.starship.name)
								: props.deleteFavorite(props.starship.name)
						}>
						<i className={heart == undefined ? "far fa-heart" : "fas fa-heart"} />
					</button>
				</div>
			</div>
		</div>
	);
};
StarshipCard.propTypes = {
	starship: PropTypes.object,
	addFavorites: PropTypes.func,
	deleteFavorite: PropTypes.func
};
