import React, { Component } from "react";
import Header from "../componet/Header";
import {Link} from 'react-router-dom'

export default class Default extends Component {
  render() {
    return (
      <Header title="404" styleClass="default-hero">
        <h3 className="text-uppercase text-light">
          sorry you have wrong place
        </h3>
        <Link to="/" className="text-uppercase btn btn-secondary btn-lg mt-3">
          return home
        </Link>
      </Header>
    );
  }
}
