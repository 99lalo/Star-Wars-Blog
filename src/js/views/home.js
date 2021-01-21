import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { StarshipCard } from "../component/starshipCard";
export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [starship, setStarship] = useState([]);
	useEffect(() => {
		fetch(`https://swapi.dev/api/people/`)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				setCharacters(responseAsJson.results);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
		fetch(`https://swapi.dev/api/planets/`)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				setPlanets(responseAsJson.results);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
		fetch(`https://swapi.dev/api/starships/`)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				setStarship(responseAsJson.results);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	return (
		<div className="container-fluid mt-5">
			<div>
				<h1>Characters</h1>
				<div className="scroller">
					{characters.map((value, index) => {
						return <CharacterCard key={index} character={value} />;
					})}
				</div>
			</div>
			<div>
				<h1>Planets</h1>
				<div className="scroller">
					{planets.map((value, index) => {
						return <PlanetCard key={index} planet={value} />;
					})}
				</div>
			</div>
			<div>
				<h1>Starships</h1>
				<div className="scroller">
					{starship.map((value, index) => {
						return <StarshipCard key={index} starship={value} />;
					})}
				</div>
			</div>
		</div>
	);
};
