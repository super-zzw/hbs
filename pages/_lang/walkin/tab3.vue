<template>
  <div class="page">
    <div class="container">
       <div class="sec1 wow fadeInUp">
         <img src="~assets/image/banner2-3.png" alt="" class="banner">
         <div class="cont">
            <div class="content1">
          <div class="Box">
            <p class="line1"></p>
            <p class="t1">ABOUT US</p>
            <p class="t2">{{$t("walkin3-1")}}</p>
          </div>
          <p class="t3">{{$t("walkin3-2")}}</p>
          <p class="t3">{{$t("walkin3-3")}}</p>
        </div>
         </div>
        
      </div>
      <div class="sec2 wow fadeInUp">
        <div class="container">
               <img src="~assets/image/img2-8.png" alt="" class="pic">
         <div class="content1">
             <h2 class="title">{{$t("walkin3-4")}}</h2>
             <p class="line"></p>
             <!-- <p class="con">BRI呼博士是蒙发利集团大健康产业品牌多元化战略品牌之一，</p>
             <p class="con">2011年奥佳华集团在深圳挂牌上市(股票代码:002614.SZ)。呼博</p>
             <p class="con">士专注杀毒新风20年，秉承“健康呼吸、健康生活”的企业使</p>
             <p class="con">命，现已拥有近百项杀毒检测认证和30项新风专利技术，参编</p>
             <p class="con">多项国家及地方新风行业标准制定，出口全球60+国家，为越来</p>
             <p class="con">越多的家庭和企业提供健康和高品质生活。</p> -->
             <p class="con">{{$t("walkin3-5")}}</p>
         </div>
        </div>
         
      </div>
      <div class="sec3 wow fadeInUp">
          <div class="container">
                <h2 class="title">合作品牌</h2>
                <p class="line"></p>
                <p class="desc">你买的世界500强的产品，很可能是我们出品</p>
                <img src="~assets/image/img2-9.png" alt="">
          </div>
         
      </div>
      <div class="sec5 wow fadeInUp">
         <div class="container"> 
            <h2 class="title">发展历程</h2>
            <p class="line"></p>
            <div class="contentBox">
              <div class="left">
                <div class="t1">
                   <p class="tt1">{{activeCon.year}}</p>
                   <p class="tt2">{{activeCon.title}}</p>
                </div>
                <div class="t2" v-html="activeCon.con">
                  <!-- 初步达成与钟南山关联单位股份置换战略合作。<br> 9月蒙发利实行独立经营，引进保利基金和碧桂园投资，与房地产巨头进行深度合作。<br> 5月携手钟南山医学基金会助力校园抗疫，定向捐赠价值400万元BRI呼博士杀毒新风机和空气净化器援助广州中小学校进行开学防疫。<br> 4月，以具有核心杀毒技术的新风产品为主打开始进军国内新风市场。<br> 2月携手钟南山医学基金会定向捐赠价值300万元BRI呼博士空气净化器援助武汉疫区医院，获得《抗击新冠肺炎疫情公益爱心单位》。<br>   企业生产管理符合国家质量管理体系标准，企业生产管理符合国家医疗器械的质量管理体系标准。 -->
                </div>
              </div>
              <div class="right">
                
                <swiper
              :options="swiperOption"
              ref="mySwiper"
              style="width:90px;height:350px"
            >
            
                <swiper-slide v-for="(item,i) in list" :key="i" >
                     <p>{{item.year}}</p>
                </swiper-slide>
            
            </swiper>
              </div>
            </div>
         </div>
      </div>
        <div class="sec2 sec6 wow fadeInUp">
          <div class="container">
             <div class="content1 content2">
             <h2 class="title">呼博士携手钟南山广州呼研所 </h2>
             <h2 class="title">联合研发新风系统杀毒技术</h2>
             <p class="line"></p>
             <p class="con">{{$t("walkin3-10")}}</p>
             <!-- <p class="con">广州呼研所是全国领先、世界一流的呼吸研究中心，具有呼吸疾病国</p>
             <p class="con">家重点实验室和国家呼吸疾病临床医学研究中心等权威科研机构。20</p>
             <p class="con">年来，呼博士与呼研所在室内空气与呼吸疾病的病理机制，尤其是室</p>
             <p class="con">内空气病毒、细菌和有害化学物质的致病机理与防治领域进行长期深</p>
             <p class="con">度合作，创造性地将独有猎毒胶囊技术与医用HEPA滤网结合，形成</p>
             <p class="con">2+1+1层高效复合过滤杀毒，对PM2.5、冠状病毒和甲醛等几十种室</p>
             <p class="con">内空气病毒细菌和颗粒物的灭杀率高达99.9%，全方位护佑室内呼吸</p>
             <p class="con">健康。</p> -->
         </div>
          <img src="~assets/image/img2-10.png" alt="" class="pic">
          </div>
         
      </div>
    </div>
      <div class="sec4 wow fadeInUp">
          <div class="container">
              <div class="picBox">
               <img src="~assets/image/img2-11.png" alt="" class="pic">
                <div class="picInfo">
                    <span>左：钟南山（广州呼研所所长）</span>
                    <span>右：邹剑寒（奥佳华集团董事长）</span>
                </div>
              </div>
         <div class="content1">
             <h2 class="title">呼博士践行品牌责任 </h2>
             <h2 class="title">推动行业健康发展</h2>
             <p class="line"></p>
             <p class="con">BRI呼博士以健康服务网站、健康服务APP、微信等为载体，以“室</p>
             <p class="con">内环境(家庭)空气质量调研及呼吸疾病科普中国行”为驱动点，打造</p>
             <p class="con">线上线下全渠道整合创新营销平台。BRI呼博士始终秉承“专注杀毒</p>
             <p class="con">新风20年”的品牌定位，致力于改善家庭空气质量，提供呼吸健康系统</p>
             <p class="con">服务。BRI呼博士不但注重技术和产品的研发，还推动行业健康有序</p>
             <p class="con">的可持续发展，于2016年12月12日联合中国质量检验协会等编制并</p>
             <p class="con">发布了《婴幼儿室内空气质量分级》新风净化的行业标准，为空净和</p>
             <p class="con">新风行业的规范发展做出贡献，得到全国空净行业协会的支持赞赏。</p>
         </div>
         
          </div>
         
      </div>
    </div>
</template>
<script>
export default {
  mounted(){
    this.initWow(this)
  },
  data(){
    return{
      years:[2020,2019,2018,2017,2016,2015,2014,2013,2012],
      list:[
        {
          year:'2020',
          title:'突破',
          con:`初步达成与钟南山关联单位股份置换战略合作。<br>
9月蒙发利实行独立经营，引进保利基金和碧桂园投资，与房地产巨头进行深度合作。<br>
5月携手钟南山医学基金会助力校园抗疫，定向捐赠价值400万元BRI呼博士杀毒新风机和空气净化器援助广州中小学校进行开学防疫。<br>
4月，以具有核心杀毒技术的新风产品为主打开始进军国内新风市场。<br>
2月携手钟南山医学基金会定向捐赠价值300万元BRI呼博士空气净化器援助武汉疫区医院，获得《抗击新冠肺炎疫情公益爱心单位》<br>
企业生产管理符合国家质量管理体系标准 <br>
企业生产管理符合国家医疗器械的质量管理体系标准`
        },
        {
          year:'2019',
          title:'共享',
          con:`11月 获厦门市科学技术局、财政局及国税总局厦门税务局颁发《高新技术企业证书》<br>
与日本芝浦电机签署年度合作合同，成为日电产贸易为芝浦电机中国代理商<br>
与美国安费洛传感器签署年度合同，成为美国安费洛中国代理商<br>
焓差试验室（温湿能量交换）达到国家能量回收性能实验要求<br>
新风产品获得国际CMF工艺设计大赛获奖证书<br>
产品获得国际质量认证机构Intertek（天祥）的认证报告 `

        },
         {
          year:'2018',
          title:'技术',
          con:`新风行业通过国家消字号认证，真正具备生产消毒产品资质的企业<br>
杀毒技术获得2018年日内瓦国际发明展金奖<br>
获得IECEE国际电工委员会安全质量认证<br>
企业生产管理符合国家质量认证中心的环境管理体系标准<br>
2018产品外观设计专利证书2个<br>
 `

        },
         {
          year:'2017',
          title:'科研',
          con:`蒙发利实验室获得威凯检测技术有限公司颁发《检测数据认可实验室》<br>
CVC《新风最高等级认证（九星认证）》<br>
产品技术发明专利证书9个<br>
 `
        },
        {
          year:'2016',
          title:'标准',
          con:`12月联合【中国质量检验协会】主导编制并发布《婴幼儿室内空气质量分级》标准。<br>
11月获得厦门市科学技术局、厦门市经济和信息化局等颁发《厦门市创新性（试点）企业》<br>
产品技术发明专利证书4个<br>
 `
        },
        {
          year:'2015',
          title:'诚信',
          con:`获得全国质量和服务诚信优秀企业称号<br>
企业生产管理符合国家质量认证中心的环境管理体系标准<br>
 `
        },
          {
          year:'2014',
          title:'强盛',
          con:`由广州呼吸疾病研究所、广东省室内环境卫生行业协会、广州市控烟协会联合主办，厦门BRI<br>
呼博士承办的“室内环境（家庭）空气质量调研及呼吸疾病科普中国行”大型公益活动。<br>
8月《中国室内环境（家庭）呼吸健康中国行暨BRI呼博士品牌新品发布会》。<br>
BRI呼博士杀毒新风机被评定为室内环境污染防治、消杀、净化推荐产品<br>
企业生产管理符合国家质量管理体系标准
 `
        },
        {
          year:'2013',
          title:'飞跃',
          con:`10月与钟南山领导的广州呼研所签署《产学研战略合作协议》，并联合推出呼博士杀毒新风<br>
系统，专业室内环境杀毒灭菌的BRI呼博士新风品牌顺势诞生。
 `
        },
        {
          year:'2012',
          title:'规划',
          con:`提出“融入生活，享受健康”大健康概念发展规划。`
        },
         {
          year:'2011',
          title:'上市',
          con:`深圳证券交易所挂牌上市，成为国内健康产业的上市龙头企业。`
        },
        {
          year:'2009',
          title:'科技',
          con:`蒙发利认定为国家级高新技术企业。`
        },
          {
          year:'2007',
          title:'变革',
          con:`6月蒙发利入选厦门市百强企业榜单<br>12月厦门蒙发利科技（集团）有限公司改制为厦门蒙发利科技（集团）股份有限公司`
        },
         {
          year:'2006',
          title:'变更',
          con:`变更为厦门蒙发利科技（集团）有限公司`
        },
         {
          year:'2005',
          title:'荣耀',
          con:`蒙发利荣获“福建省著名商标”称号`
        },
         {
          year:'2003',
          title:'变更',
          con:`4月更名为厦门蒙发利科技有限公司`
        },
         {
          year:'1996',
          title:'起源',
          con:`1996年，厦门蒙发利垫制品有限公司成立，进军中国大健康产业。`
        },
      ],
      activeCon:{
  year:'2020',
          title:'突破',
          con:`初步达成与钟南山关联单位股份置换战略合作。<br>
9月蒙发利实行独立经营，引进保利基金和碧桂园投资，与房地产巨头进行深度合作。<br>
5月携手钟南山医学基金会助力校园抗疫，定向捐赠价值400万元BRI呼博士杀毒新风机和空气净化器援助广州中小学校进行开学防疫。<br>
4月，以具有核心杀毒技术的新风产品为主打开始进军国内新风市场。<br>
2月携手钟南山医学基金会定向捐赠价值300万元BRI呼博士空气净化器援助武汉疫区医院，获得《抗击新冠肺炎疫情公益爱心单位》<br>
企业生产管理符合国家质量管理体系标准 <br>
企业生产管理符合国家医疗器械的质量管理体系标准`
      },
       swiperOption:{
      direction:'vertical',
       slidesPerView: 7,
        // 默认选中中间一张
        // centeredSlides: true,
        //无限循环
        loop: true,
        //小圆点（我此处没使用，列出供参考）
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        //自动轮播
        
        on:{
          click:()=>{
            console.log(this.$refs.mySwiper.$swiper)
            this.$refs.mySwiper.$swiper.slideTo(this.$refs.mySwiper.$swiper.clickedIndex)
            // this.$refs.mySwiper.$swiper.realIndex=4
        //      this.$nextTick(()=>{
        //  this.activeCon=this.list[this.$refs.mySwiper.$swiper.clickedIndex-7]

            
        //     })
           
              // console.log(this.$refs.mySwiper.$swiper.clickedIndex-7)
          },
            slidePrevTransitionEnd:()=>{
               this.$nextTick(()=>{
          this.activeCon=this.list[this.$refs.mySwiper.$swiper.realIndex]

            
            })
        },
           slideNextTransitionEnd:()=>{
           
          this.$nextTick(()=>{
            this.activeCon=this.list[this.$refs.mySwiper.$swiper.realIndex]
          //  this.activeSwiper=this.$refs.mySwiper.$swiper.realIndex
  console.log(this.$refs.mySwiper.$swiper.realIndex)
            
            })
        },
        }
        
      }
    }
   
  }
}
</script>
<style lang="less" scoped>
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    color: #fff;
    
font-size: 18px;
font-family: SourceHanSansCN;
font-weight: 400;

  }
}
.swiper-slide-active{
  border-right: 1px solid #ccc;
  height: 32px !important;
  

p{
font-size: 24px;
}
}
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

  width: 100%;
  position: relative;
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
      border: 2px solid rgb(65, 65,65);
    //   opacity: 0.2;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 27px;
      .line1 {
        width: 33px;
        height: 8px;
        background: #FFFFFF;
        margin-top: 60px;
        opacity: 1;
      }
      .t1 {
        font-size: 44px;
        font-family:NotoSansCJK-Bold !important;
        color: #FFFFFF;
        line-height: 97px;
        opacity: 1;
      }
      .t2 {
        font-size: 28px;
        font-family:NotoSansCJK-Bold !important;
        color: #FFFFFF;
        line-height: 36px;
      }
    }
    .t3 {
      font-size: 20px;
      font-family: Noto Sans S Chinese;
      font-weight: 400;
      color: #CCCCCC;
      line-height: 36px;
    }
  }
}
.sec2.sec6{
  background: #F2F2F2;
  .title{
    color: #505050;
  }
  .con{
    color: #808080;
  }
  .container .pic{
    margin-right: 0;
  }
}
.sec2{
    background: #2C2C2C;
  
    height: 530px;
    display: flex;
    justify-content: center;
    .container{
       display: flex;
    justify-content: center;
       width: 1200px;
        .pic{
        width: 568px;
        height: auto;
        position: relative;
        top: 50px;
       margin-right: 60px; 
    }
    .content1{
        justify-content: center;
        display: flex;
        flex-direction: column;
    }
    }
    .pic{
      width: 570px;
      height: 500px;
       position: relative;
        top: 97px;
    }
}
.sec3{
    background: #fff;
    display: flex;
    justify-content: center;
    .container{
      margin-top: 113px;
       display: flex;
    flex-direction: column;
    align-items: center;
       .title{
        
font-size: 36px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #505050;
line-height: 52px;

    }
    .desc{
        
font-size: 18px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #808080;
line-height:34px ;

    }
    img{
        width: 848px;
        height:auto;
        margin: 30px 0 80px;
    }
    }
   
}
 .title{
       
font-size: 36px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color: #FFFFFF;
line-height: 52px;     
 }
 .con{
     
font-size: 18px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color: #FFFFFF;
line-height: 34px;
 }
 .line{
     width: 50px;
height: 2px;
// border: 2px solid #808080;
background: #808080;
margin-top: 30px;
margin-bottom: 30px;
 }
 .content1.content2{
    //  margin-top: 80px;
     
         margin-right: 60px;
     
 }
 .sec4{
     background: #fff;
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    .container{
        display: flex;
        .picBox{
            margin-right: 30px;
          .pic{
            width: 630px;
            height:auto;
            
        }
        .picInfo{
            margin-top: 5px;
            display: flex;
            justify-content: space-between;
            span{
                
font-size: 14px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #505050;

            }
        }
        }
       
        .content1{
          .title{
             color:#505050 ; 
          }
          .con{
              color: #3C3C3C;
          }
        }
    }
 }
 .sec5{
   background: #2C2C2C;
   display: flex;
   justify-content: center;
   padding-bottom: 60px;
   .container{
     width: 1200px;
     .title{
       
font-size: 36px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #fff;
line-height: 36px;
margin-top: 80px;
     }
     .line{
       background: #fff;
     }
     .contentBox{
       display: flex;
       justify-content: space-between;

       .left{
         .t1{
           display: flex;
           align-items: flex-end;
           .tt1{          
font-size: 100px;
font-family:NotoSansCJK-Bold !important;
color: #fff;
line-height: 100px;
           }
           .tt2{
             
font-size: 60px;
font-family: SourceHanSansCN;
font-weight: 300;
color: #fff;
line-height: 80px;
           }
         }
         .t2{
        margin-top: 30px;   
font-size: 18px;
color: #fff;
line-height: 34px;
         }
       }
     }
   }
 }
</style>