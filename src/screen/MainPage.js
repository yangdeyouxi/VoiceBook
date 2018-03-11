/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import styles from './../../res/style/styles';


export default  class MainPage extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <View >

        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  };

}
