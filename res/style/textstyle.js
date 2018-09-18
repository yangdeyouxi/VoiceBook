import {
    StyleSheet,
} from 'react-native';
import {setSpText} from '../../src/util/AdaptiveUtil'

const textStyles = StyleSheet.create({
    textTipNormal:{
        position:'absolute',
        fontSize: setSpText(50)
    }
})

export {textStyles as default}