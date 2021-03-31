import { observable } from 'mobx'

const ScrollViewContentData = observable({
    serviceList: [{
        serviceName: '宠物用品',
        serviceid: 'serviceid1',
        serviceImg: ''
    },
    {
        serviceName: '家族库',
        serviceid: 'serviceid2',
        serviceImg: ''
    },
    {
        serviceName: '宠物领养',
        serviceid: 'serviceid3',
        serviceImg: ''
    }
    ],

})
export default ScrollViewContentData;