import React from 'react';
import {
  View,
  Text,
  useColorScheme,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  // BoxItemCategories,
  // BoxItemTopProduct,
  // Gap,
  Header,
} from '../../components';
import {
  colors,
  fonts,
  IC_Bakery,
  IC_Bakery2,
  IC_Drinks,
  IC_Fruits,
  IC_Search,
  IC_Vegetables,
  IL_Cauliflawer_PNG,
  IL_Grapes_PNG,
  IL_Greentea_PNG,
  IL_Tomato_PNG,
} from '../../res';

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
  ];



  return (
    <SafeAreaView styles={styles.flex1}>
      <StatusBar barStyle={isDarkMode? 'light-content' : 'dark-content'} />
      <View style={styles.flex1}>
        <Header drawer/>
        
         <ScrollView >
          <View style={{paddingHorizontal: 20}} >
            <View style={styles.wrapperSearch} >
              <TextInput placeholder='search' style={styles.textInputSearch}/>
              <IC_Search />
             
              
              </View>
            </View>
          </ScrollView>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  flex1: {flex: 1},

  wrapperSearch: {
    height: 40,
    backgroundColor: colors.lightGrey,
    backgroundRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    

  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },


})


export default Home;