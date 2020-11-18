<template>
  <div class="Content">
    <div class="container">
       <el-carousel :height="height" class="swiper wow fadeInUp" :autoplay="false" cla>
      <el-carousel-item v-for="(item,i) in swiperImg" :key="i" >
        <img :src="item" alt="" class="swiperImg">
       
      </el-carousel-item>
    </el-carousel>
     <div class="section1 wow fadeInUp">
       <div class="container1 ">
            <h2 class="title">{{$t('index1')}}</h2>
             <div class="box">
                <div class="con">
                  <img src="~assets/image/img1-7.png" alt="" class="bg">
                 
                      <p class="name">{{$t('index2')}}</p>
                      <p class="line"></p>
                      <p class="desc">{{$t('index4')}}</p>
                      <div class="more">{{$t('liaojie')}}
                        <img src="~assets/image/right.png" alt="">
                      </div>
                
                </div>
                 <div class="con">
                  <img src="~assets/image/img1-8.png" alt="" class="bg">
                  <!-- <div class="cont"> -->
                      <p class="name">{{$t('index3')}}</p>
                      <p class="line"></p>
                      <p class="desc">{{$t('index5')}}</p>
                      <div class="more">{{$t('liaojie')}}
                        <img src="~assets/image/right.png" alt="">
                      </div>
                  <!-- </div> -->
                </div>
                 <div class="con">
                  <img src="~assets/image/img1-9.png" alt="" class="bg">
                  <!-- <div class="cont"> -->
                      <p class="name">{{$t('index3')}}</p>
                      <p class="line"></p>
                      <p class="desc">{{$t('index6')}}</p>
                      <div class="more">{{$t('liaojie')}}
                        <img src="~assets/image/right.png" alt="">
                      </div>
                  <!-- </div> -->
                </div>
             </div>
       </div>
       <div class="container mt">
        <h2 class="title">{{$t('index8')}}</h2>
       <span class="desc">{{$t('index9')}}</span>
       <div class="article">
          <img src="~assets/image/img1-1.png" alt="" class="pic">
          <div class="content">
              <h3 class="c_title">{{$t('index10')}}</h3>
              <div class="tt">
                   <p >{{$t('index11')}}</p>
                   <p class="mt">{{$t('index12')}}</p>
              </div>
              <div class="about">
                {{$t('liaojie')}}
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
                {{$t('liaojie')}}
                <img src="~assets/image/more.png" alt="">
              </div>
          </div>
          <img src="~assets/image/img1-2.png" alt="" class="pic">
         
       </div>
       </div>
       
     </div>

     <div class="section2 wow fadeInUp">
          <h2 class="title">{{$t('index16')}}</h2>
          <span class="desc">{{$t('index17')}}</span>
          <div class="imgList">
            <div class="row">
                <div class="imgItem">
                <p>{{$t('index18')}}</p>
                <img src="~assets/image/img1-3.png" alt="">
              </div>
              <div class="imgItem">
                <p>{{$t('index19')}}</p>
                <img src="~assets/image/img1-4.png" alt="">
              </div>
            </div>
             <div class="row">
                <div class="imgItem">
                <p>{{$t('index20')}}</p>
                <img src="~assets/image/img1-5.png" alt="">
              </div>
              <div class="imgItem">
                <p>{{$t('index21')}}</p>
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
     this.getAutoHeight()
      window.onresize=()=>{
         this.getAutoHeight()
      }
  },

methods:{
 getAutoHeight(){
     let _w = document.documentElement.clientWidth || document.body.clientWidth; ; 
     this.height = _w * 770 / 1920 + 'px';
  }
},
  data(){
    return{
      swiperImg:[banner1,banner2,banner3],
      height:'',
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
  // height: 770px;
  height: 100%;
}

.section1{
  background: #F2F2F2;
  padding: 100px 0 150px;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  .mt{
    margin-top: 100px;
  }
  .container1{
    display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
    .box{
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 80px;
      z-index: 10;
      .con{
      width: 630px;
        height: 520px;
background: #000000;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
margin-right: 15px;
.bg{
 
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  
}
.name{

font-size: 40px;
font-weight: 400;
color: #FFFFFF;
line-height: 68px;
z-index: 10;
margin-bottom: 10px;
}
.line{
  width: 40px;
height: 2px;
background: #DCDCDC;
z-index: 10;
}
.desc{
  
background: rgba(255, 2555, 2555, 0.3);
z-index: 10;
font-size: 20px;

font-weight: 400;
color: #FFFFFF;
// line-height: 68px;
padding: 5px;

}
.more{
  z-index: 10;
  margin-top: 40px;
  
font-size: 16px;

font-weight: normal;
color: #FFFFFF;
line-height: 68px;
display: flex;
align-items: center;
img{
  width: 20px;
  height: 20px;
}
}
      }
      .con:last-of-type{
        margin-right: 0;
      }
    }
  }
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
        //  height: 300px;
       }
       .content{
         padding: 50px 40px 0;
           .c_title{
  
font-size: 30px;

font-weight: 400;
color: #505050;
line-height: 40px;
}
.tt {
  margin-top: 30px;
p{
font-size: 20px;

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
        // height: 587px;
        position: relative;
        img{
          width: 100%;
          height: auto;
        }
        p{
          position: absolute;
          left: 36px;
          top: 30px;
          padding: 4px 24px;
          
background: rgba(0, 0, 0, 0.5);
border-radius: 10px;

font-size: 32px;

font-weight: 400;
color: #FFFFFF;
// line-height: 57px;
        }
      }
    }
    
  }
}
.title{
font-size: 40px;


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
