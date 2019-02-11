import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  componentDidMount(){
    console.log("before")
   //debugger
    console.log("after")
  }
  render() {  //console.log("before")
    return (
      <View style={styles.container}>
        <Text>Hello world!!!</Text>
        <Text>Welcome to the world of react native!</Text>
        <Text>responce test</Text>

      </View>
    );
  //  console.log("hello!")
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
