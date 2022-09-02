import React from "react";
import CardArticele from "./CardArticele";
const styleContent = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop:"100px"
};

function List({ products }) {
  console.log(products);
  return (
    <div style={styleContent}>
      {products.map((elt, index) => (
        <CardArticele key={index} article={elt}/>
      ))}
    </div>
  );
}

export default List;
