// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './router'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';



function App() {
  //const [fontloaded,setfontloaded]=useState(false);



// const fetchFonts = () => {
//   return Font.loadAsync({
//     SemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
//   });
//   };


  // if(!fontloaded){
  //   return(
  //     <AppLoading
  //     startAsync={fetchFonts}
  //     onFinish={()=>{setfontloaded(true)}}
  //     onError={console.warn}/>
  //   )
  // }


  return (
    <NavigationContainer>
     
        <Router />
     
    </NavigationContainer>
  );
}

export default App;