import React from 'react';
import {ScrollView} from 'react-native';
import {View, Image} from 'react-native';
import alam from '../../img/alam.jpg';

const Content = () => {
  return (
    <View>
      <Image source={alam} style={{flex: 1, height: 200}} />
    </View>
  );
};

export default Content;
