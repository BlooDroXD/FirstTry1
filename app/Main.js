import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity  } from 'react-native';
import { Note } from './components/Note';

export default class Main extends PureComponent {
  state = {
      noteArray: [],
      noteText: '',
      test: 1,
  }

  addNote = () => {
    const { noteArray, noteText } = this.state;
      if (noteText){
          const d = new Date();

          const newNote = {
            date: `${d.getFullYear()}/${(d.getMonth() +1)}/${d.getDate()}`,
            note: this.state.noteText
          };

          this.setState({
            noteArray: [
              ...noteArray,
              newNote,
            ],
            noteText: '',
          })
        }
  }
  deleteNote = (key) => {
    const { noteArray } = this.state;

    const newNoteArray = noteArray.filter(note => note.key !== key);
    this.setState({
      noteArray: newNoteArray
    });
  }

  renderNotes = () => this.state.noteArray.length && this.state.noteArray.map((val,key) => (<Note key={key} val={val}
      onDelete={this.deleteNote} />)
  )

  changeText = (text) => {
    this.setState({
      noteText: text
    })
  }


  render() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}> - ToDo - </Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                {this.renderNotes()}
            </ScrollView>
            <View style={styles.footer}>
                <TextInput style={styles.TextInput}
                  onChangeText={this.changeText}
                  value={this.state.noteText}
                  placeholder='Note'
                  placeholderTextColor='white'
                  underlineColorAndroid='transparent'>
                </TextInput>
                <TouchableOpacity onPress={this.addNote} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header :{
        backgroundColor: '#1C31EE',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#0519CE'
    },
    headerText:{
        color:'white',
        fontSize: 18,
        padding: 26,
    },
    scrollContainer:{
        flex:1,
        marginBottom: 100,
    },
    footer:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        regth: 0,
        zIndex: 10,
    },
    TextInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#5363F5',
        borderTopWidth: 2,
        borderTopColor: '#3D4FEB',
    },
    addButton:{
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#0016DB',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems:'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText:{
        color: '#fff',
        fontSize: 24,
    },
});
