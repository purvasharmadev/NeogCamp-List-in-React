import React from "react";
import "./styles.css";

var shoppingList = ["milk", "eggs", "flowers", "bread"];
export default function App() {
  function getBG(index) {
    if (index % 2 === 0) {
      return "white";
    }
    return "gray";
  }

  function getPad(index) {
    if (index % 2 === 0) {
      return "0rem";
    }
    return "1rem";
  }
  return (
    <div className="App">
      <h1>Print my shopping List</h1>
      <ul>
        {/*
        with javascript
        <li>{shoppingList[0]}</li>
        <li>{shoppingList[1]}</li>
        <li>{shoppingList[2]}</li>
        <li>{shoppingList[3]}</li>
      */}
        {shoppingList.map(function (item, index) {
          //  Conditional JSX
          return (
            <li
              style={{ backgroundColor: getBG(index), padding: getPad(index) }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
