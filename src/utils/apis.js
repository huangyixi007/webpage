import service from './service';

// 首页 数据
export const getNumbers =()=>service('/mock/wck/website/numbers',"POST") ;

// 首页 产品与服务
export const getProducts =()=>service('/mock/wck/website/products',"POST") ;

// 首页 我们的优势
export const getAdvantages =()=>service('/mock/wck/website/advantages',"POST") ;

// 首页 他们眼中的霖珑
export const getCompanys =()=>service('/mock/wck/website/companys',"POST") ;

// 首页 霖珑动态
export const getDynamics =()=>service('/mock/wck/website/dynamics',"POST") ;

// 产品与服务 列表展示
export const getAllProducts =()=>service('/mock/wck/website/all_products',"POST") ;

// 霖珑动态 媒体报道列表
export const getMedias =()=>service('/mock/wck/website/medias',"POST") ;

// 霖珑动态 媒体报道详情
export const getDynamicsDetails =(params)=>service('/mock/wck/website/medias_details',"POST", params) ;

// Hr洞察 行业资讯
export const getIndustrys =()=>service('/mock/wck/website/industrys',"POST") ;

// Hr洞察 行业资讯 详情
export const getIndustrysDetails =(params)=>service('/mock/wck/website/industrys_details',"POST", params) ;

// Hr洞察 Hr社群
export const getCommunitys =()=>service('/mock/wck/website/communitys',"POST") ;

// 社会责任 社会责任价值
export const getSocials =()=>service('/mock/wck/website/socials',"POST") ;

// 社会责任 社会公益
export const getBenefits =()=>service('/mock/wck/website/benefits',"POST") ;

// 关于我们 团队成员
export const getTeam =()=>service('/mock/wck/website/team',"POST") ;

// 关于我们 发展历程
export const getDevelops =()=>service('/mock/wck/website/develops',"POST") ;

// 关于我们 专家团队
export const getExperts =()=>service('/mock/wck/website/experts',"POST") ;

// 关于我们 企业价值观
export const getValues =()=>service('/mock/wck/website/values',"POST") ;

// 测试 GET
export const getGithub = ()=> service('/api/users/chengzao', 'GET')