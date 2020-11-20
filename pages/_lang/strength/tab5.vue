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
              style="width:1050px;height:500px;padding-top:60px"
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
      activeSwiper:0,
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
        },
        on:{
             
             slidePrevTransitionEnd:()=>{
               this.$nextTick(()=>{
           this.activeSwiper=this.$refs.mySwiper.$swiper.realIndex

            
            })
        },
        slideNextTransitionEnd:()=>{
          this.$nextTick(()=>{
           this.activeSwiper=this.$refs.mySwiper.$swiper.realIndex

            
            })
        },
          
        }
      }
    };
  },
  watch:{
        activeName(i){
          if(i==0){
            this.swiperImgs=[
        require('~/assets/image/z1.png'),
        require("~/assets/image/z2.png"),
        require("~/assets/image/z3.png"),
        require("~/assets/image/z4.png"),
        require("~/assets/image/z5.png"),
        require("~/assets/image/z6.png"),
        require("~/assets/image/z7.png")
      ]
      this.desc=[
        "新风行业唯一通过国消宇号认证,真正具备生产消毒产品资质的企业",
        "新风行业唯一具有生产医疗器械资质的企业（新证重新申请中）",
        "企业生产管理符合国家质量认证中心的环境管理体系标准",
        "企业生产管理符合国家医疗器械的质量管理体系标准",
        "企业生产管理符合国家质量管理体系标准",
        "产品获得国际质量认证机构Intertek(天祥)的认证报告",
        "获得IECEE国际电工委员会安全质量认证"
      ]
          }else if(i==1){
             this.swiperImgs=[
        require('~/assets/image/z2-1.png'),
        require("~/assets/image/z2-2.png"),
        require("~/assets/image/z2-3.png"),
        require("~/assets/image/z2-4.png"),
        require("~/assets/image/z2-5.png"),
        require("~/assets/image/z2-6.png"),
        require("~/assets/image/z2-7.png"),
        require("~/assets/image/z2-8.png"),
        require("~/assets/image/z2-9.png"),
        require("~/assets/image/z2-10.png"),
        require("~/assets/image/z2-11.png"),
        require("~/assets/image/z2-12.png"),
        require("~/assets/image/z2-13.png"),
        require("~/assets/image/z2-14.png"),
        require("~/assets/image/z2-15.png"),
        require("~/assets/image/z2-16.png"),
        require("~/assets/image/z2-17.png"),
        require("~/assets/image/z2-18.png"),
        require("~/assets/image/z2-19.png")
      ]
      this.desc=[
        "获得对外测试认证资质的实验室基地",
        "符合国家认可委员会对实验室检测标准",
        "研发实验室符合全球权威质量认证机构eurofins欧陆全球认证",
        "研发实验室符合欧陆实验集团ALS质量管理体系的产品耐用性测试标准",
        "焓差试验室（温湿能量交换）达到国家能量回收性能实验要求",
        "研发实验室符合AHAM（家用电器制造商协会）空气净化性能测试标准 	ACAM AC-1-2018（国际版）",
        "研发实验室符合AHAM（家用电器制造商协会）空气净化性能测试标准 	ACAM HU-1-2006（国际版）",
        "研发实验室获得美国UL（全球领先试样生产及创新材料测试认证中心）	认证",
        "研发实验室符合IEC（国际电工委员会）电器安全性测试标准",
        "研发实验室符合BSI（英国标准协会）电器安全性测试标准",
        "研发实验室符合日本电机工业协会的家用空气净化设备测试标准（成员	包括日立，东芝，松下，三菱电机，夏普，三菱重工）",
        "研发实验室符合国家的空气净化设备测试标准",
        "研发实验室符合国家的家用电器噪音测试标准",
        "研发实验室符合国家的空气能量回收测试标准",
        "研发实验室采用符合国家的家用电器噪音测试标准要求的测试系统",
        "研发实验室采用符合国家的风道性能测试系统",
        "研发实验室采用符合国家的空气动力学测试系统",
        "研发实验室符合国家的加湿设备测试标准",
        "研发实验室符合国家的家用电器整机安全性测试标准"
      ]
          }else if(i==2){
             this.swiperImgs=[
        require('~/assets/image/z3-1.png'),
        require("~/assets/image/z3-2.png"),
        require("~/assets/image/z3-3.png"),
        require("~/assets/image/z3-4.png"),
        require("~/assets/image/z3-5.png"),
        require("~/assets/image/z3-6.png"),
        require("~/assets/image/z3-7.png"),
        require("~/assets/image/z3-8.png"),
        require("~/assets/image/z3-9.png"),
        require("~/assets/image/z3-10.png"),
        require("~/assets/image/z3-11.png"),
        require("~/assets/image/z3-12.png"),
        require("~/assets/image/z3-13.png"),
        require("~/assets/image/z3-14.png"),
        require("~/assets/image/z3-15.png"),
        require("~/assets/image/z3-16.png"),
        require("~/assets/image/z3-17.png"),
        require("~/assets/image/z3-18.png"),
        require("~/assets/image/z3-19.png"),
        require("~/assets/image/z3-20.png"),
        require("~/assets/image/z3-21.png"),
        require("~/assets/image/z3-22.png"),
        require("~/assets/image/z3-23.png"),
        require("~/assets/image/z3-24.png"),
        require("~/assets/image/z3-25.png"),
        require("~/assets/image/z3-26.png"),
        require("~/assets/image/z3-27.png"),
        require("~/assets/image/z3-28.png"),
        require("~/assets/image/z3-29.png"),
        require("~/assets/image/z3-30.png"),
        require("~/assets/image/z3-31.png"),
        require("~/assets/image/z3-32.png"),
      ]
      this.desc=[
        "杀毒技术获得2018年日内瓦国际发明展金奖",
        "广州呼研所对呼博士采用的杀毒材料消杀率检测报告--《杀灭中东冠状病毒检测报告》",
        "广州呼研所对呼博士采用的杀毒材料消杀率检测报告--《杀灭流感病毒和肠道病毒检测报告》",
        "广州呼研所对呼博士采用的杀毒材料消杀率检测报告--《杀灭禽流感病毒H7N9检测报告》",
        "TUV对呼博士采用的杀毒材料消杀率检测报告--《杀灭白色念珠菌检测报告》",
        "广微测对呼博士采用对杀毒材料消杀率检测报告--《杀灭大肠埃希氏菌和金黄色葡萄球菌检测报告》",
        "广微测对呼博士采用的杀毒材料安全性检测报告--《感官刺激测试》",
        "广微测对呼博士采用的杀毒材料安全性检测报告--《阴道黏膜刺激测试》",
        "广微测对呼博士采用的杀毒材料安全性检测报告--《多次完整皮肤刺激试验报告》",
        "瑞士SGS检测集团对呼博士采用对杀毒材料消杀率检测报告--《杀灭肺炎杆菌测试报告》",
        "瑞士SGS检测集团对呼博士采用对杀毒材料消杀率检测报告--《杀灭金黄葡萄球菌测试报告》",
        "瑞士SGS检测集团对呼博士采用对杀毒材料消杀率检测报告--《杀灭肺炎杆菌测试报告》",
        "瑞士SGS检测集团对呼博士采用对杀毒材料消杀率检测报告--《杀灭金黄色葡萄菌、肺炎克雷伯氏菌、绿脓杆菌、白色念珠菌检测报告》",
        "瑞士SGS检测集团对呼博士采用对杀毒材料安全性检测报告--《皮肤刺激反应测试报告》",
        "瑞士SGS检测集团对呼博士采用对杀毒材料安全性检测报告--《急性吸入毒性测试报告》",
        "瑞士SGS检测集团对呼博士采用对杀毒材料安全性检测报告--《重金属测试报告》",
        "TUV对呼博士采用的杀毒材料的72小时长效抗菌检测报告",
        "TUV对呼博士采用的杀毒材料的30天长效抗菌检测报告",
        "TUV对呼博士采用的杀毒材料的90天长效抗菌检测报告",
        "广微测对呼博士石墨烯交换芯材料防霉性测试：效果达最高级0级",
        "广微测对呼博士石墨烯交换芯材料抗菌性测试：抗菌率99.99%",
        "瑞士SGS集团对呼博士石墨烯交换芯材料耐用性测试报告",
        "瑞士SGS集团对呼博士石墨烯交换芯材料阻燃性测试报告",
        "呼博士石墨烯交换芯膜材长达1682小时几乎无性能衰减的测试报告",
        "呼博士石墨烯交换芯长达400小时几乎无性能衰减的测试报告",
        "瑞士SGS集团对呼博士石墨烯交换芯材料环保性能测试报告-符合欧盟标准",
        "瑞士SGS集团对呼博士石墨烯交换芯材料SVHC测试报告-符合欧盟标准",
        "市场上不同材质交换芯功效对比表",
        "呼博士石墨烯交换芯多次水洗几乎无性能衰减的测试报告",
        "市面上不同材质交换芯效率对比表",
        "呼博士石墨烯交换芯模拟实际使用环境的能量交换率测试报告",
        "市场上不同材质交换芯的透过性测试对比表",
      ]
          }else if(i==3){
                  this.swiperImgs=[
        require('~/assets/image/z4-1.png'),
        require("~/assets/image/z4-2.png"),
        require("~/assets/image/z4-3.png"),
        require("~/assets/image/z4-4.png"),
        require("~/assets/image/z4-5.png"),
        require("~/assets/image/z4-6.png"),
        require("~/assets/image/z4-7.png"),
        require("~/assets/image/z4-8.png"),
        require("~/assets/image/z4-9.png"),
        require("~/assets/image/z4-10.png"),
        require("~/assets/image/z4-11.png"),
        require("~/assets/image/z4-12.png"),
        require("~/assets/image/z4-13.png"),
        require("~/assets/image/z4-14.png"),
        require("~/assets/image/z4-15.png"),
        require("~/assets/image/z4-16.png"),
        require("~/assets/image/z4-17.png"),
        require("~/assets/image/z4-18.png"),
        require("~/assets/image/z4-19.png")
      ]
      this.desc=[
        "CVC《新风最高等级认证（九星认证）》",
        "CVC《新风最高等级认证（九星认证）》",
        "呼博士整机病毒细菌消杀率高达99.99%的检测报告---《杀灭白色葡萄球菌、空气自然菌检测报告》",
        "新风产品获得国际CMF工艺设计大赛获奖证书",
        "产品技术发明专利证书",
        "产品技术发明专利证书",
        "产品技术发明专利证书",
        "产品技术发明专利证书",
        "产品技术发明专利证书",
        "产品技术发明专利证书",
        "产品技术发明专利证书",
        "产品技术发明专利证书",
        "产品技术发明专利证书",
        "产品技术发明专利证书",
        "产品技术发明专利证书",
        "产品技术发明专利证书",
        "产品技术发明专利证书",
        "产品外观设计专利证书",
        "产品外观设计专利证书"
      ]
          }else{
                 this.swiperImgs=[
        require('~/assets/image/z5-1.png'),
        require("~/assets/image/z5-2.png"),
        require("~/assets/image/z5-3.png"),
        require("~/assets/image/z5-4.png"),
        require("~/assets/image/z5-5.png"),
        require("~/assets/image/z5-6.png"),
        
      ]
      this.desc=[
        "BRI呼博士广州分公司被评定AAA企业",
        "BRI呼博士杀毒新风机被评定为室内环境污染防治、消杀、净化推荐产品",
        "获得全国质量和服务诚信优秀企业称号",
        "获厦门市科学技术局、财政局及国税总局厦门税务局颁发：高薪技术企业证书",
        "获厦门市科学技术局、财政局厦门市国资委、厦门市总工会、厦门市经济和信息化局颁发厦门市创新型（试点）企业",
        "获广州终南山基金会抗击新冠肺炎疫情工益爱心单位称号",
        
      ]
          }
        }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods:{
    slideto(tab){
      // this.swiper.slideTo(tab.index, 1000, false);
      this.activeName = tab.index;
    },
    next(){
      
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
    // font-family:NotoSansCJK-Bold !important;
      color: #505050;
    }
    .line {
      width: 51px;
      height: 2px;
      // border: 2px solid #808080;
      background: #808080;
      margin: 30px 0 30px;
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
// font-family: SourceHanSansCN;
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
</style>