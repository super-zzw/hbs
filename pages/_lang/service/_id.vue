<template>
    <div class="page">
       <div class="sec1 wow fadeInUp">
           <img src="~assets/image/banner6-1.png" alt="" class="bg" v-if="index!=3">
           <img src="~assets/image/banner6-5.png" alt="" class="bg" v-else>
        <div class="content1" v-if="index!=3">
          <div class="Box">
            <p class="line1"></p>
            <p class="t1">Support</p>
            <p class="t2">360°无忧服务支持</p>
          </div>
          <p class="t3">呼博士为您提供售前、售中、售后360°一站式无忧服务支持，</p>
          <p class="t3">保障您随时享受健康空气，无后顾之忧。</p>
        </div>
         <div class="content1" v-else>
          <div class="Box">
            <p class="line1"></p>
            <p class="t1">INTELLIGENCE</p>
            <p class="t2">手机智能控制</p>
          </div>
          <p class="t3">匹配WIFI模块，可通过手机APP智能远程操控，</p>
          <p class="t3">回家路上，洁净之家早已准备静候您的归来。</p>
        </div>
      </div>
      <div class="sec2 wow fadeInUp">
           <img src="~assets/image/img6-0.png" alt="" class="bg">
         
            <div class="topNav">
               <h2 class="title">服务项目</h2>
               <p class="line"></p>
               <div class="navBar">
                  
                   <div v-for="(item,i) in navs" :key="i" @click="handleClick(i)" :class="index==i?'navItem active':'navItem'">
                       {{item}}
                   </div>

               </div>
           </div>
           <div class="content wow fadeInUp">
               <Tab1 v-if="index==0"/>
               <Tab2 v-if="index==1"/>
               <Tab3 v-if="index==2"/>
               <Tab4 v-if="index==3"/>
               <Tab5 v-if="index==4"/>
               <Tab6 v-if="index==5"/>
               <Tab7 v-if="index==6"/>
               
           </div>
           
      </div>
    </div>
</template>
<script>

import Tab1 from '~/components/services/tab1'
import Tab2 from '~/components/services/tab2'
import Tab3 from '~/components/services/tab3'
import Tab4 from '~/components/services/tab4'
import Tab5 from '~/components/services/tab5'
import Tab6 from '~/components/services/tab6'
import Tab7 from '~/components/services/tab7'
export default {
    components:{Tab1,Tab2,Tab3,Tab4,Tab5,Tab6,Tab7},
    mounted(){
    this.initWow(this)
  },
    data(){
        return{
            navs:['安装服务','售后政策','售后申请','App下载','说明书下载','常见问题','联系我们'],
            index:0
        }
        
    },
    created(){
       if(this.$route.params.id){
          this.index=this.$route.params.id
       }
    },
    methods:{
        handleClick(i){
            this.index=i
        }
    }
}
</script>
<style lang="less" scoped>
    .sec1 {
//   background: url(~assets/image/banner6-1.png);
  height: 760px;
  width: 100%;
//   background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  .bg{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
  }
  .content1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
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
     
      color: #CCCCCC;
      line-height: 36px;
    }
  }
}
.sec2{
    background: #EDEDED;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 80px;
    .bg{
        width: 50%;
        height: 337px;
        position: absolute;
        right: 0;
        top: 0;
    }
  
           .topNav{
       display: flex;
       flex-direction: column;
       align-items: center;
        margin-top: 120px;
        z-index: 10;
        .title{
            

font-family:NotoSansCJK-Bold !important;
color: #505050;


        }
        .line{
            height: 2px;
            width: 50px;
            background: #808080;
           margin-top: 25px;
        }
        .navBar{
            margin-top: 30px;
            display: flex;
            .navItem{
                margin-right: 40px;
                
font-size: 18px;

color: #808080;
line-height: 34px;
cursor: pointer;
            }
            .navItem:hover{
                color: #505050;
            }
            .navItem.active{
                border-bottom:2px solid #808080;
                color: #505050;
               font-family:NotoSansCJK-Bold !important;
            }
            .navItem:last-child{
                margin-right: 0;
            }
        }
    }
    .content{
        margin-top: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        
    }
   
}
</style>