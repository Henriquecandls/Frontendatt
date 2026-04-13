import { useState, type MouseEvent } from "react";

const List = [
  { id: 1, description: "Item 1" },
  { id: 2, description: "Item 2" },
  { id: 3, description: "Item 3" },
  { id: 4, description: "Item 4" },
  { id: 5, description: "Item 5" },
];

//let selectedIndex = -1;

//Uncomment the line below to test the empty list scenario
//const List = [];

//Method 1: Using a function to check if the list is empty
function checkListEmpty() {
  return List.length === 0 ? "Lista vazia" : null;
}

//Method 2: Using a function in compact form
const isListEmpty = () => (List.length === 0 ? "Lista vazia" : null);

//Method 3: Using a variable to store the message
const messageEmpty = List.length === 0 ? "Lista vazia" : null;

//Method 4: using a variable with logical and and operator
const messageEmptyAnd = List.length === 0 && true;

//event handler
const handleClick = (event: MouseEvent) => {
  console.log(event);
};

function ListGroup() {
  //state hook
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      {messageEmpty ? (
        <div className="alert alert-warning" role="alert">
          Lista vazia
        </div>
      ) : (
        <h1>Lista de Itens</h1>
      )}

      <ul className="list-group">
        {List.map((item, index) => (
          <li
            key={index}
            className={
              index === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            //onClick={() => (selectedIndex = index)}
            onClick={() => setSelectedItem(index)}
          >
            {item.description}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
