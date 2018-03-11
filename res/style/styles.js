
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  cutTimeBg:{
    position:'absolute',
    width:30,
    height:30,
    top:20,
    right:20,
    alignItems:'center',
    alignSelf:'flex-end',
    justifyContent:'center',
    borderRadius:16,
    backgroundColor:'#ffffff'
  },
  cutTimeContent:{
    position:'absolute',
  },
  // mainBg{
  //   backgroundColor:'#ff0066',
  //   flex:1
  // }
});

export {styles as default}
