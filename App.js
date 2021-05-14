import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ToDoListComponent } from './src/components/ToDoListComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoListComponent />
    </View>
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
