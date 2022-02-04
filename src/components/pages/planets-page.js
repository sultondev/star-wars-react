import React, { Component } from "react";
import Row from "../row/row";
import {PlanetList, PlanetDetails} from "../sw-components/"


export default class PlanetsPage extends Component {
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
      <Row left={<PlanetList onItemSelected={(id) => this.onItemSelected(id)} />} right={<PlanetDetails  itemId={this.state.selectedItem}/>}/>
    )
  }
} 