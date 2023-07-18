import React, { useState } from "react";

export default function Iteamfrom({ setTodolist }) {
  var [Item, setItem] = useState("");
  function add(e) {
    e.preventDefault();
    setTodolist((currenttodo) => {
      return [
        ...currenttodo,
        { id: crypto.randomUUID(), titel: Item, completed: false }
      ];
    });

    setItem("");
  }

  return (
    <form onSubmit={add} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">new item</label>
        <input
          value={Item}
          onChange={(e) => setItem(e.target.value)}
          id="item"
          type="text"
        ></input>
        <button className="btn">add</button>
      </div>
    </form>
  );
}
