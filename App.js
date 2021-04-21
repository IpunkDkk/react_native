import React from 'react';
import { Image } from 'react-native';
import {Text, View , StyleSheet} from 'react-native';
import yt from './src/icons/youtube.png';

const App = () => {
  return (
    <View style={style.container}>
      <Image source={yt} style={style.gambar}  />
      <Text style={style.text}>Youtube Mobile</Text>
    </View>
  )
};

const style = StyleSheet.create({
  container : {
    flex:1, 
    alignItems:'center', 
    justifyContent:'center',
  },
  text : {
    fontSize:20,
    fontWeight:'bold'
  },
  gambar : {
    height:150 , 
    width:150
  }
});

export default App;
