import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';


const YourApp = () => {
  const [text, setText] = useState('');
  const [text2, setText2 ] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
         <Text style={styles.txt}>
        Calculadora
      </Text>
      </View>

      <View style={styles.body}>

            <Text style={styles.numero1}>
              Digite o primeiro número: {text}
            </Text>

        <TextInput
          style={styles.campo}
          placeholder="First Number" 
          onChangeText={newText => setText(parseFloat(newText))}
          deafultValue={text}
          keyboardType="numeric"
          />



               <Text style={styles.numero2}>
              Digite o segundo número: {text2}
            </Text>

            <TextInput
          style={styles.campo}
          placeholder="SecondNumber"
          onChangeText={newText => setText2(parseFloat(newText))}
          deafultValue={text2}
          keyboardType="numeric"
           />
      </View>

      <View style={styles.feet}>
      <Text style={styles.txt2}>
       🖩resultado: {text} + {text2} = {text + text2} {'\n'}
       {text} - {text2} = {text-text2} {'\n'}
       {text} * {text2} = {text*text2} {'\n'}
       {text} / {text2} = {text/text2} {'\n'}
      </Text>
      </View>

      

     
    </View> 


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    //alignItems: "center",
    backgroundColor: "lightblue",
  },

  menu: {
    flex: 1,
    backgroundColor: "#404040",
  },

  body: {
    flex: 5,
    backgroundColor: "#202020",
    alignItems: "center",
    
  },

  numero1: {
    color: "white",
    fontFamily: "monospace",
    justifyContent: "center",
    marginTop: "200px",

  },

  numero2: {
    color: "white",
    fontFamily: "monospace",
    justifyContent: "center",
    marginTop: "5px",

  },

  feet: {
    flex: 1,
    backgroundColor: "#404040",
  },

  txt: {
    color: "white",
    fontFamily: "monospace",
    fontSize: "40px",
    alignSelf: "center",
    paddingTop: "25px",
  },

txt2: {
    color: "white",
    fontFamily: "monospace",
    fontSize: "20px",
    alignSelf: "center",
    paddingTop: "25px",
  },

  campo: {
    height: "40px",
    borderColor: "#404040",
    color: "white",
  },

  
});

export default YourApp;