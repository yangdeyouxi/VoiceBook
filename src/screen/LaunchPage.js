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
// import MainPage from './MainPage';
import styles from './../../res/style/styles';
// import {StackNavigator} from 'react-navigation';
// import MainPage from './MainPage';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class LaunchPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        lastTime:5
    };
    this.countdown();
  }

  //倒计时
  countdown(){
    // 每1000毫秒对lastTime状态做一次取反操作
    this.cutDown = setInterval(() => {
      this.setState(previousState => {
        return { lastTime: previousState.lastTime-1 };
      });
      if (this.state.lastTime <= 0) {
        clearInterval(this.cutDown);
        //然后还需要跳转新页面
        this.props.navigation.navigate('Main');
      }
    }, 1000);
  }

  render() {
    let time = this.state.lastTime;
    return (
      <View style={styles.container}>
        <Image
          source={require('./../../res/img/launcher.png')}
          style={{
            width:450,
            height:700
          }}
        />
        <View style={styles.cutTimeBg}
        >
          <Text style={styles.cutTimeContent}
          onPress={() => this.props.navigation.navigate('Main')}
            // onPress{() => console('onPress')}
          >{time}</Text>
        </View>
      </View>

    );
  }
}
