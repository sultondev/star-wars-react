import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ErrorIndicator from '../error-indicator/error-indicator';
import './bootstrap.min.css';
import './_variables.sass';
import './app.sass';
import SwapiService from '../../services/swapi-service';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';
import PersonsPage from '../pages/persons-page';
import StarshipsPage from '../pages/starships-page';
import PlanetsPage from '../pages/planets-page';
import { StarshipDetails } from '../sw-components';

export default class App extends React.Component {
	swapi = new SwapiService();

	state = {
		hasError: false
	};

	componentDidCatch() {
		console.log('componentDidCatch()');
		this.setState({
			hasError: true
		});
	}

	onRenderPeopleList = ({ name, gender, birthYear }) => {
		return (
			<React.Fragment>
				<h5 className="item-list__item-name">{name}</h5>
				<span className="item-list__item-gender">({gender})</span>
				<span className="item-list__item-birthyear">{birthYear}</span>
			</React.Fragment>
		);
	};

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />;
		}

		const Welcome = () => {
			return (
				<div className="container">
					<h4>Welcome to StarDB API</h4>
				</div>
			);
		};

		return (
			<SwapiServiceProvider value={this.swapi}>
				<BrowserRouter>
					<div className="">
						<Header />
						<RandomPlanet updatePlanetInterval={10000} />
						<Route exact path="/" component={Welcome} />
						<Route path="/people" component={PersonsPage} />
						<Route exact path="/starships" component={StarshipsPage} />
						<Route path="/planets" component={PlanetsPage} />
						<Route
							path="/starships/:id"
							render={({ match }) => {
								console.log(match);
								const { id } = match.params;
								return (
									<div className="container d-flex container-bottom">
										<StarshipDetails itemId={id} />
									</div>
								);
							}}
						/>
					</div>
					{/* <PlanetsPage /> */}
				</BrowserRouter>
			</SwapiServiceProvider>
		);
	}
}
