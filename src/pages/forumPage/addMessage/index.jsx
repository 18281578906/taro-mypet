import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtImagePicker, AtTextarea, AtButton, AtList, AtListItem } from 'taro-ui'
import Taro from '@tarojs/taro'
import ContentPanel from '@/component/ContentPanel'
import ImageDialog from '@/component/ImageDialog'
import './index.scss'

export default class ForumPage extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      files: [],
      showAddBtn: true,
      value: '',
      dialogImg: '',
      showDialog: false,
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  //文本
  handleChange = (value) => {
    this.setState({
      value
    })
  }
  //图片
  onChange = (files) => {
    console.log(files);
    if (files.length <= 9) {
      this.setState({
        files,
        showAddBtn: true,
      })
    }

    else {
      Taro.showToast({
        title: '只能选择9张图片！',
        icon: 'none'
      })
      this.setState({
        showAddBtn: false,
        files: files.splice(0, 9)
      })
    }
  }
  onFail = (mes) => {
    Taro.showToast({
      title: '图片出错，请重新选择！',
      icon: 'none'
    })
  }
  onImageClick = (index, file) => {
    console.log(index, file);
    this.showDialogImg(file.url)
  }

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

  Publish = (publish) => {
    if (publish) {

    } else {
      Taro.navigateBack();
    }

  }

  getLocation = () => {
    Taro.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res);
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
      }
    })
  }
  render () {
    const { showAddBtn, showDialog, imgUrl } = this.state
    return (
      <View className='froumPage-add-talk'>
        <ContentPanel>
          <View className='navBar'>
            <View className='navBar-cancel' onClick={() => this.Publish(false)}>取消</View>
            <AtButton type='primary' className='navBar-publish' onClick={() => this.c(true)}>发表</AtButton>
          </View>
          <View className='add-talk'>
            <View className='add-talk-world'>
              <AtTextarea
                count={false}
                value={this.state.value}
                onChange={this.handleChange}
                maxLength={200}
                placeholder='这一刻的想法...'
              />
            </View>
            <View className='add-talk-picture'>
              <AtImagePicker
                length={3}//单行显示图片个数
                files={this.state.files}
                onChange={this.onChange}
                onFail={this.onFail}
                onImageClick={this.onImageClick}
                className={!showAddBtn && 'hid-addbtn'}
              />
            </View>
          </View>
          <View>
            <AtList>
              <AtListItem
                title='所在位置'
                arrow='right'
                thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                onClick={this.getLocation}
              />
              <AtListItem
                title='提醒谁看'
                arrow='right'
                thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
              />
              <AtListItem
                title='谁可以看'
                arrow='right'
                thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
              />
            </AtList>
          </View>
        </ContentPanel>
        {showDialog && <ImageDialog src={imgUrl} showDialog={this.showDialogImg} />}
      </View>
    )
  }
}
