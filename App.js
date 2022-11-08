
// import {} from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react';
import { StatusBar, Text, } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen';
import DetailScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';
import { Colors } from './styles/colors';
import HeaderImage from './components/ui/HeaderImage';
import IconButton from './components/ui/IconButton';
import SearchScreen from './screens/SearchScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.secondary },
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerTintColor: 'white',
        contentStyle: {
          backgroundColor: Colors.secondary,
        },
        sceneContainerStyle: { backgroundColor: '#000000' },
        drawerContentStyle: { backgroundColor: '#111111' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#831010'
      }}
    >
      <Drawer.Screen name='HomeScreen'
        component={HomeScreen}
         />

      <Drawer.Screen name='FavoritesScreen' component={FavoritesScreen} options={{
        title: 'Favorites',
        // drawerIcon: ({ color }) => <Feather name='home' color={color} size={18} />
      }} />

    </Drawer.Navigator>
  );
}
function App() {

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer
      >
        <Stack.Navigator
          initialRouteName='SplashScreen'
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
            name='DrawerMenu'
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='SplashScreen'
            component={SplashScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='SearchScreen'
            component={SearchScreen}
            options={{
              title: ''
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

