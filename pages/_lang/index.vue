<template>
  <div class="Content">
    <div class="container">
       <el-carousel height="770px" class="swiper" :autoplay="false">
      <el-carousel-item v-for="(item,i) in swiperImg" :key="i" >
        <img :src="item" alt="" class="swiperImg">
       
      </el-carousel-item>
    </el-carousel>

     <div class="section1">
       <div class="container">
          <h2 class="title">品牌资讯</h2>
       <span class="desc">成为新风行业的标杆是我们一直的坚持</span>
       <div class="article">
          <img src="~assets/image/img1-1.png" alt="" class="pic">
          <div class="content">
              <h3 class="c_title">杀毒新风获得【消字号】认证</h3>
              <div class="tt">
                   <p >钟南山领导的广州呼研所与呼博士联合研发杀毒新风机</p>
                   <p class="mt">新风行业首家获得消字号的生产企业</p>
              </div>
              <div class="about">
                了解更多
                <img src="~assets/image/more.png" alt="">
              </div>
          </div>
       </div>
        <div class="article ">
           <div class="content">
              <h3 class="c_title">不鸣则已,“疫”鸣“净”人</h3>
              <div class="tt">
                   <p >呼博士新风迎来最大发展利好</p>
                   <p class="mt">关于奥佳华(002614.S2)子公司蒙发利健康引入保利基金为战略投资公告</p>
              </div>
              <div class="about">
                了解更多
                <img src="~assets/image/more.png" alt="">
              </div>
          </div>
          <img src="~assets/image/img1-2.png" alt="" class="pic">
         
       </div>
       </div>
       
     </div>

     <div class="section2">
          <h2 class="title">案例展示</h2>
          <span class="desc">一对一服务</span>
          <div class="imgList">
            <div class="row">
                <div class="imgItem">
                <p>别墅</p>
                <img src="~assets/image/img1-3.png" alt="">
              </div>
              <div class="imgItem">
                <p>医院病房</p>
                <img src="~assets/image/img1-4.png" alt="">
              </div>
            </div>
             <div class="row">
                <div class="imgItem">
                <p>教室</p>
                <img src="~assets/image/img1-5.png" alt="">
              </div>
              <div class="imgItem">
                <p>办公室</p>
                <img src="~assets/image/img1-6.png" alt="">
              </div>
             </div>
             
          </div>
     </div>
    </div>
  </div>
</template>

<script>
import utils from '@/utils/methods.js'
import banner1 from "@/assets/image/banner1.png";
import banner2 from "@/assets/image/banner2.png";
import banner3 from "@/assets/image/banner3.png";
export default {
  mounted(){
    utils.initWow(this)
  },
  data(){
    return{
      swiperImg:[banner1,banner2,banner3]
    }
  }
}
</script>
<style lang="less" scoped>
.swiper{
  
   width: 100%;
  
}
.swiperImg{
  width: 100%;
  height: 770px;
}
.section1{
  background: #F2F2F2;
  padding: 100px 0 150px;
  
  display: flex;
  justify-content: center;
  .container{
    display: flex;
  flex-direction: column;
  align-items: center;
    width: 1200px;
     .article{
  margin-top: 60px;
  display: flex;
  background: #fff;
    width: 100%;
       .pic{
         width: 487px;
         height: 300px;
       }
       .content{
         padding: 50px 40px 0;
           .c_title{
  
font-size: 30px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #505050;
line-height: 40px;
}
.tt {
  margin-top: 30px;
p{
font-size: 20px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color: #707070;
line-height: 28px;
width: 650px;
overflow:hidden; //超出的文本隐藏
text-overflow:ellipsis; //溢出用省略号显示
white-space:nowrap; 
}
.mt{
  margin-top: 18px;
}
}
.about{
  margin-top: 56px;
 
  
font-size: 18px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #808080;
display: flex;
align-items: center;
  img{
    width: 20px;
     height: 20px;
     
  }
}

       }
  }
  }
  
  
}

.section2{
  background: #fff;
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .imgList{
    margin-top: 78px;
    .row{
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      .imgItem{
        width: 49.7%;
        height: 587px;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        p{
          position: absolute;
          left: 36px;
          top: 30px;
          padding: 10px 20px;
          
background: #000000;
opacity: 0.5;
border-radius: 10px;

font-size: 32px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #FFFFFF;
line-height: 57px;
        }
      }
    }
    
  }
}
.title{
font-size: 40px;
font-family: Noto Sans S Chinese;
font-weight: 500;
color: #505050;
position: relative;

}

.desc{
  margin-top: 60px;
  
font-size: 20px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #909090;
line-height: 36px;
}
.title::after{
  position: absolute;
  width: 51px;
height: 2px;
border: 2px solid #808080;
content: '';
left: 50%;
top: 80px;
background: #808080;
transform: translateX(-50%);
}
/deep/ .el-carousel__button{
 width: 10px;
height: 10px;
background: #808080;
border-radius: 50%;
}
/deep/ .el-carousel__indicator.is-active button{
  background: #fff;
}
</style>
