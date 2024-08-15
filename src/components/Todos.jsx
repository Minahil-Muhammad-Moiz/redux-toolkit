import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import EditTodo from "./EditTodo";

const Todos = () => {
  // const [edit, setEdit] = useState(false)
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
            <button
              onClick={() =>
                dispatch(updateTodo({ id: todo.id, text: todo.text, edit: true }))
              }
            >
              UPDATE
            </button>
            {todo.edit && <EditTodo id={todo.id}/>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
