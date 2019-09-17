import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ОН ЁБАНЫЙ ВОЛШЕБНИК,  ГАРИ</Text>
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

const ToDoButtonAdd = ({onPress}) => (
  <Fab 
    direction = "up"
    containerStyle = {{}}
    style = {{backgroundColor: Collors.primary}}
    position = "bottomRight"
    onPress={onPress}
  >
    <Icon name = "add"/>>
  </Fab>
);
