import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              DELETE
            </button>
            <button onClick={() => dispatch(updateTodo(todo.id, todo.text, !todo.completed))}>
              UPDATE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
