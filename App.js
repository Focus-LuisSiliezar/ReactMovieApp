
import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen';
import DetailScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';
import { Colors } from './styles/colors';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='HomeScreen'
          screenOptions={{
            headerTintColor: Colors.primary,
            contentStyle:{ backgroundColor: 'white' }
          }}
        >
          <Stack.Screen
            name='SplashScreen'
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='DetailsScreen'
            component={DetailScreen}
          />
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              title: 'Movie App',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
