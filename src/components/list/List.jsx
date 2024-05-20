import React from "react";
import "./list.scss";
import Card from "./../card/Card";
const List = ({ items }) => {
  return (
    <div className="list">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
