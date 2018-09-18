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
  Image,
  Button,
    SectionList
} from 'react-native';
import styles from './../../res/style/styles';




const keyCalendar = "calendar";
const keyNote = "note";
export default  class MainPage extends Component{



  constructor(props){
    super(props);
  }

    _renderItem = (info) => {
    var itemstr = "i am 日历:";
    var normalstr = "i am 手账:";
        if(info.section.key == keyCalendar){//是日历
            return <Text style={{ height: 60, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}>
                    {itemstr}{info.item.title}
                   </Text>
        }else{
            return <Text style={{ height: 60, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}>
                   {normalstr}{info.item.content}
                   </Text>
        }

    }

    _sectionComp = (info) => {
        var content = "手账item内容";
        var contentTime = "日历item内容";
        console.log("2:" + info.toString());
        if(info.section.key == keyCalendar) {//是日历
            return <Text>{contentTime}{new Date().valueOf()}</Text>
        }else{
            return <Text>{content}</Text>
        }
    }

  render(){

      var sections = [];
      sections[0] = {key:keyCalendar,data:[{title:(new Date()).valueOf()}]};
      sections[1] = {key:keyNote,data:[{content:"1111"},{content:"2222"},{content:"3333"}]};
      console.log("1：" + keyCalendar);

      // var sections = [
      //     { key: "A", data: [{ title: "阿童木" }, { title: "阿玛尼" }, { title: "爱多多" }] },
      //     { key: "B", data: [{ title: "表哥" }, { title: "贝贝" }, { title: "表弟" }, { title: "表姐" }, { title: "表叔" }] },
      //     { key: "C", data: [{ title: "成吉思汗" }, { title: "超市快递" }] },
      //     { key: "W", data: [{ title: "王磊" }, { title: "王者荣耀" }, { title: "往事不能回味" },{ title: "王小磊" }, { title: "王中磊" }, { title: "王大磊" }] },
      // ];

    return (
        <View style={styles.container}>
            <SectionList
                renderSectionHeader={this._sectionComp}//每个分类头部视图
                renderItem={this._renderItem}//每个分类下的item数据
                sections={sections}//数据源
                // onRefresh={()=>{ this.beginHeaderRefresh() }}//设置此选项后，则会在列表头部添加一个标准的RefreshControl控件，以便实现“下拉刷新”的功能
                // refreshing={this.state.isHeaderRefreshing}//bool值，用来控制刷新控件的显示与隐藏。刷新完成后设为false。
                ItemSeparatorComponent={() => <View><Text></Text></View>}//每一项之间的间隔
                // onEndReached={() => { this.beginFooterRefresh() }}//到达底部时
                onEndReachedThreshold={0.1} // 还差多少到底时触发onEndReached方法，这里取值0.1（0~1之间不包括0和1），可以根据实际情况调整，取值尽量小
                ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>列表头部</Text></View>}
                ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>列表尾部</Text></View>}
            />
        </View>
    );
  };

}
