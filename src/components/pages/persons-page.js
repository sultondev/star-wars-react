import React, { Component } from "react";
import Row from "../row/row";
import {PersonList, PersonDetails} from "../sw-components/"


export default class PersonsPage extends Component {
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
      <Row left={<PersonList  onItemSelected= {(id) => this.onItemSelected(id)}/>} right={<PersonDetails itemId={this.state.selectedItem} />}/>
    )
  }
} 