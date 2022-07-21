import React, { useState } from "react";

function Item({ name, category }) {
  
  const [isInCart, setIsInCart] = useState(false);
  const cartClass = isInCart ? "in-cart" : ""

  function handleClick(){
    setIsInCart((isInCart => !isInCart))
  }
  
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
