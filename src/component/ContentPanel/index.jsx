import { View } from '@tarojs/components'
import { Component } from 'react'
import './index.scss'
export default class ContentPanel extends Component {
  render() {
    return (
      <View className='contentPanel'>
        {this.props.children}
      </View>
    );
  }
}
