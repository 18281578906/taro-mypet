import Taro from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import { Component } from 'react'
import './index.scss'
export default class Navbar extends Component {
  render() {
    const style = {
      paddingTop: Taro.$navBarMarginTop + 'px'
    }
    const { title, location } = this.props
    return (
      <View className='navbarWrap' style={style}>
        <View className='navbar'>
          <Text>{title}</Text>
          <Text>{title}</Text>
          <Text>{location}</Text>
          </View>
      </View>
    );
  }
}
