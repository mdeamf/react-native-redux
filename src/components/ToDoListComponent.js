import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ToDoItem = ({ item }) => {
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
    console.log('state from useSelector', state);
    return state;
  });
  console.log('state from mappedState', mappedState);

  return (
    <>
      <FlatList
        data={mappedState.toDoList}
        renderItem={({ item }) => <ToDoItem item={item} />}
      />
    </>
  );
};
