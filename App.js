import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet, View } from 'react-native';
import { ToDoListComponent } from './src/components/ToDoListComponent';
import { toDoReducer } from './src/store/reducers';

const store = createStore(toDoReducer);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ToDoListComponent />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
