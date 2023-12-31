interface Props {
  items: string[];
  heading:string;
}

import { useState } from "react";

function ListGroup({items, heading} : Props) {
  // Hook(Function that allows to get built in functions in react)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            //Looks at if the selected index value matches the index value. if it does then it does the list group and highlights(active) else it just does list group
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
