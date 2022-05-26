import { View, Text, useColorScheme, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { IL_Cauliflawer_PNG, IL_Grapes_PNG, IL_Greentea_PNG, IL_Tomato_PNG } from '../../res';
import { StatusBar } from 'expo-status-bar';

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dataTopProducts = [{
    name: 'Grape',
    icon: IL_Grapes_PNG,
    bgColor: 'rgba(227, 206, 243, 0.62)',
    price: 1.53,
    desc: "Grapes  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
  },
  {
    name: 'Tometo',
    icon: IL_Tomato_PNG,
    bgColor: 'rgba(255, 234, 232, 1)',
    price: 2.32,
    desc: "Grapes  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution."

  },
  {
    name: 'Cauliflawer',
    icon: IL_Cauliflawer_PNG,
    bgColor: 'rgba(140, 250, 145, 0.16)',
    price: 3.42,
    desc: "Grapes  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution."

  },
  {
    name: 'Greentea',
    icon: IL_Greentea_PNG,
    bgColor: 'rgba(187, 208, 136, 0.39)',
    price: 1.53,
    desc: "Grapes  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution."

  },



  ]
  return (
    <SafeAreaView styles={styles.flex1}>
      <StatusBar barStyle={isDarkMode? 'light-content' : 'dark-content'} />
      <View style={styles.flex1}>

      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  flex1: {flex: 1},

})