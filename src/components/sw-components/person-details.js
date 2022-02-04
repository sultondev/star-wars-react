import React from "react";
import { withSwapiService } from "../hoc-server/with-swapi-service";
import ItemDetails, { Record } from "../item-details/item-details";

const PersonDetails = (props) => {
  return(
    <ItemDetails {...props}> 
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color"/>
    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getOnePerson,
    getImageUrl: swapiService.getPersonImg,
  }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails)
