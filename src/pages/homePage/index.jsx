import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.css'
import NavBar from '../../component/Navbar'
import ContentPanel from '../../component/ContentPanel'

export default class HomePage extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='homePage'>
        <NavBar title="我的"></NavBar>
        <ContentPanel>

        </ContentPanel>
      </View>
    )
  }
}
