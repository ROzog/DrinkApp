import React from "react";
import ReactDOM from "react-dom";
import { CoctailList } from "./coctailList.jsx";

class FinalCoctail extends React.Component {
  render() {
    if (this.props.finalDrink === null) {
      return null;
    }
    console.log("finalcoctail" + this.props.finalDrink);

    const finalDrinkBlock = this.props.finalDrink.drinks.map((el, i) => {
      const indArr = [];
      for (let i = 1; i < 16; i++) {
        const name = `strIngredient${i}`;
        if (el[name]) {
          indArr.push(el[name]);
        }
      }
      const quantArr = [];
      for (let i = 1; i < 16; i++) {
        const nameQua = `strMeasure${i}`;
        if (el[nameQua]) {
          quantArr.push(el[nameQua]);
        }
      }
      console.log(quantArr);
      console.log(indArr);
      const indAndQuan = [];

      for (let i = 0; i < quantArr.length; i++) {
        const str = quantArr[i].trim();
        if (str !== "" && str !== " " && str !== null) {
          indAndQuan.push(
            <li key={i}>
              {indArr[i]}, {quantArr[i]}
            </li>
          );
        }
      }
      return (
        <div
          key={i}
          style={{
            display: "flex",

            backgroundColor: "black",
            padding: "10px",
            width: "100%"
          }}
        >
          <div
            className="classFinaleDrink  drinkImage colorWhite fontAlegreya"
            style={{ padding: "10px", minHeight: "300px", width: "80vw" }}
          >
            <p>
              Drink Name: {el.strDrink} <br />
              Drink Category: {el.strAlcoholic}
            </p>
            <h4>Drink recipe:</h4> <br />
            <div>
              Ingredients: <ul style={{ listStyle: "none" }}>{indAndQuan}</ul>{" "}
              <br />
              Best Glass: {el.strGlass} <br />
              Instructions: {el.strInstructions}
            </div>
          </div>
          <div className="classFinaleDrink">
            <img
              style={{ height: "300px", paddingLeft: "30px" }}
              src={el.strDrinkThumb}
            />
          </div>
        </div>
      );
    });

    return (
      <div>
        <div>{finalDrinkBlock}</div>
      </div>
    );
  }
}

export { FinalCoctail };
