import React from "react";
import ReactDOM from "react-dom";
import { CoctailList } from "./coctailList.jsx";
import { FinalCoctail } from "./finalCoctail.jsx";
import { App } from "./app.jsx";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import { RandomComp } from "./randomComp.jsx";

document.addEventListener("DOMContentLoaded", function() {
  console.log("dom");
  class Home extends React.Component {
    render() {
      return (
        <div className="classPadding">
          <h1>Strona główna</h1>
        </div>
      );
    }
  }
  class OneIngreadientDrinks extends React.Component {
    render() {
      return <App />;
    }
  }

  class RandomDrinkComponent extends React.Component {
    render() {
      return <RandomComp />;
    }
  }

  class NotFound extends React.Component {
    render() {
      return (
        <div>
          Brak!!! <Link to="/">wróc do Home</Link>
        </div>
      );
    }
  }

  class Navigation extends React.Component {
    render() {
      return (
        <div style={{ position: "fixed", width: "100%", height: "86px" }}>
          <h1
            className="fontRighteous"
            style={{
              backgroundColor: "#333333",
              textAlign: "center",
              color: "silver"
            }}
          >
            Make me a drink!
          </h1>
          <ul className="navList fontRopa ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/oneingridientdrink">Lista składników</Link>
            </li>
            <li>
              <Link to="/randomdrink">Losowy Drink</Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  class MainComponent extends React.Component {
    render() {
      return (
        <HashRouter>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/oneingridientdrink"
                component={OneIngreadientDrinks}
              />
              <Route path="/randomdrink" component={RandomDrinkComponent} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      );
    }
  }
  ReactDOM.render(
    <div>
      <MainComponent />
    </div>,
    document.getElementById("app")
  );
});
