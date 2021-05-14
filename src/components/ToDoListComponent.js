import React from 'react';
import { FlatList, View } from 'react-native';

const ToDoItem = (item) => {
  return (
    <View>
      <Text>ID: {item.id}</Text>
      <Text>Descrição: {item.descricao}</Text>
    </View>
  );
};

export const ToDoListComponent = () => {
  return (
    <>
      <FlatList data={[]} renderItem={({ item }) => <ToDoItem item={item} />} />
    </>
  );
};
