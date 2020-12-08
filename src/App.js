import React from "react";
import "./styles.css";

var shoppingList = ["milk","eggs","flowers","bread"]
export default function App() {
  return (
    <div className="App">
      <h1>Print my shopping List</h1>
      <ul>
        {/*
        without javascript
        <li>{shoppingList[0]}</li>
        <li>{shoppingList[1]}</li>
        <li>{shoppingList[2]}</li>
        <li>{shoppingList[3]}</li>
      */}
      {shoppingList.map(function(item){
        return <li>{item}</li>
      })}
        </ul> 
      </div>
  );
}
