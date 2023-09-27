import React from 'react';
import { StatusBar} from 'react-native';
import Router from './src/Router';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#aaa'} barStyle={'dark-content'}/>
      <Router/>
    </>
  );
}