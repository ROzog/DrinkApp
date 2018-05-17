import React from "react";
import ReactDOM from "react-dom";

class RandomComp extends React.Component {
  state = {
    zmiennaState: null
  };
  handleClick = event => {
    console.log("random drink clik");
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Błąd sieci!");
        }
      })
      .then(data => {
        this.setState({
          zmiennaState: data
        });
      })
      .catch(err => console.log(err, "error!"));
  };
  render() {
    let randomDrink = null;
    console.log("render randomComp");
    console.log(this.state.zmiennaState);
    if (this.state.zmiennaState !== null) {
      randomDrink = this.state.zmiennaState.drinks.map((el, i) => {
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
        // console.log(quantArr);
        // console.log(indArr);
        const indAndQuan = [];

        for (let i = 0; i < quantArr.length; i++) {
          const str = quantArr[i].trim();
          if (str !== "" && str !== " " && str !== null) {
            indAndQuan.push(
              <li>
                {indArr[i]}, {quantArr[i]}
              </li>
            );
          }
        }
        console.log("el.strDrink" + el.strDrink);
        return (
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <div
              style={{ padding: "20px" }}
              className="classFinaleDrink fontAlegreya"
            >
              <p>
                Drink Name: {el.strDrink} <br />
                Drink Category: {el.strAlcoholic}
              </p>{" "}
              <br />
              <h4>Drink recipe:</h4>
              <p>
                Indigiends: <ul style={{ listStyle: "none" }}>{indAndQuan}</ul>{" "}
                <br />
                Best Glass: {el.strGlass} <br />
                Instructions: {el.strInstructions}
              </p>
            </div>
            <div className="classFinaleDrink">
              <img
                style={{
                  height: "300px",
                  padding: "20px",
                  borderRadius: "10%",
                }}
                src={el.strDrinkThumb}
              />
            </div>
          </div>
        );
      });
    }
    //   this.setState({
    //     zmiennaState: data.drinks
    //   });

    return (
      <div className="classPadding gradient">
        <div>
          <h3
            className="fontRighteous"
            style={{
              textAlign: "center",
              cursor: "pointer",
              height: "50px",
              padding: "10px"
            }}
            onClick={this.handleClick}
          >
            Create random drink
          </h3>
          <div>{randomDrink}</div>
        </div>
      </div>
    );
  }
}

export { RandomComp };
