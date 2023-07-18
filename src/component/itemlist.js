import React from "react";

export default function itemlist({ setTodolist, Todolist }) {
  function togelcompleted(id, completed) {
    setTodolist((currenttodo) => {
      return currenttodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function removetodo(id) {
    setTodolist((currenttodo) => currenttodo.filter((todo) => todo.id !== id));
    console.log("das");
  }
  return (
    <ul className="list">
      {Todolist.lenght === 0 && "das"}
      {Todolist.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => {
                  return togelcompleted(todo.id, e.target.checked);
                }}
              ></input>
              {todo.titel}
              <button
                onClick={(e) => {
                  removetodo(todo.id);
                }}
                className="btn btn-danger"
              >
                delete
              </button>
            </label>
          </li>
        );
      })}
    </ul>
  );
}
