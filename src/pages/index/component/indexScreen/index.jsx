import { Component } from 'react'
import { View,Image } from '@tarojs/components'
import screenImg from '../../../image/index-screen.jpg'
import './index.scss'

export default class indexScreen extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='indexScreen'>
        <Image
          className='index_img'
          src={screenImg}/>
      </View>
    )
  }
}
