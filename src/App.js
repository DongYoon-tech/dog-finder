import React from 'react'
import { Switch, Route, BrowserRouter, Redirect, Link } from 'react-router-dom'
import Nav from "./Nav"
import DogsList from "./DogsList"
import DogDetails from "./DogDetails"

import './App.css';
import duke from "./static/duke.jpg"
import perry from "./static/perry.jpg"
import tubby from "./static/tubby.jpg"
import whiskey from "./static/whiskey.jpg"

function App(props) {

  const dogInfo = props.dogs

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/dogs">
            <Nav dogs={dogInfo} />
            <DogsList dogInfo={dogInfo} />
          </Route>
          <Route exact path="/dogs/:name">
            <DogDetails dogInfo={dogInfo} />
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
