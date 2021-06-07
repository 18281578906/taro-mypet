import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import { AtFab, AtCard, AtAvatar, AtIcon } from 'taro-ui'
import ContentPanel from '@/component/ContentPanel'
import SwipterContent from '@/component/SwipterContent'
import './index.scss'

export default class ForumPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: 'heart',
      showMessage: false
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  onButtonClick = () => {
    Taro.navigateTo({
      url: './addMessage/index'
    })
  }
  clickHeart = () => {
    const { heart } = this.state
    if (heart === 'heart') {
      this.setState({
        heart: 'heart-2',
      })
    } else {
      this.setState({
        heart: 'heart',
      })
    }
  }
  clickMessage = () => {
    this.setState({
      icon: {
        showMessage: true
      }
    })
  }
  render () {
    const { heart, message } = this.state
    const img = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-71dcef82c8afb85dacd42a995f64f1b5_hd.jpg&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625652976&t=017c78ba136c18fbf9c402122886824f'
    return (
      <View className='froumPage'>
        <ContentPanel>
          <AtFab onClick={this.onButtonClick}>
            <Text className='at-fab__icon at-icon at-icon-add'></Text>
          </AtFab>
          <View className='talk-list'>
            <View className='talk-title'>
              <AtAvatar className='talk-avatar' size='small' circle text='用户名' image={img} />
              <Text className='talk-name'>小狐慕尾</Text>
            </View>
            <View className='talk-word'>
              这是一个测试的说说,表示我今天的状态开心😄，表示我今天要出单了🌞哈哈哈哈
            </View>
            <View className='talk-picture'>
              <SwipterContent />
            </View>
            <View className='talk-function'>
              <AtIcon className='talk-heart talk-icon' value={heart} size='18' color='#f5a5b3' onClick={this.clickHeart}></AtIcon>
              <AtIcon className='talk-message talk-icon' value='message' size='18' color='#f9cf33' onClick={this.clickMessage}>
                <Input className='talk-input' type='text' />
              </AtIcon>
            </View>
            <View className='talk-question'>
              <View className='question-list'>
                <View className='list-item'>
                  <Text className='list-name'>小狐慕尾</Text>：<Text className='list-content'>欢迎评论</Text>
                </View>
                <View className='list-item'>
                  <Text className='list-name'>小狐慕尾</Text>：<Text className='list-content'>欢迎评论欢迎评论欢迎评论,欢迎评论欢迎评论欢迎评论,欢迎评论</Text>
                </View>
                <View className='list-item'>
                  <Text className='list-name'>小狐慕尾</Text>：<Text className='list-content'>欢迎评论</Text>
                </View>
              </View>
            </View>
          </View>
        </ContentPanel>
      </View>
    )
  }
}
