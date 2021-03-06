import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight,Button,Alert, Platform } from 'react-native';
class Game extends React.Component {

  target = 10+ Math.floor(40*Math.random())   

    render(){

        
        return (
            <View style = { styles.container}>
                <Text style ={styles.target}>{this.target}</Text>
            </View>
       );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
   
    paddingTop: 50
  },target:{
    fontSize:40,
    backgroundColor:"#aaa",
    marginHorizontal:50,
    textAlign:"center"
  }
});

export default Game;