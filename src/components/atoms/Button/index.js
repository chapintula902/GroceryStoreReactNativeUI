import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {colors, fonts} from '../../../res';

const Button  = () => {
  return (
    <TouchableOpacity style={styles.container}>
         <Text style={styles.text}>
           Get Started
         </Text>
      </TouchableOpacity>
  )
}

export default Button 
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 50,
        width: 259,
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    text: {
        fontSize: 18,
        fontFamily: fonts.Medium,
        color: colors.white,
        textAlign: 'center'
    }


})