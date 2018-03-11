/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import {StackNavigatorConfig,RouteConfigs} from './src/route/ScreenJumper';

const RootStack = StackNavigator(RouteConfigs,StackNavigatorConfig);

export default class App extends Component {
  render() {
    return <RootStack/>;
  }
}
