// 首页 数据展示
let numbers = [
  {id: 1, number: 18, unit: '年', message: '人力薪税实践'},
  {id: 2, number: 200, unit: '+', message: '全国线下直营布点'},
  {id: 3, number: 60000, unit: '+', message: '服务用工企业'},
  {id: 4, number: 50, unit: '亿', message: '年发薪流水'},
]
 
let products = [
  {
    id: 1, 
    title: '社保薪税', 
    messages: [
      {id: 1, text: '定制化社保薪税方案设计'},
      {id: 2, text: '用工成本与风险一体管控'},
      {id: 3, text: '在线智能算薪、发薪、结算、 申报综合服务'}
    ], 
    icon: 'https://static.weibangong.com/files/5d103628141fc22956bf37af-big'
  },
  {
    id: 2, 
    title: '用工管理', 
    messages: [
      {id: 1, text: '基于人才和组织关系重塑'},
      {id: 2, text: '资深专家提供定制方案'},
      {id: 3, text: '灵活用工全场景服务平台合规化操作'}
    ], 
    icon: 'https://static.weibangong.com/files/5d103628141fc22956bf37b2-big'
  },
  {
    id: 3, 
    title: '劳动力管理', 
    messages: [
      {id: 1, text: '一体化协同办公平台'},
      {id: 2, text: '劳动力全流程云管理'},
      {id: 3, text: '切实提高员工满意度'}
    ], 
    icon: 'https://static.weibangong.com/files/5d103628141fc22956bf37b1-big'
  },
  {
    id: 4, 
    title: 'HR金融', 
    messages: [
      {id: 1, text: '自主研发的互联网saas智能薪酬工具'},
      {id: 2, text: '区别于传统发薪方式'},
      {id: 3, text: '银行合作、实名认证、资金管控、安全可靠'}
    ], 
    icon: 'https://static.weibangong.com/files/5d103628141fc22956bf37b0-big'
  },
]

let advantages = [
  {id: 1, title: '属地化交付', messages: ['200+全国直营网点', '提供属地化代缴代办']},
  {id: 2, title: '专业化方案', messages: ['18年人力薪税实践', '不断创新优化解决方案'] },
  {id: 3, title: '一体化咨询', messages: ['从战略咨询到规划落地', '与客户商业模式、组织管理方式紧密结合']}
]

let companys = [
  {id: 1, company: '霞飞诺', duty: '中国区人事总监', message: '使用不木钱包发薪以后，解决了我们发薪难的问题，很大程度上节约了时间成本和人力成本，不木钱包不愧是一款有温度的发薪工具呀！', logo: 'https://static.weibangong.com/files/5d11ea6a78b8946ae8fe1723-big'},
  {id: 2, company: '蒙牛', duty: '销售服务中心行政经理', message: '微办公让企业对一线的远程管控更加方便，行程更加真实有效。实现数据存储完整性，降低信息外泄风险。搭建企业互动沟通平台，加强沟通与协作，提升工作效率，从而增强企业综合市场竞争力。', logo: 'https://static.weibangong.com/files/5d11ea6978b8946ae8fe1720-big'},
  {id: 3, company: '广之旅', duty: '财务总监', message: '微办公现在是我们必备的 APP，每天员工都在微办公进行沟通，处理工作事务，对于我们经常不在办公室的同事，极大地方便了我们的工作，告别了纸张时代。流程化、规范化、简单易用是我使用的最大感受，只需要手指轻轻一点，我就能轻松完成工作，不会错过重要信息，这是我们选择微办公的理由! ', logo: 'https://static.weibangong.com/files/5d11ea6878b8946ae8fe171c-big'},
]
 
let dynamics = [
  {
    id: 1,
    title: '霖珑课堂·第一期：细说企业立体化用工模式设计',
    message: '昨天下午14：00，第一期霖珑课堂在北京白话小院顺利举行，白话劳动法的创始人白永亮先生担任此次嘉宾及讲师，他从两会“降税降费”的问题出发，通过社保政策的变化对企业雇员造成的影响。',
    image: 'https://static.weibangong.com/files/5d196e474812a559197374f9-big'
  },
  {
    id: 2,
    title: '公司乔迁',
    message: '5月29日-6月1日，为期4天的全国客服团队培训在霖珑云科苏州总部圆满完成，来自全国160多个城市的客服人员聚集于此，共同学习HRO系统，以期提升自己的专业度，为客户带来更好的服务。',
    image: 'https://static.weibangong.com/files/5d196e484812a559197374fb-big'
  },
  {
    id: 3,
    title: '人力资源行业分析',
    message: '5月29日-6月1日，为期4天的全国客服团队培训在霖珑云科苏州总部圆满完成，来自全国160多个城市的客服人员聚集于此，共同学习HRO系统，以期提升自己的专业度，为客户带来更好的服务。',
    image: 'https://static.weibangong.com/files/5d196e484812a559197374fa-big'
  }
]
export default [{
    url: '/mock/wck/website/numbers',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: numbers,
        success: 'success'
      }
    }
  },
  {
    url: '/mock/wck/website/products',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: products,
        success: 'success'
      }
    }
  },
  {
    url: '/mock/wck/website/advantages',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: advantages,
        success: 'success'
      }
    }
  },
  {
    url: '/mock/wck/website/companys',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: companys,
        success: 'success'
      }
    }
  },
  {
    url: '/mock/wck/website/dynamics',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: dynamics,
        success: 'success'
      }
    }
  }
]