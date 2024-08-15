import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), text: "hey", edit: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // state = tells about the state, gives access to the values it contain.
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload, edit: false };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text, edit } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
        todo.edit = edit;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
