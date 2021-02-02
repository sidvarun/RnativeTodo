import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const TodoItem = props => {
  
  // const doneHandler = ()=>{
  //        props.onDone()

  //    };
  
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
      <View style={styles.listItem}>
        <Text style={props.strikeVisible?{ textDecorationLine: 'line-through', color:'red'}:{color:'blue'}}>{props.title}</Text>

        <Button title="Mark as Done"  onPress={props.onDone.bind(this, props.id)} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    
    borderColor: 'black',
    borderWidth: 1
  },
  strike:{
     color: 'red'
  }
});

export default TodoItem;
