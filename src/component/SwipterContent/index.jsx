import { Component } from 'react'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import BigImage from '@/component/BigImage'
import './index.scss'

export default class SwipterContent extends Component {
  state = {
    isOpened: false,
    bigImgUrl: ''
  }
  changeStatus = (imgurl) => {
    this.setState({
      isOpened: !this.state.isOpened,
      bigImgUrl: imgurl,
    })
  }
  render () {
    const { imageList } = this.props
    const { isOpened, bigImgUrl } = this.state
    return (
      <View className='swipterContent'>
        <BigImage isOpened={isOpened} onClose={this.changeStatus} bigImgUrl={bigImgUrl} />
        {imageList && imageList.length ? <Swiper
          className='swipter'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          circular
          indicatorDots
          // autoplay
          touch
        >
          {
            imageList.map(item => {
              return (
                <SwiperItem key={item.image}>
                  <Image src={item.image} className='img' onClick={() => this.changeStatus(item.image)} />
                </SwiperItem>
              )
            })
          }
        </Swiper> : null}
      </View>
    )
  }
}