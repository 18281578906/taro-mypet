import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.css'
import NavBar from '@/component/Navbar'
import ContentPanel from '@/component/ContentPanel'

export default class HomePage extends Component {

  state = {
    isLogin: false,
    useInfo: {}
  }

  componentWillMount () { }

  async componentDidMount () {

    const userInfo = await Taro.getStorageSync('userInfo');
    console.log(userInfo);
    if (userInfo) {
      this.setState({
        isLogin: true,
        useInfo: JSON.parse(userInfo)
      })
    }
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getUserInfo = async () => {

    if (Taro.canIUse('getUserProfile')) {
      const mm = await Taro.getUserProfile({
        desc: '获取用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      })
      Taro.setStorageSync('userInfo', mm.rawData)
    }
    else {
      Taro.getUserInfo({
        success: function (res) {
          console.log(res);
          var userInfo = res.userInfo
          var nickName = userInfo.nickName
          var avatarUrl = userInfo.avatarUrl
          var gender = userInfo.gender //性别 0：未知、1：男、2：女
          var province = userInfo.province
          var city = userInfo.city
          var country = userInfo.country
        }
      })

    }
  }
  render () {
    const { userInfo, isLogin } = this.state;
    return (
      <View className='homePage' >
        <NavBar title="我的"></NavBar>
        <ContentPanel>
          {!isLogin ? <Button onClick={this.getUserInfo}>登陆</Button>
            : <Button>{userInfo?.avatarUrl}</Button>
          }
        </ContentPanel>
      </View>
    )
  }
}
