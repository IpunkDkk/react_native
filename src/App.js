/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from './components/header';
import Content from './components/content';

const App = () => {
  return (
    <ScrollView>
    <View>
      <Header />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
    </View>
    </ScrollView>
  );
};


export default App;
