import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import ContentPanel from '@/component/ContentPanel'
import ImageDialog from '@/component/ImageDialog'
import MyScrollView from '@/component/MyScrollView'
import SwipterContent from '@/component/SwipterContent'
import { AtList, AtListItem } from "taro-ui"
import { inject, observer } from 'mobx-react'
import * as api from '../../utils/request'
import swipter from '@/image/swiper3.jpeg'
import './index.scss'

@inject('store')
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
    api.get('/api');
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
  render () {
    const { ScrollViewContentData: { serviceList, fosterCenterList, adoptList } } = this.props.store
    const { showDialog, dialogImg } = this.state
    return (
      <View className="indexPage">
        <ContentPanel title='index'>
          {/* 轮播 */}
          <SwipterContent />
          {/* 功能列表 */}
          <MyScrollView>
            {
              serviceList.map((item) =>
                <View className='scroll_circle' key={item.serviceid}>
                  <View><Image className='circle_img' src={item.serviceImg} /></View>
                  <View><Text>{item.serviceName}</Text></View>
                </View>
              )
            }
          </MyScrollView>
          <MyScrollView title='寄养中心'>
            {
              fosterCenterList.map((item) =>
                <View className="foster-house" key={item.serviceid} onClick={() => this.showDialogImg(item.serviceImg)}>
                  <View><Image className='circle_img' src={item.serviceImg} /></View>
                  <View><Text>{item.serviceName}</Text></View>
                </View>
              )
            }
          </MyScrollView>
          <MyScrollView title='领养明星'>
            {
              adoptList.map((item) =>
                <View className='adopt_star' key={item.serviceid} onClick={() => this.showDialogImg(item.serviceImg)}>
                  <View><Image className='circle_img' src={item.serviceImg} /></View>
                  <View><Text>{item.serviceName}</Text></View>
                </View>
              )
            }
          </MyScrollView>
          <View className='pet-info'>
            <View className='foster_title'>爱宠信息</View>
            <AtList>
              {adoptList.map((item) =>
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
