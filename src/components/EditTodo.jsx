import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../features/todo/todoSlice";

const EditTodo = ({ id }) => {
  const [newText, setNewText] = useState();
  const dispatch = useDispatch();

  const todo = useSelector((state) =>
    state.todos.find((todo) => todo.id === id)
  );

  return (
    <div>
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch(updateTodo({ id: todo.id, text: newText, edit: false }))
        }
      >
        Done
      </button>
    </div>
  );
};

export default EditTodo;
