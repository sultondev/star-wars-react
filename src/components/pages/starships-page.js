import React, { Component } from "react";
import Row from "../row/row";
import {StarshipList, StarshipDetails} from "../sw-components/"


export default class StarshipsPage extends Component {
    constructor() {
    super()
    this.state= {
      selectedItem: null
    }
  }

  onItemSelected(id) {
    this.setState({selectedItem: id})
  }

  render() {
    return (
      <Row left={<StarshipList  onItemSelected={(id)=>this.onItemSelected(id)}/>} right={<StarshipDetails itemId={this.state.selectedItem}/>}/>
    )
  }
} 