import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtCurtain } from 'taro-ui'

export default class TagPage extends Component {
  state = {
    imgWidth: 0
  }
  toBigImage = () => {
    const query = Taro.createSelectorQuery()
    query.select('.big-image')
      .boundingClientRect()
      .exec(res => {
        console.log(res[0], res[0].width, res[0].width * 1.5);
        this.setState({
          imgWidth: res[0].width * 2
        })
      })

  }

  render () {
    const { bigImgUrl, isOpened, onClose } = this.props
    const { imgWidth } = this.state
    //点击放大图片
    return (
      <View>
        <AtCurtain
          isOpened={isOpened}
          onClose={onClose}
          className='big-img-container'
        >
          <Image
            style={{
              width: imgWidth ? imgWidth : '100%',
              height: '250px'
            }}
            src={bigImgUrl}
            mode='widthFix'
            // onClick={onClose}
            onClick={() => this.toBigImage()}
            className='big-image'
          />
        </AtCurtain>
      </View>

    )
  }
}