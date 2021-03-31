import { Component } from 'react'
import { View, Button } from '@tarojs/components'
import ContentPanel from '../component/ContentPanel'
import SwipterContent from './component/SwipterContent'
import ScrollViewContent from './component/ScrollViewContent'
import { inject, observer } from 'mobx-react'
import './index.scss'

@inject('store')
@observer
export default class Index extends Component {

  componentWillMount() {

  }

  componentDidMount() {
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  addClik() {
    const { counterStore } = this.props.store
    counterStore.increment()
  }
  deleClik() {
    const { counterStore } = this.props.store
    counterStore.decrement()
  }
  render() {
    const { counterStore: { counter } } = this.props.store

    return (
      <View className="indexPage">
        <ContentPanel title='index'>
          <SwipterContent />
          <ScrollViewContent />
          <Button onClick={() => this.addClik()}>+</Button>
          <Button onClick={() => this.deleClik()}>-</Button>
          <View>{counter}</View>
        </ContentPanel>
      </View>
    )
  }
}
