import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-server/with-swapi-service"
const StarshipDetails = (props) => {
  return (
      <ItemDetails {...props}> 
          <Record field="model" label="Model"/>
          <Record field="costInCredits" label="Cost"/>
      </ItemDetails>
  )
}


const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getOneStarship,
    getImageUrl: swapiService.getStarshipImg,
  }
}

// const StarshipDetails = withSwapiService(Starship); 

// export default StarshipDetails;
export default withSwapiService(mapMethodsToProps)(StarshipDetails)
