import { ADD_TO_DO, REMOVE_TO_DO } from './actions';

const LOG = '[TO DO REDUCER]';

const initialState = {
  toDoList: [{ id: 1, descricao: 'My first To Do...', key: '1' }],
};

export const toDoReducer = (state = initialState, action) => {
  console.log(LOG, state, action);
  // Load the current To Do list.
  let toDo = [...state.toDoList];
  console.log(LOG, 'toDo before', toDo);

  // Checking which Action to execute.
  switch (action.type) {
    case ADD_TO_DO:
      // Adding the object to the array.
      toDo.push(action.toDo);
      break;

    case REMOVE_TO_DO:
      // Finding the To Do index.
      let index = toDo.findIndex((item) => item.id === action.toDoId);

      // Removing the item from the array.
      toDo.splice(index, 1);
      break;
  }

  console.log(LOG, 'toDo after', toDo);

  // Returning the current state and overwriting the changed property.
  return { ...state, toDoList: toDo };
};
