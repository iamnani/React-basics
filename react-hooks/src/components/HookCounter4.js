import React, { useState } from "react";

function HookCounter4() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length, name: "Name " + Math.floor(Math.random() * 10) },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li>{item.id} - {item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounter4;
