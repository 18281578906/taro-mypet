import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Image, Video } from '@tarojs/components'
import NavBar from '@/component/Navbar'
import ContentPanel from '@/component/ContentPanel'
import { inject, observer } from 'mobx-react'
import { AtList, AtListItem } from 'taro-ui'
import SwipterContent from '@/component/SwipterContent'
import MyScrollView from '@/component/MyScrollView'
import PetInfo from './PetInfo'
import TopImg from '@/image/top-title.gif'
import poster from '@/image/poster.png'
import swiper1 from '@/image/swiper1.jpeg'
import BigImage from '@/component/BigImage'


import './index.scss'

@inject('contentStore')
@observer
export default class PetDetail extends Component {
  state = {
    petDetail: {},
    isOpened: false,
    bigImgUrl: ''
  }

  changeStatus = (imgurl) => {
    this.setState({
      isOpened: !this.state.isOpened,
      bigImgUrl: imgurl,
    })
  }
  componentDidMount () {
    const pageUrl = (Taro.getCurrentInstance().router).params;
    const petId = pageUrl.petId;
    this.getCatDetail(petId)
  }

  getCatDetail = (petId) => {
    const { contentStore: { catList } } = this.props
    catList.forEach(item => {
      if (item.id === petId) {
        console.log(item);
        this.setState({
          petDetail: item,
        })
        Taro.setNavigationBarTitle({
          title: `${item.catName}の介绍`
        })
      }
    })
  }

  onShareAppMessage () {
    const { petDetail } = this.state
    return {
      title: `${petDetail.catName}找新家`,
      desc: petDetail.catSummary,
      imageUrl: petDetail.catImg, // 分享背景截图
      path: `pages/index/petDetail/index?petId=${petId}`
    }
  }

  onShareTimeline () {
    const { petDetail } = this.state

    return {
      title: `${petDetail.catName}找新家`,
      query: {
        petId: petDetail.id
      },
      imageUrl: petDetail.catImg,
    }
  }

  showMoreImage = (petId) => {
    Taro.navigateTo({ url: '../pictureList/index?petId=' + petId })
  }

  render () {
    const { petDetail, isOpened, bigImgUrl } = this.state
    return (
      <View className='petDetail' >
        <BigImage isOpened={isOpened} onClose={this.changeStatus} bigImgUrl={bigImgUrl} />

        {petDetail &&
          <ContentPanel>
            < SwipterContent className='swipter-content' imageList={petDetail.imageList} />
            <PetInfo
              petDetail={petDetail}
              goToCatDetail={this.getCatDetail}
            />
            <View className='video-title'>猫咪视频</View>
            <MyScrollView>
              <View className='video-content'>
                <View className='video-list'>
                  <Video
                    id='video'
                    src='https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
                    poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
                    initialTime='0'
                    controls={true}
                    autoplay={false}
                    loop={false}
                    muted={false}
                  />
                </View>
                <View className='video-list'>
                  <Video
                    id='video'
                    src='https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
                    poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
                    initialTime='0'
                    controls={true}
                    autoplay={false}
                    loop={false}
                    muted={false}
                  />
                </View>
                <View className='video-list'>
                  <Video
                    id='video'
                    src='https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
                    poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
                    initialTime='0'
                    controls={true}
                    autoplay={false}
                    loop={false}
                    muted={false}
                  />
                </View>
                <View className='video-list'>
                  <Video
                    id='video'
                    src='https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
                    poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
                    initialTime='0'
                    controls={true}
                    autoplay={false}
                    loop={false}
                    muted={false}
                  />
                </View>
              </View>
            </MyScrollView>
            <View className='picture-tile' onClick={() => this.showMoreImage(petDetail.id)}>生活相册
            <Text className="at-icon at-icon-chevron-right" /></View>
            <View className='picture-list'>
              <View className='picture-left'>
                <View className='picture1'>
                  <Image src={swiper1} onClick={() => this.changeStatus(swiper1)} />
                </View>
                <View className='picture2'>
                  <Image src={swiper1} onClick={() => this.changeStatus(swiper1)} />
                </View>
              </View>
              <View className='picture-right'>
                <View className='picture2'>
                  <Image src={swiper1} onClick={() => this.changeStatus(swiper1)} />
                </View>
                <View className='picture1'>
                  <Image src={swiper1} onClick={() => this.changeStatus(swiper1)} />
                </View>
              </View>
            </View>
          </ContentPanel>
        }
      </View>
    )
  }
}
