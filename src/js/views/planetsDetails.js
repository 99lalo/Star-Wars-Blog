import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsDetails = props => {
	return (
		<div className="container">
			<div className="d-flex">
				<img
					src="https://cdn.vox-cdn.com/thumbor/vg3R3bZvBaxxJmq7clMKs1gfP3w=/0x6:1000x673/1200x800/filters:focal(0x6:1000x673)/cdn.vox-cdn.com/imported_assets/1388389/death-star.jpg"
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
					<h3>Climate</h3> <br /> <h6>{props.location.state.climate}</h6>
				</div>
				<div className="detail">
					<h3>Diameter</h3> <br /> <h6>{props.location.state.diameter}</h6>
				</div>
				<div className="detail">
					<h3>Population</h3> <br /> <h6>{props.location.state.population}</h6>
				</div>
				<div className="detail">
					<h3>Terrain</h3> <br /> <h6>{props.location.state.terrain}</h6>
				</div>
				<div className="detail">
					<h3>Gravity</h3> <br /> <h6>{props.location.state.gravity}</h6>
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

PlanetsDetails.propTypes = {
	location: PropTypes.object
};
