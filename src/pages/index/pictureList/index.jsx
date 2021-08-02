import { View, Image } from '@tarojs/components'
import { Component } from 'react'
import Taro from '@tarojs/taro'
import { inject, observer } from 'mobx-react'
import './index.scss'


@inject('contentStore')
@observer
export default class Navbar extends Component {
  state = {
    petDetail: {}
  }
  componentDidMount () {
    const pageUrl = (Taro.getCurrentInstance().router).params;
    const petId = pageUrl.petId;
    this.getCatDetail(petId)
  }

  getCatDetail = (petId) => {
    const { contentStore: { catList } } = this.props
    catList.forEach(item => {
      if (item.id === petId) {
        console.log(item);
        this.setState({
          petDetail: item,
        })
        Taro.setNavigationBarTitle({
          title: `${item.catName}の介绍`
        })
      }
    })
  }


  render () {
    const { petDetail } = this.state
    console.log(petDetail);
    return (
      <View className='picture-list'>
        {
          petDetail && petDetail?.imageList && petDetail?.imageList.map((item) => {
            return <Image mode='widthFix' src={item.image} />
          })
        }
      </View>
    );
  }
}
