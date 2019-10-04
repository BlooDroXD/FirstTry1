import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TextInput,  TouchableOpacity  } from 'react-native';

export class Note extends PureComponent {
  handleDelete = (key) => {
    const { onDelete } = this.props;

    return onDelete(key)
  }
  handleChange = text => {
    const { onChange } = this.props;
    
    return onChange(text)
  }

  render () {
    const { onDelete, onChange, key, val } = this.props;

    return(
        <View key={key} style={styles.note}>
          edit ? (
          <TextInput />
          <TouchableOpacity onPress={this.onChange} style={styles.change}>
            <Text style={styles.noteText}>{val.date}</Text>
            <Text style={styles.noteText}>{val.note}</Text>
          </TouchableOpacity>
          ) : ( )
          <TouchableOpacity onPress={onDelete} style={styles.delete}>
            <Text style={styles.noteDeleteText}>-</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

    const styles = StyleSheet.create({
    change:{
      flex:3,
    },
    note:{
      position: 'relative',
      padding: 20,
      paddingRight: 100,
      borderBottomWidth: 2,
      borderBottomColor: '#03b1fc',
    },
    noteText:{
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderBottomColor: '#Fff',
    },
    delete: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '##46969c',
      padding: 10,
      top: 10,
      bottom: 10,
      right: 10,
    },

    noteDeleteText:{
      color:'white',
    },
  }
)
