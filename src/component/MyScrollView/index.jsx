import { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import './index.scss'
import { inject, observer } from 'mobx-react'

@inject('contentStore')
@observer
export default class SwipterContent extends Component {
  onScrollToUpper () { }

  onScroll (e) {
  }
  render () {
    const { title } = this.props;
    const scrollLeft = 0
    const Threshold = 20
    return (
      <View className="scrollViewContent">
        <View className='foster_title'>{title}</View>
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
          {this.props.children}
        </ScrollView>
      </View>
    )
  }
}