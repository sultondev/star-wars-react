import React from "react";
import { withData } from "../hoc-server/with-data";
import ListItem from "../list-item/list-item";
import { withSwapiService } from "../hoc-server/with-swapi-service";
import { withChildFunction } from "../hoc-server/with-child-function";
import { compose } from "../hoc-server/compose";

const renderPerson = ({
    name,
    gender,
    birthYear,
}) => {
    return (
        <React.Fragment>
            <h5 className="item-list__item-name">
                {name}
            </h5>
            <span className="item-list__item-gender">
                ({gender})
            </span>
            <span className="item-list__item-birthyear">
                {birthYear}
            </span>
        </React.Fragment>
    );
};

const renderPlanet = ({
    name,
    population,
    climate,
}) => {
    return (
        <React.Fragment>
            <h5 className="item-list__item-name">
                {name}
            </h5>
            <span className="item-list__item-gender">
                ({population})
            </span>
            <span className="item-list__item-birthyear">
                {climate}
            </span>
        </React.Fragment>
    );
};

const renderStarship = ({
    name,
    model,
    costInCredits,
}) => {
    return (
        <React.Fragment>
            <h5 className="item-list__item-name">
                {name}
            </h5>
            <span className="item-list__item-gender">
                ({model})
            </span>
            <span className="item-list__item-birthyear">
                {
                    costInCredits
                }
            </span>
        </React.Fragment>
    );
};

const mapPersonMethodsToProps =
    (swapiService) => {
        return {
            getData:
                swapiService.getAllPersons,
        };
    };

const mapStarshipMethodsToProps =
    (swapiService) => {
        return {
            getData:
                swapiService.getAllStarships,
        };
    };
const mapPlanetMethodsToProps =
    (swapiService) => {
        return {
            getData:
                swapiService.getAllPlanets,
        };
    };

const PersonList = compose(
    withSwapiService(
        mapPersonMethodsToProps
    ),
    withData,
    withChildFunction(
        renderPerson
    )
)(ListItem);

const StarshipList = compose(
    withSwapiService(
        mapStarshipMethodsToProps
    ),
    withData,
    withChildFunction(
        renderStarship
    )
)(ListItem);
const PlanetList = compose(
    withSwapiService(
        mapPlanetMethodsToProps
    ),
    withData,
    withChildFunction(
        renderPlanet
    )
)(ListItem);

export {
    PersonList,
    StarshipList,
    PlanetList,
};
