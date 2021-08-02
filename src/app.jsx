import { Component } from 'react'
import { Provider } from 'mobx-react'
import stores from '@/store/index'
import 'taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一
import './app.scss'

class App extends Component {
  componentDidMount () { }

  componentDidShow () { }

  componentDidHide () { }

  componentDidCatchError () { }

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider {...stores}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
