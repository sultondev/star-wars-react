import React from "react"
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-server/with-swapi-service";

const PlanetDetails = (props) => {
  return(
    <ItemDetails {...props}> 
        <Record field="population" label="Population"/>
        <Record field="climate" label="Climate"/>
        <Record field="rotationPeriod" label="Rotation Period"/>
    </ItemDetails>
  )
}


const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getOnePlanet,
    getImageUrl: swapiService.getPlanetImg,
  }
}

// const PlanetDetails = withSwapiService(Planet);

// export default PlanetDetails;
// export {PlanetDetails};
export default withSwapiService(mapMethodsToProps)(PlanetDetails);
