import { Component } from 'react'
import { View, ScrollView, Image, Text } from '@tarojs/components'
import shop from '../../../../image/shop.jpeg'
import './index.scss'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
export default class SwipterContent extends Component {
    onScrollToUpper() { }

    onScroll(e) {
        console.log(e.detail)
    }
    render() {

        const {serviceList}=this.props.store.ScrollViewContentData
        const scrollLeft = 0
        const Threshold = 20
        return (
            <View className="scrollViewContent">
                <ScrollView
                    className='scrollview'
                    scrollX
                    scrollWithAnimation
                    scrollLeft={scrollLeft}
                    lowerThreshold={Threshold}
                    upperThreshold={Threshold}
                    onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
                    onScroll={this.onScroll}
                    enableFlex
                >
                    {
                        serviceList.map((item) => 
                            <View className='scroll_circle' key={item.serviceid}>
                                <View><Image className='circle_img' src={shop} /></View>
                                <View><Text>{item.serviceName}</Text></View>
                            </View>
                        )
                    }
                </ScrollView>
            </View>
        )
    }
}