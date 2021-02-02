import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {
  const [courseTodo, setCourseTodo] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const addtodoHandler = todoTitle => {
    setCourseTodo(currentTodo => [
      ...currentTodo,
      { id: Math.random().toString(), value: todoTitle, visibl:false}
    ]);
    setIsAddMode(false);
  };

  const removetodoHandler = todoId => {
    setCourseTodo(currentTodo => {
      return currentTodo.filter(todo => todo.id !== todoId);
    });
  };

  const canceltodoAdditionHandler = () => {
    setIsAddMode(false);
  };
  const doneHandler = todoId => {
    let updatedTodo=[];
    setCourseTodo(currentTodo => {
       updatedTodo = currentTodo.map(todo => {
          if (todo.id === todoId) {
            return { ...todo, visibl: !isDone};
          }
          return todo;
        });
        return updatedTodo;
    });
  };
  // const doneHandler= () => {
  //   setIsDone(!isDone);
  // };

  return (
    <View style={styles.screen}>
      <Button title="Add ToDo" onPress={() => setIsAddMode(true)} />
      <TodoInput
        visible={isAddMode}
        onAddtodo={addtodoHandler}
        onCancel={canceltodoAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseTodo}
        renderItem={itemData => (
          <TodoItem
            id={itemData.item.id}
            onDelete={removetodoHandler}
            title={itemData.item.value}
            onDone={doneHandler}
            strikeVisible={itemData.item.visibl}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
