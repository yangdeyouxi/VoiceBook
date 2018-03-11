

import {StackNavigator} from 'react-navigation';
import LaunchPage from './../screen/LaunchPage';
import MainPage from './../screen/MainPage';

const StackNavigatorConfig = {
    initialRouteName: 'Launch',
    initialRouteParams: {initPara: '初始页面参数'},
    navigationOptions: {
        title: '标题',
        headerTitleStyle: {fontSize: 18, color: '#666666'},
        headerStyle: {height: 48, backgroundColor: '#'},
    },
    mode: 'card',
    headerMode: 'screen',
    cardStyle: {backgroundColor: "#ffffff"},
    onTransitionStart: (() => {
        console.log('页面跳转动画开始');
    }),
    onTransitionEnd: (() => {
        console.log('页面跳转动画结束');
    })
}

const RouteConfigs = {
  Launch: {screen: LaunchPage},
  Main: {screen: MainPage}
 }

export {RouteConfigs,StackNavigatorConfig}
