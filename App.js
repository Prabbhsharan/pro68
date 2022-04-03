import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import fbScreen from './Screens/rideScreen'
import instaScreen from './Screens/historyScreen'

export default class App extends React.Component {
  render(){
    return (
        <View style={styles.container}>
        <AppContainer />
        </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Ride : {
    screen: fbScreen,
    navigationOptions: {
     
      tabBarLabel: "Ride"
    }
  },
  Ridehistory: {
    screen: instaScreen,
    navigationOptions: {
      
      tabBarLabel: "Ride history"
    }
  }
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
