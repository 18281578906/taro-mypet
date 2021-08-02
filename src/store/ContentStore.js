import { action, observable } from 'mobx';
import swipter from '@/image/swiper3.jpeg'
import swiper1 from '@/image/swiper1.jpeg'
import swiper2 from '@/image/swiper2.jpeg'

class ContentStore {
  //首页-轮播
  @observable imageList = [
    {
      image: swiper1
    },
    {
      image: swipter
    },
    {
      image: swiper2
    }
  ]
  //服务列表
  @observable serviceList = [
    {
      id: 'petSuppliesList',
      serviceName: '宠物用品',
      serviceImg: swipter
    },
    {
      id: 'familyList',
      serviceName: '家族库',
      serviceImg: swipter
    },
    {
      id: 'saleList',
      serviceName: '待售猫咪',
      serviceImg: swipter,
    },
    {
      id: 'fosterList',
      serviceName: '猫咪寄养',
      serviceImg: swipter
    },
  ];
  //寄养中心
  @observable fosterCenterList = [
    {
      serviceName: '果冻雪糕の猫舍',
      serviceid: 'fosterid1',
      serviceImg: swipter
    },
  ];
  //领养明星
  @observable adoptList = [{
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
  ];
  //种猫信息
  @observable BreedinCatList = [{
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
  ];
  //所有猫咪信息列表
  @observable catList = [
    {
      id: 'sale1',
      catName: '小白',
      serviceid: 'saleList',
      catImg: swipter,
      catMother: {
        name: '雪糕',
        catId: 'xuegao'
      },
      catFather: {
        name: '果冻',
        catId: 'guodong',
      },
      catSummary: '长毛渐层宝宝，带银点血，眼睛蓝度3左右，两针疫苗，三月大，随时去新家',
      catPrice: '2000',
      gender: '弟弟',
      birth: '2021-4-27',
      variety: '英长银点渐层',
      imageList: [
        {
          image: swiper1
        },
        {
          image: swipter
        },
        {
          image: swiper2
        }
      ]
    },
    {
      id: 'sale2',
      catName: '琴儿',
      serviceid: 'saleList',
      catImg: swipter,
      catMother: {
        name: '雪碧',
        catId: 'xuegao'
      },
      catFather: {
        name: '果冻',
        catId: 'guodong',
      },
      catSummary: '英短银渐层宝宝，绿眼，两周大，可预定，一针疫苗后去新家，雪碧的第一窝宝宝，大头，精品',
      catPrice: '1800',
      gender: '弟弟',
      birth: '2021-7-17',
      variety: '英短银渐层',
      imageList: [
        {
          image: swiper1
        },
        {
          image: swipter
        },
        {
          image: swiper2
        }
      ]
    },
    {
      id: 'sale3',
      catName: '棋棋',
      serviceid: 'saleList',
      catImg: swipter,
      catMother: {
        name: '雪碧',
        catId: 'xuegao'
      },
      catFather: {
        name: '果冻',
        catId: 'guodong',
      },
      catSummary: '英短银渐层宝宝，绿眼，两周大，可预定，一针疫苗后去新家，雪碧的第一窝宝宝，大头，精品',
      catPrice: '1800',
      gender: '弟弟',
      birth: '2021-7-17',
      variety: '英短银渐层',
      imageList: [
        {
          image: swiper1
        },
        {
          image: swipter
        },
        {
          image: swiper2
        }
      ]
    },
    {
      id: 'sale4',
      catName: '书儿',
      serviceid: 'saleList',
      catImg: swipter,
      catMother: {
        name: '雪碧',
        catId: 'xuegao'
      },
      catFather: {
        name: '果冻',
        catId: 'guodong',
      },
      catSummary: '英短银渐层宝宝，绿眼，两周大，可预定，一针疫苗后去新家，雪碧的第一窝宝宝，大头，精品',
      catPrice: '1800',
      gender: '弟弟',
      birth: '2021-7-17',
      variety: '英短银渐层',
      imageList: [
        {
          image: swiper1
        },
        {
          image: swipter
        },
        {
          image: swiper2
        }
      ]
    },
    {
      id: 'sale5',
      catName: '画儿',
      serviceid: 'saleList',
      catImg: swipter,
      catMother: {
        name: '雪碧',
        catId: 'xuegao'
      },
      catFather: {
        name: '果冻',
        catId: 'guodong',
      },
      catSummary: '英短银渐层宝宝，绿眼，两周大，可预定，一针疫苗后去新家，雪碧的第一窝宝宝，大头，精品',
      catPrice: '2200',
      gender: '妹妹',
      birth: '2021-7-17',
      variety: '英短银渐层',
      imageList: [
        {
          image: swiper1
        },
        {
          image: swipter
        },
        {
          image: swiper2
        }
      ]
    },
    {
      id: 'guodong',
      catName: '果冻',
      serviceid: 'familyList',
      catImg: swipter,
      catSummary: '英短银渐层宝宝，绿眼，两周大，可预定，一针疫苗后去新家，雪碧的第一窝宝宝，大头，精品',
      catPrice: '1800',
      gender: '弟弟',
      birth: '2021-7-17',
      variety: '英短银渐层',
      imageList: [
        {
          image: swiper1
        },
        {
          image: swipter
        },
        {
          image: swiper2
        }
      ]
    },
    {
      id: 'xuegao',
      catName: '雪糕',
      serviceid: 'familyList',
      catImg: swipter,
      catSummary: '英短银渐层宝宝，绿眼，两周大，可预定，一针疫苗后去新家，雪碧的第一窝宝宝，大头，精品',
      catPrice: '1800',
      gender: '妹妹',
      birth: '2021-7-17',
      variety: '英短银渐层',
      imageList: [
        {
          image: swiper1
        },
        {
          image: swipter
        },
        {
          image: swiper2
        }
      ]
    },
    {
      id: 'xuebi',
      catName: '雪碧',
      serviceid: 'familyList',
      catImg: swipter,
      catSummary: '英短银渐层宝宝，绿眼，两周大，可预定，一针疫苗后去新家，雪碧的第一窝宝宝，大头，精品',
      catPrice: '1800',
      gender: '妹妹',
      birth: '2021-7-17',
      variety: '英长银渐层，金吉拉',
      imageList: [
        {
          image: swiper1
        },
        {
          image: swipter
        },
        {
          image: swiper2
        }
      ]
    },
  ]

  //获取待售猫咪列表
  @observable waitSaleList = [];
  @action getPetList = (serviceid) => {
    console.log(serviceid);
    this.waitSaleList = [];
    this.catList.forEach((item) => {
      if (item.serviceid === serviceid && serviceid === 'saleList') {
        this.waitSaleList.push(item);
      }
    })
    return this.waitSaleList;
  }

  //获取种猫信息列表
}

export default ContentStore 