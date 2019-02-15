import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'



export default class App extends React.Component {
  componentDidMount(){
    console.log("before")
   //debugger
    console.log("after")
  }
  render() {  //console.log("before")
    return (
      <View >

     <AddEntry />
      </View>
    );
  //  console.log("hello!")
  }
}
