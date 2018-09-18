import React, {Component, PropTypes} from 'react';
import {
    Dimensions,
    PixelRatio,
    Platform,
    StatusBar,
    View
} from 'react-native';

let props = {};
export default class Resolution {
    static get(useFixWidth = true){
        return useFixWidth?{...props.fw}:{...props.fh}
    }

    //dwidth-设计图宽度响度点，dheight-设计图高度像素点
    static setDesignSize(dwidth=1080,dheight=1920,dim="window"){
        let designSize = {width:dwidth,height:dheight};

        // "==="叫做严格运算符，"=="叫做相等运算符     相等运算符隐藏的类型转换，会带来一些违反直觉的结果   0 == ''// true
        let navHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 64;
        let pxRatio = PixelRatio.get(dim);
        let {width,height} = Dimensions.get(dim);
        if(dim != "screen")height-=navHeight;//实际布局展示的高度，减去状态栏的
        let w = PixelRatio.getPixelSizeForLayoutSize(width);
        let h = PixelRatio.getPixelSizeForLayoutSize(height);

        let fw_design_scale = designSize.width/w;//计算出宽度比例
        fw_width = designSize.width;//宽度就是设计图的宽度
        fw_height = h*fw_design_scale;//高度是根据宽度的比例计算出的高度，即以宽度的比例为准转换高度
        fw_scale = fw_design_scale/pxRatio;//宽度比例

        let fh_design_scale = designSize.height/h;//计算出高度比例
        fh_width = w*fh_design_scale;//宽度是根据高度的比例计算出的宽度，即以高度的比例为准转换宽度
        fh_height = designSize.height;//高度就是设计图的高度
        fh_scale = fh_design_scale/pxRatio;//高度比例

        props.fw = {width:fw_width,height:fw_height,scale:fw_scale,navHeight};//保存宽度比例
        props.fh = {width:fh_width,height:fh_height,scale:fh_scale,navHeight};//保存高度比例
    }

    static FixWidthView = (p) => {
        let {width,height,scale,navHeight} = props.fw;
        return (
            <View {...p} style={{
                // marginTop:navHeight,
                width:width,
                height:height,
                backgroundColor: 'transparent',
                fontSize:60,
                transform:[{translateX:-width*.5},//中心点向左偏移宽度的一半
                    {translateY:-height*.5},//中心点偏移向上的一半
                    {scale:scale},
                    {translateX:width*.5},
                    {translateY:height*.5}]
            }}>
            </View>
        );
    };

    static FixHeightView = (p) => {
        let {width,height,scale,navHeight} = props.fh;
        return (
            <View {...p} style={{
                marginTop:navHeight,
                width:width,
                height:height,
                backgroundColor: 'transparent',
                transform:[{translateX:-width*.5},
                    {translateY:-height*.5},
                    {scale:scale},
                    {translateX:width*.5},
                    {translateY:height*.5}]
            }}>
                {p.children}
            </View>
        );
    };
};
//init
Resolution.setDesignSize();