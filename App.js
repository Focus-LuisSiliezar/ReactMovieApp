
import React from 'react';
import { StatusBar, Text, } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen';
import DetailScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';
import { Colors } from './styles/colors';
import HeaderImage from './components/ui/HeaderImage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer
      >
        <Stack.Navigator
          initialRouteName='HomeScreen'
          screenOptions={{
            headerStyle: { backgroundColor: Colors.secondary },
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerTintColor: 'white',
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
              headerLeft: ()=>  <Text style={{color: 'white'}}>Menu</Text>,
              headerTitle: () => <HeaderImage />,
              headerRight: ()=> <Text style={{color:'white'}}>Search</Text>
            }}
          />
          <Stack.Screen
            name='DetailsScreen'
            component={DetailScreen}
            options={{
              title: ''
            }}

          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;

