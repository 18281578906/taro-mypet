import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import NavBar from '@/component/Navbar'
import ContentPanel from '@/component/ContentPanel'
import { inject, observer } from 'mobx-react'
import { AtList, AtListItem } from 'taro-ui'
import './index.scss'


@inject('contentStore')
@observer
export default class PetList extends Component {
  state = {
    petList: [],
  }
  async componentDidMount () {
    const pageUrl = (Taro.getCurrentInstance().router).params;
    const serviceid = pageUrl.serviceid || '';
    const serviceName = pageUrl.serviceName || '列表'
    const { contentStore: { getPetList } } = this.props
    const petList = await getPetList(serviceid)
    console.log(petList);
    this.setState({
      petList,
    })
    Taro.setNavigationBarTitle({
      title: serviceName
    })
    console.log(petList);
  }

  goToPetDetail = (petId) => {
    Taro.navigateTo({
      url: '../petDetail/index?petId=' + petId
    })

  }
  render () {
    const { petList } = this.state;
    return (
      <View className='petList' >
        <ContentPanel>
          {petList.length ? <AtList>
            {
              petList.map((item) => {
                return (
                  <View className='list-item' onClick={() => this.goToPetDetail(item.id)}>
                    <Text className='cat-gender'>({item.gender})</Text>
                    <AtListItem
                      title={item.catName}
                      arrow='right'
                      extraText="¥1800"
                      note={item.catSummary}
                      thumb={item.catImg}
                      key={item.id}
                    />
                  </View>
                )
              })
            }
          </AtList>
            : <View className='empty-world'>暂无数据</View>
          }
        </ContentPanel>
      </View>
    )
  }
}
