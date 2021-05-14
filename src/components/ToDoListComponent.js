import React from 'react';
import { FlatList, View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_DO, REMOVE_TO_DO } from '../store/actions';

const LOG = '[TO DO LIST COMPONENT]';

const ToDoItem = ({ item }) => {
  console.log(LOG, 'list item', item);
  return (
    <View>
      <Text>ID: {item.id}</Text>
      <Text>Descrição: {item.descricao}</Text>
    </View>
  );
};

export const ToDoListComponent = () => {
  // Mapping the state from the Provider.
  const mappedState = useSelector((state) => {
    console.log(LOG, 'state from useSelector', state);
    return state;
  });

  // Mapping the dispatch function.
  const mappedDispatch = useDispatch();

  // Getting the ID from the last item in the list.
  const lastToDoId = mappedState.toDoList[mappedState.toDoList.length - 1].id;

  // Creating the new To Do item, if the user clicks "Add To Do".
  const newToDoId = lastToDoId + 1;
  const newToDo = {
    id: newToDoId,
    descricao: 'New To Do',
    key: newToDoId.toString(),
  };

  /** Add a new To Do. */
  const addToDo = () => {
    mappedDispatch({ type: ADD_TO_DO, toDo: newToDo });
  };

  /** Removes the last To Do of the list. */
  const removeToDo = () => {
    if (lastToDoId <= 1) {
      console.log(LOG, 'emptying the list is not possible');
    } else {
      mappedDispatch({
        type: REMOVE_TO_DO,
        toDoId: lastToDoId,
      });
    }
  };

  return (
    <>
      <FlatList
        data={mappedState.toDoList}
        renderItem={({ item }) => <ToDoItem item={item} />}
      />

      <Button title="Add To Do" onPress={() => addToDo()} />
      <Button title="Remove Last To Do" onPress={() => removeToDo()} />
    </>
  );
};
