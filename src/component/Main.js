import React, { useEffect, useState } from "react";
import Iteamlist from "./itemlist";
import Iteamfrom from "./item-form";
import Footer from "./footer";
export default function Main() {
  var [Todolist, setTodolist] = useState(() => {
    var todolist = localStorage.getItem("Items");
    if (todolist == null) return [];
    return JSON.parse(todolist);
  });

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(Todolist));
  }, [Todolist]);
  return (
    <>
      <Iteamfrom setTodolist={setTodolist} />
      <h1 className="header">todolist</h1>
      <Iteamlist setTodolist={setTodolist} Todolist={Todolist} />
      <Footer />
    </>
  );
}
