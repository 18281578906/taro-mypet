import { View, Image, AtIcon, Button } from '@tarojs/components'
import { Component } from 'react'
import './index.scss'

export default class ContentPanel extends Component {
  render () {
    const { src } = this.props;
    return (
      <View className='wrap'>
        <View className='image-dialog'>
          <Image src={src} className='img-content' />
          <View className='btn-circle'>
            <Button className='circle circle-delete'>-</Button>
            <Button className='circle circle-add'>+</Button>
          </View>
        </View>
      </View>
    );
  }
}
