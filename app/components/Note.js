import React from 'react';
import { StyleSheet, Text, View,  TouchableOpacity  } from 'react-native';

export default class Note extends React.Component {
  render (){
    return(
        <View key={this.props.keyval} style={styles.note}>
            <Text style={styles.noteText}>{this.props.val.date}</Text>
            <Text style={styles.noteText}>{this.props.val.note}</Text>
            <TouchableOpacity onPress={this.props.delete}style={styles.delete}>
              <Text style={styles.noteDeleteText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.modify}style={styles.modify}>
              <Text style={styles.noteModifyText}>...</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
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
    modify: {
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
    noteModifyText:{
      color:'white',
    },
}
)