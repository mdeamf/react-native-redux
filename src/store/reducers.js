import { ADD_TO_DO, REMOVE_TO_DO } from './actions';

const initialState = {
  toDoList: [{ id: 1, descricao: 'Meu primeiro To Do...' }],
};

export const toDoReducer = (state = initialState, action) => {
  // Load the current To Do list.
  let toDo = [...state.toDoList];

  // Checking which Action to execute.
  switch (action.type) {
    case ADD_TO_DO:
      // Adding the object to the array without reference (cloning via spread operator).
      toDo.push({ ...action.payload });

    case REMOVE_TO_DO:
      // Finding the To Do index.
      let index = toDo.findIndex(
        item => item.id === action.payload
      );

      // Removing the item from the array.
      toDo.splice(index, 1);
  }

  // Returning the current state and overwriting the changed property.
  return { ...state, todoList: todo };
};
