import React, { useLayoutEffect } from 'react';
import Lottie from 'lottie-react-native';
import { Text } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';

export default function SplashScreen() {

    const navigation = useNavigation();
    function SplashScreenDelay() {
        navigation.dispatch(
            StackActions.replace('HomeScreen')
        );
        console.log('Time is up');
    }
    setTimeout(() => {
        SplashScreenDelay();
    }, 4400);

    return (
        <Lottie source={require('./../assets/lottie-splash.json')} autoPlay loop />

    );
}