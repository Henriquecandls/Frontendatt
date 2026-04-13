import { useState, type MouseEvent } from "react";

interface List {
  title: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroupWithProps(props: List) {
  return (
    <>
      <h1>{props.title}</h1>
      <ul>
        {props.items.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              props.onSelectItem(item);
            }}
          >
            {props.items[index]}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroupWithProps;
