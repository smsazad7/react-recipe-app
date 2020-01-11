import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingelRecipe from "./pages/SingelRecipe";
import Default from "./pages/Default";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navber from "./componet/Navber";

export default class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navber/>
          <Switch className="container">
            <Route path="/" exact component={Home}/>
            <Route path="/recipes" exact component={Recipes}/>
            <Route path="/recipe:id" component={SingelRecipe}/>
            <Route component={Default}/>
          </Switch>
        </main>
      </Router>
    );
  }
}
