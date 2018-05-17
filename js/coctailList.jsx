import React from "react";
import ReactDOM from "react-dom";
import { FinalCoctail } from "./finalCoctail.jsx";

class CoctailList extends React.Component {
  handleClickDrinkRecipe = event => {
    let drinkRecipeId = event.currentTarget.dataset.id;
    // console.log(drinkRecipeId);
    // console.log(event.target.innerText);
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkRecipeId}`
    )
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Błąd sieci!");
        }
      })
      .then(data => {
        console.log(data);
        this.props.setFinaleDrink(data);
      })

      .catch(err => console.log(err, "error!"));
  };

  render() {
    if (this.props.drinksFromData === null) {
      return null;
    }
    // console.log(this.props.drinksFromData);
    let drinksList = this.props.drinksFromData.drinks.map(el => {
      //   return console.log(el.strDrink);
      return (
        <div
          key={el.idDrink}
          style={{
            width: "100px",
            height: "100px",
            backgroundImage: `url(${el.strDrinkThumb})`,
            backgroundSize: "contain",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
          }}
          className="floatLeft imageMargin "
          data-id={el.idDrink}
          onClick={this.handleClickDrinkRecipe}
        >
          <p
            style={{
              padding: "0",
              margin: "0",
              display: "flex",
              width: "auto",
              justifyContent: "center"
              // alignItems: "center",
            }}
          >
            <span className="spanCoctailList " style={{ textAlign: "center" }}>
              {el.strDrink}
            </span>
          </p>
          {/* <img className="width" src={el.strDrinkThumb} /> */}
        </div>
      );
    });
    return (
      <div>
        <FinalCoctail finalDrink={this.props.finaleDrink} />
        <div>{drinksList}</div>
      </div>
    );
  }
}

export { CoctailList };
