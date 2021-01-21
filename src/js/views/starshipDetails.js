import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarshipDetails = props => {
	console.log(props);

	return (
		<div className="container">
			<div className="d-flex">
				<img
					src="https://cdn.pixabay.com/photo/2015/12/11/22/25/star-wars-1088872_960_720.jpg"
					alt="Card image cap"
					className="detailsImage m-3"
				/>
				<div>
					<h1>{props.location.state.name}</h1>
					<h4>
						Nunc luctus viverra enim, non ultrices nulla laoreet porta. Quisque lacinia et mi sed blandit.
						Nulla molestie felis in placerat condimentum. Proin leo felis, fringilla quis pellentesque ac,
						porta vitae arcu. Nulla facilisi. Vivamus et nisi at mi efficitur semper eget in erat. Integer
						mauris velit, iaculis sed odio sed, tempor dictum orci.
					</h4>
				</div>
			</div>
			<hr />
			<div className="d-flex  justify-content-between">
				<div className="detail">
					<h3>Cargo Capacity</h3> <br /> <h6>{props.location.state.cargo_capacity}</h6>
				</div>
				<div className="detail">
					<h3>Cost in Credits</h3> <br /> <h6>{props.location.state.cost_in_credits}</h6>
				</div>
				<div className="detail">
					<h3>Length</h3> <br /> <h6>{props.location.state.length}</h6>
				</div>
				<div className="detail">
					<h3>Manufacturer</h3> <br /> <h6>{props.location.state.manufacturer}</h6>
				</div>
				<div className="detail">
					<h3>Model</h3> <br /> <h6>{props.location.state.model}</h6>
				</div>
			</div>
			<br />
			<Link to="/">
				<span className="btn btn-dark btn-lg float-right" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

StarshipDetails.propTypes = {
	location: PropTypes.object
};
