import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight,Button,Alert, Platform } from 'react-native';
import Game from './src/components/Game'
class App extends React.Component{

  // const handlePress =  ()=>console.log("clickeds");
render(){

  return (
    // <SafeAreaView style={styles.container}>
    //     <Image source={require('./assets/icon.png')}/>
    //   <TouchableHighlight onPress={handlePress}>
    //     <Button title="login" onPress={() => Alert.alert("Senha Incorreta!","Caso tenha perdido sua senha, entre em contado com o administrador do sistema.",[{text:"yes", onPress: ()=> console.log("yes")},{text:"No"}])} ></Button>
    //   </TouchableHighlight>
    //   <View style={{
      //     backgroundColor: 'red',
      //     width: "50%",
      //     height:70
      //   }}>
      //     </View>  
      // </SafeAreaView>
      
      <Game />
      
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android"? 20 : 0
  },
});

export default App;