
import React from 'react';
import { StatusBar,} from 'react-native';
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
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='SplashScreen'
          screenOptions={{
            contentStyle: {
              backgroundColor: Colors.secondary,
            }
          }}
        >
          <Stack.Screen
            name='SplashScreen'
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              headerStyle:{
                backgroundColor: Colors.secondary,
              },
              headerTitleAlign: 'center',
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name='DetailsScreen'
            component={DetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;

