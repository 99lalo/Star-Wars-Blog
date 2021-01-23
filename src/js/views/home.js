import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { StarshipCard } from "../component/starshipCard";
export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid mt-5">
			<div>
				<h1>Characters</h1>
				<div className="scroller">
					{store.characters.map((value, index) => {
						return (
							<CharacterCard
								key={index}
								character={value}
								addFavorites={actions.addFavorite}
								deleteFavorite={actions.deleteFavorite}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<h1>Planets</h1>
				<div className="scroller">
					{store.planets.map((value, index) => {
						return (
							<PlanetCard
								key={index}
								planet={value}
								addFavorites={actions.addFavorite}
								deleteFavorite={actions.deleteFavorite}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<h1>Starships</h1>
				<div className="scroller">
					{store.starships.map((value, index) => {
						return (
							<StarshipCard
								key={index}
								starship={value}
								addFavorites={actions.addFavorite}
								deleteFavorite={actions.deleteFavorite}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
