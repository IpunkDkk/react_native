/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import love from '../../icons/love.png';
import airplane from '../../icons/airplane.webp';

const Header = () => {
  return (
    <View style={style.container}>
      <View style={{flex: 6, height: 50}}>
        <Text style={style.txt} >Instagram</Text>
      </View>
      <View style={{flex: 1, height: 50,  alignItems:'center'}} >
      <Image source={love} style={{width:30, height:30}} />
      </View>
      <View style={{flex: 1, height: 50,  alignItems:'center' , alignContent:'center'}} >
      <Image source={airplane} style={{width:30, height:30}} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems:'center',
  },
  img: {
    height:30,
    width:30,

  },
  txt: {
    marginRight:10,
    fontSize:30,
    fontWeight:'bold',
  },
});

export default Header;
