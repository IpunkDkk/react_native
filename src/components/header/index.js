/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import love from '../../icons/love.png';
import airplane from '../../icons/airplane.webp';

const Header = () => {
  return (
    <View style={style.container}>
      <View style={{flex: 4, height: 50}}>
        <Text style={style.txt} >Instagram</Text>
      </View>
      <View style={{flex: 1, height: 50}} >
      <Image source={love} style={{width:30, height:30, alignItems:'flex-end'}} />
      </View>
      <View style={{flex: 1, height: 50}} >
      <Image source={airplane} style={{width:30, height:30, alignItems:'flex-end'}} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  img: {
    height:30,
    width:30,
  },
  txt: {
    fontSize:30,
    textAlign:'left',
  },
});

export default Header;
