import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight,Button,Alert } from 'react-native';

export default function App() {

  const handlePress =  ()=>console.log("clickeds");

  return (
    <SafeAreaView style={styles.container}>
        <Image source={require('./assets/icon.png')}/>
      <TouchableHighlight onPress={handlePress}>
        <Button title="login" onPress={() => Alert.alert("Senha Incorreta!","Caso tenha perdido sua senha, entre em contado com o administrador do sistema.",[{text:"yes", onPress: ()=> console.log("yes")},{text:"No"}])} ></Button>
      </TouchableHighlight>
   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
