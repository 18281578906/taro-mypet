import { View, Image, Button } from '@tarojs/components'
import { Component } from 'react'
import { AtIcon } from 'taro-ui'
import './index.scss'

export default class ContentPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgWidth: 100,
      imgHeight: 100,
    }
  }
  changeSize = (add) => {
    console.log(88);
    const { imgWidth, imgHeight } = this.state;
    let point = 0;
    if (add) {
      point = 50;
    } else {
      point = -50;
    }
    this.setState({
      imgWidth: imgWidth + point,
      imgHeight: imgHeight + point,
    })
  }
  render () {
    const { src, showDialog } = this.props;
    const { imgWidth, imgHeight } = this.state;
    return (
      <View className='wrap'>
        <View className='image-dialog'>
          <AtIcon className='close-icon' prefixClass='fa' value='close-circle' size='30' color='#F00' />
          <View className='img-overflow'>
            <Image src={src} className='img-content'
              style={{
                width: `${imgWidth}%`,
                height: `${imgHeight}%`,
              }} />
          </View>
          <View className='btn-circle'>
            <Button className='circle circle-delete' onClick={() => this.changeSize(false)}>-</Button>
            <Button className='circle circle-add' onClick={() => this.changeSize(true)}>+</Button>
            <Button className='circle circle-close' onClick={() => showDialog()}>关闭</Button>
            <Button className='circle circle-close' onClick={() => showDialog()}>保存</Button>
          </View>
        </View>
      </View>
    );
  }
}
