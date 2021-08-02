import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import TopImg from '@/image/top-title.gif'
import './index.scss'

export default class PetInfo extends Component {

  render () {
    const { petDetail, goToCatDetail } = this.props
    return (
      <View className='petInfo' >
        <View className='petDetail-info'>
          <View className='petDetail-title'><Image src={TopImg} /></View>
          <View className='petDetail-content'>
            <View className='content-name'>{petDetail.catName}</View>
            <View className='content-line'>
              <View className='line-title'>生日</View>
              <View className='line-answer'>{petDetail.birth}</View>
            </View>
            <View className='content-line'>
              <View className='line-title'>品种</View>
              <View className='line-answer'>{petDetail.variety}</View>
            </View>
            <View className='content-line'>
              <View className='line-title'>性别</View>
              <View className='line-answer'>{petDetail.gender}</View>
            </View>
            {petDetail?.catMother && <View className='content-line'>
              <View className='line-title'>父母</View>
              <View className='line-answer' onClick={() => goToCatDetail(petDetail.catFather?.catId)}>
                麻麻：<Text className='line-link'>{petDetail.catMother?.name}</Text>
              </View>
              <View className='line-answer' onClick={() => goToCatDetail(petDetail.catFather?.catId)}>
                粑粑：<Text className='line-link'>{petDetail.catFather?.name}</Text>
              </View>
            </View>}
            <View className='content-line'>
              <View className='line-title'>介绍</View>
              <View className='line-answer'>{petDetail.catSummary}</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
