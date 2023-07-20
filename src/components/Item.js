import React,{useState} from "react";

function Item({ name, category }) {

  const [item, setInCart] = useState(true)
  function inCart(){
    setInCart(!item)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={inCart}>{item ? "Add to Cart": "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
