import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <View style={{flexDirection:'row'}}>
      <View style={{backgroundColor:'#41fc03' , flex:1 , height:50}} />
      <View style={{backgroundColor:'#2596be' , flex:1 , height:50}} />
      <View style={{backgroundColor:'#AB6ABD' , flex:1 , height:50}} />
      <View style={{backgroundColor:'#BD6A8F' , flex:1 , height:50}} />
    </View>
  )
};

export default App;
