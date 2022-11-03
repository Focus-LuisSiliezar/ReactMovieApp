import React, { useLayoutEffect } from 'react';
import Lottie from 'lottie-react-native';
import { Text } from 'react-native';

export default function SplashScreen() {

    // useLayoutEffect(()=> {
    //     navigation.setOption({headerShow})
    // });
  return (
    <Lottie source={require('./../assets/lottie-splash.json')} autoPlay loop />

  );
}