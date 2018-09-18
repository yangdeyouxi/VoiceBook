

import {StackNavigator} from 'react-navigation';
import LaunchPage from './../screen/LaunchPage';
import MainPage from './../screen/MainPage';

const StackNavigatorConfig = {
    initialRouteName: 'Launch',
    initialRouteParams: {initPara: '初始页面参数'},
}

const RouteConfigs = {
  Launch: {
    screen: LaunchPage,
    navigationOptions: {
        header:null,
        title: 'launch',
        headerTitleStyle: {fontSize: 18, color: '#666666',textAlign: 'center',alignSelf:'center'},
        headerStyle: {height: 48, backgroundColor: '#'},
        tabBarVisible:false
        // headerRight: (<View></View>)
    },
    onTransitionStart: (() => {
        console.log('页面跳转动画开始');
    }),
    onTransitionEnd: (() => {
        console.log('页面跳转动画结束');
    })
  },
  Main: {
    screen: MainPage,
    navigationOptions: {
          headerTitle: '语期',
          title: '标题2',
          headerTitleStyle: {fontSize: 18, color: '#666666',textAlign: 'center',alignSelf:'center'},
    }
  }
 }

export {RouteConfigs,StackNavigatorConfig}
