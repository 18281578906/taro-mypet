import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import NavBar from '../component/Navbar'
import ContentPanel from '../component/ContentPanel'
import './index.css'

export default class ForumPage extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='froumPage'>
        <NavBar title="论坛"></NavBar>
        <ContentPanel>
          
        </ContentPanel>
      </View>
    )
  }
}
