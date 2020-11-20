export const state = () => ({
  locales: ['en', 'zh'],
  locale: 'zh',
  nav:1,
  path:'/',
productList:[],
  api: {
    getArticleDetail: "/article/detail", // 获取文章详情
    getArticleList: "/articleList", // 获取文章列表
    getConfig: "/page/config", // 获取页面SEO信息 OK
    getProductDetail: "/product/detail", // 获取产品详情 OK
    getProductList: "/productList", // 获取产品列表 OK
    getProductTitleList:'/productTitleList', //获取产品标题列
    submitAfterSale:'/submit/afterSale', //售后申请
  },
  pageNames: {
    index: '101',
    walkin1: '201',
    walkin2: '202',
    walkin3: '203',
    strength1: '301',
    strength2: '302',
    strength3: '303',
    strength4: '304',
    strength5: '305',
  //  product1:'401',
  //  product2:'402',
  //  product3:'403',
   technology1:'501',
   technology2:'502',
   technology3:'503',
   technology4:'504',
   technology5:'505',
   service1:'601',
   service2:'602',
   service3:'603',
   service4:'604',
   service5:'605',
   service6:'606',
  }
})


// 首页: '101',
// 走进BRI-品牌文化:'201',
// 走进BRI-招商计划:'202',
// 走进BRI-公司介绍:'203',
// 软实力: '301',
// 硬实力-工厂实力: '302',
// 硬实力-实验室: '303',
// 硬实力-四大研发: '304',
// 企业实力-荣誉见证: '305',
// 科技创新首页:'501',
// 猎毒胶囊:'502',
// 变频恒风:'503',
// 石墨烯 :'504',
// 智能控制:'505',
// 服务支持首页:'601',
// 服务支持-安装服务:'602',
// 服务支持-售后政策:'603',
// 服务支持-售后服务:'604',
// 服务支持-APP下载:'605',
// 服务支持-说明书下载:'606',

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  setNav(state,val){
 state.nav=val
  },
  setPath(state,val){
    state.path=val
     },
     setProductList(state,val){
      state.productList=val
     }
  
}
