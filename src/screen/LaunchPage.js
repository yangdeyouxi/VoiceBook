/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  View,
  Text,
  Image
} from 'react-native';
// import MainPage from './MainPage';
import styles from './../../res/style/styles';
import textStyles from './../../res/style/textstyle';
import Resolution from "../util/Resolution";
import { NavigationActions } from 'react-navigation';



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
          this.jumpMain();
      }
    }, 1000);
  }

  render() {
    let time = this.state.lastTime;

    return (
        <Resolution.FixWidthView style={styles.container}>
          <Image
            source={require('./../../res/img/launcher.png')}
            style={{
              width:1080,
              height:1920
            }}
          />
          <View style={styles.cutTimeBg}
          >
            <Text style={textStyles.textTipNormal}
            onPress={() => this.jumpMain()}
              // onPress{() => console('onPress')}
            >{time}</Text>
          </View>
        </Resolution.FixWidthView>
    );
  }

  jumpMain(){
      clearInterval(this.cutDown);
      this.setState(() => {
          return { lastTime: 0 };
      });
      this.props.navigation.dispatch(resetAction);//跳转并清除路由记录
      // this.props.navigation.navigate('Main');

  }

}

const  resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName:'Main'})//要跳转到的页面名字
    ]
});
