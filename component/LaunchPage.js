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
      }
    }, 1000);
  }

  render() {
    let time = this.state.lastTime;
    return (
      <View style={styles.container}>

        <Image
          source={require('../img/launcher.png')}
          style={{
            width:400,
            height:700
          }}
        />
        <View style={styles.cutTimeBg}>
          <Image source={require('../img/back.png')} style={{width:30,height:30}}/>
          <Text style={styles.cutTimeContent}>{time}</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  cutTimeBg:{
    position:'absolute',
    width:30,
    height:30,
    top:40,
    right:20,
    alignItems:'center',
    alignSelf:'flex-end',
    justifyContent:'center'
  },
  cutTimeContent:{
    position:'absolute'
  }
});
