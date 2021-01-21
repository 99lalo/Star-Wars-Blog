import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { StarshipsCard } from "../component/starshipCard";
export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [starships, setStarships] = useState([]);
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
				console.log(responseAsJson);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	return (
		<div className="container-fluid mt-5">
			<div>
				<h1>Characters</h1>
				<div className="d-flex overflow-auto">
					{characters.map((value, index) => {
						return <CharacterCard key={index} character={value} />;
					})}
				</div>
			</div>
			<div>
				<h1>Planets</h1>
				<div className="d-flex overflow-auto">
					{planets.map((value, index) => {
						return <PlanetCard key={index} planet={value} />;
					})}
				</div>
			</div>
			<div>
				<h1>Starships</h1>
				<div className="d-flex overflow-auto">
					{starships.map((value, index) => {
						return <StarshipsCard key={index} starship={value} />;
					})}
				</div>
			</div>
		</div>
	);
};
