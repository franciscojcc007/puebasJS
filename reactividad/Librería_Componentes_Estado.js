import { Component } from "./Component.js";

const d = document;

const app = new Component({
  el: "#todo-list",
  data: {
    todoList: []
  },
  template: function (props) {
    if (props.todoList.length < 1) {
      return `<p><em>Lista sin tareas por hacer.</em></p>`;
    }

    let todos = props.todoList.map(item => `<li>${item}</li>`).join("");

    return todos;
  }
});

d.addEventListener("DOMContentLoaded", app.render.bind(app));

// Estableciendo valores por defecto al State
app.setState({
  todoList: ["Tarea 1", "Tarea 2"]
});

d.addEventListener("submit", e => {
  if (!e.target.matches("#todo-form")) return false;
  e.preventDefault();

  const $item = d.getElementById("todo-item");
  if (!$item) return;

  // Actualizar el State de forma reactiva
  const lastState = app.getState();
  lastState.todoList.push($item.value);
  app.setState({ todoList: lastState.todoList });

  // Limpiar el input
  $item.value = "";
  $item.focus();
});


