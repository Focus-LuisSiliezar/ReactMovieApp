
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
              name='SearchScreen'
              component={SearchScreen}
              options={{
                title: ''
              }}
            />
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              headerLeft: () => <IconButton name='menu' color='white' />,
              headerTitle: () => <HeaderImage />,
              // ERROR
              headerRight: () => <IconButton name='search' color='white'
              //  onPress={()=> useNavigation.Navigator('SearchScreen')} 
               />
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

