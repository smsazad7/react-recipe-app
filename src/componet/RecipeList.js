import React, { Component } from "react";
import Recip from "./Recip";

export default class RecipeList extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <>
        <div className="container my-5">
          {/* title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mt-3">
              <h1 className="text-slanted">recipe list</h1>
            </div>
          </div>
          {/* title end */}
          <div className="row">
            {recipes.map(recipe => (
              <Recip key={recipe.recipe_id} recipe={recipe} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
