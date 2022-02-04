export default class SwapiService {
	_apiBase = 'https://swapi.dev/api';
	_imgBase = 'https://starwars-visualguide.com/assets/img';

	getResponse = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Couldn't fetch ${url}, received ${res.status}`);
		}

		const body = await res.json();
		return body;
	};

	getAllPersons = async () => {
		const res = await this.getResponse('/people/');
		return res.results.map(this._transformPerson);
	};

	getOnePerson = async (id) => {
		const person = await this.getResponse(`/people/${id}`);
		return this._transformPerson(person);
	};

	getAllStarships = async () => {
		const res = await this.getResponse('/starships/');
		return res.results.map(this._transformStarship);
	};

	getOneStarship = async (id) => {
		const starship = await this.getResponse(`/starships/${id}`);
		return this._transformStarship(starship);
	};

	getAllPlanets = async () => {
		const res = await this.getResponse('/planets/');
		return res.results.map(this._transformPlanet);
	};

	getOnePlanet = async (id) => {
		const planet = await this.getResponse(`/planets/${id}`);
		return this._transformPlanet(planet);
	};

	getPersonImg = ({ id }) => {
		if (id < 0 || id > 82 || id === null || id === undefined) {
			return `${this._imgBase}/big-placeholder.jpg`;
		} else {
			return `${this._imgBase}/characters/${id}.jpg`;
		}
	};

	getStarshipImg = ({ id }) => {
		switch (id) {
			case '0':
			case '1':
			case '2':
			case '37':
			case '3':
			case '17':
			case null:
			case undefined:
				return `${this._imgBase}/big-placeholder.jpg`;
			default:
				return `${this._imgBase}/starships/${id}.jpg`;
		}
	};

	getPlanetImg = ({ id }) => {
		if (id <= 0 || id === '1' || id > 60 || id === null || id === undefined) {
			return `${this._imgBase}/big-placeholder.jpg`;
		} else {
			return `${this._imgBase}/planets/${id}.jpg`;
		}
	};

	_extractId(item) {
		const idRegExp = /\/([0-9]*)\/$/;
		return item.url.match(idRegExp)[1];
	}

	_transformPerson = (person) => {
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color
		};
	};

	_transformPlanet = (planet) => {
		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			climate: planet.climate,
			terrain: planet.terrain,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter
		};
	};

	_transformStarship = (starship) => {
		return {
			id: this._extractId(starship),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.cost_in_credits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargo_capacity
		};
	};
}

// const newApi = new SwapiService();

// newApi.getAllPlanets()
// .then(planet=>{
//     console.log(planet)
// })
