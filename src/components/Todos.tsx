import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <div>
      <ul className={classes.todos}>
        {props.items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
