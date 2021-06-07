import { Component } from 'react'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import swiper1 from '@/image/swiper1.jpeg'
import swiper2 from '@/image/swiper2.jpeg'
import swiper3 from '@/image/swiper3.jpeg'
import './index.scss'

export default class SwipterContent extends Component {
  render () {
    return (
      <View className="swipterContent">
        <Swiper
          className='swipter'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          circular
          indicatorDots
          // autoplay
          touch
        >
          <SwiperItem
          >
            <Image src={swiper1} className='img' />
          </SwiperItem>
          <SwiperItem>
            <Image src={swiper2} className='img' />
          </SwiperItem>
          <SwiperItem>
            <Image src={swiper3} className='img' />
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}