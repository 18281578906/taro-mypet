import { Component } from 'react'
import { View, Image, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import ContentPanel from '@/component/ContentPanel'
import ImageDialog from '@/component/ImageDialog'
import MyScrollView from '@/component/MyScrollView'
import SwipterContent from '@/component/SwipterContent'
import { AtList, AtListItem } from "taro-ui"
import { inject, observer } from 'mobx-react'
import { get, post, isWexin } from '@/utils/request'
import swipter from '@/image/swiper3.jpeg'
import './index.scss'

@inject('contentStore')
@observer
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      dialogImg: swipter,
    }
  }

  componentWillMount () { }

  componentDidMount () {
    // api.get('/api');
    // 必须是在用户已经授权的情况下调用

  }



  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  showDialogImg = (imgUrl) => {
    if (imgUrl) {
      this.setState({
        dialogImg: imgUrl,
        showDialog: true
      })
    }
    else {
      this.setState({
        dialogImg: '',
        showDialog: false
      })
    }
  }
  goToPetList = (serviceid, serviceName) => {
    console.log(serviceid);
    Taro.navigateTo({ url: `./petList/index?serviceid=${serviceid}&serviceName=${serviceName}` })
  }
  render () {
    const { contentStore: { serviceList, fosterCenterList, adoptList, BreedinCatList, imageList } } = this.props
    const { showDialog, dialogImg } = this.state
    return (
      <View className="indexPage">
        <ContentPanel title='index'>
          {/* 轮播 */}
          <SwipterContent imageList={imageList} />
          {/* 功能列表 */}
          <MyScrollView>
            {
              serviceList.map((item) =>
                <View className='scroll_circle' key={item.serviceid} onClick={() => this.goToPetList(item.id, item.serviceName)}>
                  <View><Image className='circle_img' src={item.serviceImg} /></View>
                  <View><Text>{item.serviceName}</Text></View>
                </View>
              )
            }
          </MyScrollView>
          <MyScrollView title='寄养中心'>
            {
              fosterCenterList.map((item) =>
                <View className="foster-house" key={item.serviceid}>
                  <View><Image className='circle_img' src={item.serviceImg} /></View>
                  <View><Text>{item.serviceName}</Text></View>
                </View>
              )
            }
          </MyScrollView>
          <MyScrollView title='领养明星'>
            {
              adoptList.map((item) =>
                <View className='adopt_star' key={item.serviceid}>
                  <View><Image className='circle_img' src={item.serviceImg} /></View>
                  <View><Text>{item.serviceName}</Text></View>
                </View>
              )
            }
          </MyScrollView>
          <View className='pet-info'>
            <View className='foster_title'>爱宠信息</View>
            <AtList>
              {BreedinCatList.map((item) =>
                <AtListItem
                  title={item.serviceName}
                  arrow='right'
                  note='描述信息'
                  thumb={item.serviceImg}
                />)
              }
            </AtList>
          </View>
        </ContentPanel>
        { showDialog && <ImageDialog src={dialogImg} showDialog={this.showDialogImg} />}
      </View >
    )
  }
}
