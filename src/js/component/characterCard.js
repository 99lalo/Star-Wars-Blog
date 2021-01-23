//Create here the cards
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const CharacterCard = props => {
	const { store, actions } = useContext(Context);
	let heart = store.favorites.find((value, index) => {
		return value == props.character.name;
	});
	return (
		<div className="card m-3 bg-dark">
			<img
				className="card-img-top"
				src="https://cdn.pixabay.com/photo/2016/03/27/07/26/darth-vader-1282288_960_720.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.character.name}</h5>
				<p className="card-text">
					Gender: {props.character.gender} <br />
					Hair Color: {props.character.hair_color} <br />
					Eye-Color: {props.character.eye_color}
				</p>
				<div className="d-flex justify-content-between">
					<Link to={{ pathname: `/chardetails/${props.character.name}`, state: props.character }}>
						<button href="#" className="btn btn-outline-primary">
							Learn More!
						</button>
					</Link>
					<button
						href="#"
						className="btn btn-outline-danger"
						onClick={e =>
							heart == undefined
								? props.addFavorites(props.character.name)
								: props.deleteFavorite(props.character.name)
						}>
						<i className={heart == undefined ? "far fa-heart" : "fas fa-heart"} />
					</button>
				</div>
			</div>
		</div>
	);
};
CharacterCard.propTypes = {
	character: PropTypes.object,
	addFavorites: PropTypes.func,
	deleteFavorite: PropTypes.func
};
