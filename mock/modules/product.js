// 所有产品与服务
let products = [
  {
    id: 1, 
    active: true,
    title: '薪社汇', 
    url: 'https://xinshehui.linlongyun.com', 
    message: '社保薪税一站式服务平台', 
    logo: 'https://static.weibangong.com/files/5d26f0211bd86557c9076a9e-big',
    image: 'https://static.weibangong.com/files/5d12e82934978308bfb28032-big'
  },
  {
    id: 2, 
    title: '乐接活', 
    url: 'https://lejiehuo.linlongyun.com', 
    message: '灵活用工全场景服务平台', 
    logo: 'https://static.weibangong.com/files/5d26d3454e3a1e78024d711f-big',
    image: 'https://static.weibangong.com/files/5d12e82834978308bfb28030-big'
  },
  {
    id: 3, 
    title: '微办公', 
    url: 'https://www.weibangong.com/web-static/main/index.html', 
    message: '智能一体化移动办公平台', 
    logo: 'https://static.weibangong.com/files/5d26d3454e3a1e78024d7120-big',
    image: 'https://static.weibangong.com/files/5d12e82834978308bfb28031-big'
  },
  {
    id: 4, 
    title: '不木钱包', 
    url: 'https://bumuqianbao.linlongyun.com', 
    message: '能发薪会查薪的智能发薪平台', 
    logo: 'https://static.weibangong.com/files/5d26d3464e3a1e78024d7122-big',
    image: 'https://static.weibangong.com/files/5d12e82934978308bfb28033-big'
  },
]
 
export default [{
    url: '/mock/wck/website/all_products',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: products,
        success: 'success'
      }
    }
  },
  
]