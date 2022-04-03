import React from 'react';
import { Text, View, Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Searchscreen extends React.Component {
  render() {
    return (
      <View>
        
        <View>
          {' '}
          <AppHeader />{' '}
        </View>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
          
          

          <Text style={{ textAlign: 'center', fontSize: 40 }}>  Your ride history  </Text>
        </View>
      </View>
    );
  }
}
