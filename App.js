import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './componet/Header';
import TodoItem from './componet/TodoItem';
import AddItem from './componet/AddItem';

export default function App() {
  const [todos, settodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' }
  ])

  const DeleteItem = (key) => {
    settodos((preveTodo) => {
      return preveTodo.filter(t => t.key != key)
    })
  }
  const SubmitTodo = (text) => {
    settodos((preveTodo) => {
      return [
        { text: text, key: Math.random().toString() },
        ...preveTodo,
      ]
    })
  }
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={styles.content}>
        <AddItem SubmitTodo={SubmitTodo}/>
        <View style={styles.list}>
          <FlatList
            keyExtractor={(item) => item.key}
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} DeleteItem={DeleteItem} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
