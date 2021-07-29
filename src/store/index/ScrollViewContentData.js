import {
  observable
} from 'mobx'
import swipter from '@/image/swiper3.jpeg'

const ScrollViewContentData = observable({
  serviceList: [
    {
      id: 'service1',
      serviceName: '宠物用品',
      serviceid: 'serviceid1',
      serviceImg: swipter
    },
    {
      id: 'service2',
      serviceName: '家族库',
      serviceid: 'serviceid2',
      serviceImg: swipter
    },
    {
      id: 'service3',
      serviceName: '猫咪领养',
      serviceid: 'serviceid3',
      serviceImg: swipter
    },
    {
      id: 'service4',
      serviceName: '猫咪寄养',
      serviceid: 'serviceid4',
      serviceImg: swipter
    },
  ],
  fosterCenterList: [{
    serviceName: '雪糕家的猫舍',
    serviceid: 'fosterid1',
    serviceImg: swipter
  }, ],
  adoptList: [{
      serviceName: '贝贝',
      serviceid: 'adopt1',
      serviceImg: swipter
    },
    {
      serviceName: '雪糕',
      serviceid: 'adopt2',
      serviceImg: swipter
    },
    {
      serviceName: '果冻',
      serviceid: 'adopt3',
      serviceImg: swipter
    },
    {
      serviceName: '螺狮（carlos)',
      serviceid: 'adopt4',
      serviceImg: swipter
    },
  ],
})
export default ScrollViewContentData;
