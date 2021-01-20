import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([{ name: "Death Star" }, { name: "The Republic" }]);
	useEffect(() => {
		let promises = [];
		for (let index = 1; index <= 10; index++) {
			fetch(`https://www.swapi.tech/api/people/${index}`)
				.then(function(response) {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					// Read the response as json.
					return response.json();
				})
				.then(function(responseAsJson) {
					characters.push(responseAsJson.result);
				})
				.catch(function(error) {
					console.log("Looks like there was a problem: \n", error);
				});
		}
		console.log(characters);
	}, []);

	return (
		<div className="container-fluid mt-5">
			<div>
				<h1>Characters</h1>
				<div className="d-flex">
					{characters.map((value, index) => {
						console.log(value);
						return <CharacterCard key={index} character={value} />;
					})}
				</div>
			</div>
			<div>
				<h1>Planets</h1>
				<div className="d-flex">
					{planets.map((value, index) => {
						return <PlanetCard key={index} planet={value} />;
					})}
				</div>
				<div />
			</div>
		</div>
	);
};
