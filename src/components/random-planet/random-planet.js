import React from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import propTypes from 'prop-types';

export default class RandomPlanet extends React.Component {
	static defaultProps = {
		updatePlanetInterval: 10000
	};

	static propTypes = propTypes.number;

	newSwapi = new SwapiService();

	state = {
		planet: {},
		loading: true,
		error: false
	};

	onError = (err) => {
		this.setState({
			error: true,
			loading: false
		});
	};

	componentDidMount() {
		const { updatePlanetInterval } = this.props;
		this.updateRandomPlanet();
		this.interval = setInterval(() => {
			this.setState({
				loading: true
			});
			this.updateRandomPlanet();
		}, updatePlanetInterval);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	updateRandomPlanet() {
		const id = Math.floor(Math.random() * 25) + 2;
		this.newSwapi
			.getOnePlanet(id)
			.then((planet) => {
				this.setState({
					planet,
					loading: false
				});
			})
			.catch(this.onError);
	}

	render() {
		// console.log("Here we go again render")
		const { planet, loading, error } = this.state;

		const hasData = !(loading || error);

		const errorMessage = error ? <ErrorIndicator /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = hasData ? <PlanetView planet={planet} /> : null;

		return (
			<section className="random container">
				<div className="random-wrapper d-flex">
					{errorMessage}
					{spinner}
					{content}
				</div>
			</section>
		);
	}
}

const PlanetView = ({ planet }) => {
	const img = (id) => {
		if (id === 1 || id > 19 || id === null || id === undefined) {
			return 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
		} else {
			return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
		}
	};
	const { id, name, population, rotationPeriod, diameter } = planet;

	return (
		<React.Fragment>
			<img src={img(id)} alt="Planet img" className="random-planet__img" />
			<ul className="random-list d-flex">
				<li className="random-list__title">
					<h2 className="random-list__title-name">{name}</h2>
				</li>
				<li className="random-list__item">
					<h2 className="random-list__item-header">Population</h2>
					<p className="random-list__item-subheader">{population}</p>
				</li>
				<li className="random-list__item">
					<h2 className="random-list__item-header">Rotation Period</h2>
					<p className="random-list__item-subheader">{rotationPeriod}</p>
				</li>
				<li className="random-list__item">
					<h2 className="random-list__item-header">Diameter</h2>
					<p className="random-list__item-subheader">{diameter}</p>
				</li>
			</ul>
		</React.Fragment>
	);
};
