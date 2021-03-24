/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {createContext, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Header from './Components/Header'

import { ThemeContext } from './Components/Context'
import LoginComponent from './Components/LoginComponent';
import ModalView from './Components/ModalView';
// import ClassComp from './Components/classComp';

import  SplashScreen  from 'react-native-splash-screen'
import UseReducerCounter from './Components/UseReducerCounter';
import ClassComponent from './Components/ClassComponent';

import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
import HomeComponent from './Components/HomeComponent';
import DetailsComponent from './Components/DetailsComponent';
import DashboardComponent from './Components/DashboardComponent';

import { createDrawerNavigator } from '@react-navigation/drawer'
import MainNavigation from './Components/MainNavigation';

import { store ,persistor } from './Redux/store';

import { Provider } from 'react-redux';
import UserContainer from './Components/UserContainer';

import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();


const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  })
  

  const data = [
    {
      id: 1,
      name: 'Abhishek'
    },
    {
      id: 2,
      name: 'Akash',
    },
    {
      id: 3,
      name: 'Ashish'
    }
  ]

  useEffect(async() => {
    try {
    const jsonData = await AsyncStorage.getItem("persist:root")
    const data = JSON.parse(jsonData)
    //const accData = JSON.parse(data.data)
    //console.log(JSON.parse(data.data));
    }catch(error) {
      console.log(error.message);
    }
  },[])


  return (

    // <ThemeContext.Provider value={21}>
    // <SafeAreaView>
    //   {/* <FlatList 
    //   data={data}
    //   numColumns={2}
    //   keyExtractor={(item) => {item.id }}
    //   renderItem={({item}) => (
    //     <Text>{item.name}</Text>
    //   )}
    //   /> */}

    //     <Header name={'abhi'} age={20} city={'mumbai'}  />
    // </SafeAreaView>
    // </ThemeContext.Provider>

    // <SafeAreaView style={{flex:1}}>
  
    //   {/* <StatusBar barStyle='dark-content'/> */}
      // <LoginComponent /> 
    //   <UseReducerCounter />

    // <ClassComponent />

    // </SafeAreaView>
    

    // <View>

    //   <Text>Hello</Text>
    // </View>



    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} > 

      {/* <NavigationContainer> */}
          <UserContainer />

          {/* <Stack.Navigator>

            <Stack.Screen name="Home" component={HomeComponent}>
            
            </Stack.Screen>

            <Stack.Screen name='Details' component={DetailsComponent}>

            </Stack.Screen>

            <Stack.Screen name='Dashboard' component={DashboardComponent}>

            </Stack.Screen>

          </Stack.Navigator> */}

          

          {/* <Drawer.Navigator >
            <Drawer.Screen name="Home" component={MainNavigation} ></Drawer.Screen>
          </Drawer.Navigator> */}
          

      {/* </NavigationContainer> */}
      </PersistGate>
    </Provider>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
