import React from "react";
import Fruit from "./Fruit";

function Fruits() {
  let fruits = [
    { name: "Apple", price: 100 },
    { name: "Banana", price: 50 },
    { name: "Grapes", price: 150 },
    { name: "Mango", price: 200}
  ];
  return (
    <div>
        {fruits.map((fruit) => (
            <div>
                {/* <li key={fruit.name}>{fruit.name} - {fruit.price}</li> */}
                <Fruit name={fruit.name} price={fruit.price} />
            </div>
        ))}
    </div>
  )
}

export default Fruits;
