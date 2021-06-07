import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import NavBar from '../../component/Navbar'
import ContentPanel from '../../component/ContentPanel'
import './index.css'

export default class ServicePage extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='servicePage'>
        <NavBar title="服务"></NavBar>
        <ContentPanel>

        </ContentPanel>
      </View>
    )
  }
}
