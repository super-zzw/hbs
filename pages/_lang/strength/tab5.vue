<template>
  <div class="page">
    <div class="container">
      <div class="sec1 wow fadeInUp">
        <img src="~assets/image/banner3-5.png" alt="" class="banner">
        <div class="cont">
             <div class="content1">
          <div class="Box">
            <p class="line1"></p>
            <p class="t1">INTELLIGENCE</p>
            <p class="t2">荣誉见证</p>
          </div>
          <p class="t3">全球奖项及专利（部分）</p>
        </div>
        </div>
       
      </div>

      <div class="sec2 wow fadeInUp">
        <div class="section">
          <h2 class="title">研发实力 信心保证</h2>
          <p class="line"></p>
          <p class="desc">部分认证与资质</p>
          <div class="honorList">
            <img src="~assets/image/img3.5-1.png" alt />
            <img src="~assets/image/img3.5-2.png" alt />
            <img src="~assets/image/img3.5-3.png" alt />
            <img src="~assets/image/img3.5-4.png" alt />
            <img src="~assets/image/img3.5-5.png" alt />
            <img src="~assets/image/img3.5-6.png" alt />
            <img src="~assets/image/img3.5-7.png" alt />
            <img src="~assets/image/img3.5-8.png" alt />
          </div>
        </div>
        <div class="section wow fadeInUp">
          <h2 class="title">笃行致远 臻于至善</h2>
          <p class="line"></p>
          <!-- <div class="tabsBox">
                   <div></div>
          </div>-->
          <el-tabs v-model="activeName" @tab-click="slideto">
            <el-tab-pane label="企业资质" name="0"></el-tab-pane>
            <el-tab-pane label="研发实力" name="1"></el-tab-pane>
            <el-tab-pane label="核心认证" name="2"></el-tab-pane>
            <el-tab-pane label="产品专利" name="3"></el-tab-pane>
            <el-tab-pane label="社会荣誉" name="4"></el-tab-pane>
          </el-tabs>

          <div class="swiper-father">
            <swiper
              :options="swiperOption"
              ref="mySwiper"
              style="width:1050px;height:450px;padding-top:100px"
            >
            
                <swiper-slide v-for="(item,i) in swiperImgs" :key="i">
                     <img :src="item" alt />
                </swiper-slide>
            
            </swiper>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
          <p class="swiperTxt">
            <span>{{desc[activeSwiper]}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.initWow(this);
  },
  data() {
    return {
      activeName: "0",
      activeSwiper:3,
      swiperImgs:[
        require('~/assets/image/z1.png'),
        require("~/assets/image/z2.png"),
        require("~/assets/image/z3.png"),
        require("~/assets/image/z4.png"),
        require("~/assets/image/z5.png"),
        require("~/assets/image/z6.png"),
        require("~/assets/image/z7.png")
      ],
      desc:[
        "新风行业唯一通过国消宇号认证,真正具备生产消毒产品资质的企业",
        "新风行业唯一具有生产医疗器械资质的企业（新证重新申请中）",
        "企业生产管理符合国家质量认证中心的环境管理体系标准",
        "企业生产管理符合国家医疗器械的质量管理体系标准",
        "企业生产管理符合国家质量管理体系标准",
        "产品获得国际质量认证机构Intertek(天祥)的认证报告",
        "获得IECEE国际电工委员会安全质量认证"
      ],
      swiperOption: {
        //可见图片张数
        // spaceBetween: 100,
        slidesPerView: 5,
        // 默认选中中间一张
        centeredSlides: true,
        //无限循环
        loop: true,
        //小圆点（我此处没使用，列出供参考）
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        //自动轮播
        autoplay: {
          stopOnLastSlide: false
        },
        //上下按钮点击轮播效果
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods:{
    slideto(tab){
      this.swiper.slideTo(tab.index, 1000, false);
      this.activeSwiper = tab.index;
    }
  }
};
</script>
<style lang="less" scoped>
.cont{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
.sec1 {
  position: relative;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .content1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    .Box {
      width: 312px;
      height: 277px;
      border: 2px solid rgb(65, 65, 65);
      //   opacity: 0.2;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 27px;
      .line1 {
        width: 33px;
        height: 8px;
        background: #ffffff;
        margin-top: 60px;
        opacity: 1;
      }
      .t1 {
        white-space: nowrap;
        font-size: 44px;
      font-family:NotoSansCJK-Bold !important;
        color: #ffffff;
        line-height: 97px;
        opacity: 1;
      }
      .t2 {
        font-size: 28px;
        font-family:NotoSansCJK-Bold !important;
        color: #ffffff;
        line-height: 36px;
      }
    }
    .t3 {
      font-size: 20px;
    
      color: #cccccc;
      line-height: 36px;
    }
  }
}

.sec2 {
  background: #ededed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  .section {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 40px;
    font-family:NotoSansCJK-Bold !important;
      color: #505050;
    }
    .line {
      width: 51px;
      height: 2px;
      border: 2px solid #808080;
      background: #808080;
      margin: 30px 0 20px;
    }
    .desc {
      font-size: 18px;
      
      color: #808080;
      line-height: 34px;
    }
    .honorList {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      width: 1190px;
      img {
        width: 290px;
        height: auto;
        margin-right: 8px;
        margin-bottom: 8px;
      }
      img:nth-child(4n + 4) {
        margin-right: 0;
      }
    }
  }
}
.swiperTxt{
  margin-top: 50px;
font-size: 18px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #505050;
line-height: 34px;
}
.swiper-father {
  position: relative;
  padding: 0 100px;
  width: 100%;
  box-sizing: border-box;
}
.swiper-slide {
  transition: 1s;
  transform: scale(1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 210px;
    // height: 320px;
  }
}
//swriper自带的类名（选中时的样式）
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1.4);
  z-index: 99;
}

// .swiper-slide-active,.swiper-slide-duplicate-active{
//     transform: scale(1.4);
// }
// .swiper-slide{
//       transition:1s;
//       transform: scale(1);
//     }
.swiper-slide-prev {
  transform: scale(1.2);
  z-index: 98;
}
.swiper-slide-next {
  transform: scale(1.2);
  z-index: 98;
}
/deep/ .el-tabs__item{
  font-size: 18px;
  color: #808080;
}
/deep/ .el-tabs__item.is-active{
  color: #505050;
}
/deep/ .el-tabs__active-bar{
  background-color: #808080;
}
/deep/ .el-tabs__nav-wrap::after{
  background-color: transparent;
}
.swiper-button-next,
.swiper-button-prev{
  margin-top: 20px;
  background-size: 36px auto;
  width: 44px;
}
.swiper-button-next{
  background-image: url('../../../assets/image/next.png');
}
.swiper-button-prev{
  background-image: url('../../../assets/image/prev.png');
}
/deep/ .swiper-container{
  height: 500px!important;
}
</style>