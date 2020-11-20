<template>
    <div class="page">
       <div class="sec1 wow fadeInUp">
           <img src="~assets/image/banner6-1.png" alt="" class="banner">
           <div class="cont">
                  <div class="content1">
          <div class="Box">
            <p class="line1"></p>
            <p class="t1">SUPPORT</p>
            <p class="t2">360°无忧服务支持</p>
          </div>
          <p class="t3">呼博士为您提供售前、售中、售后360°一站式无忧服务支持，</p>
          <p class="t3">保障您随时享受健康空气，无后顾之忧。</p>
        </div>
           </div>
       
      </div>
      <div class="sec2 ">
          <div class="container">
              <div class="service wow fadeInUp">
                  <div class="title">
                      <h2>服务项目</h2>
                      <span></span>
                  </div>
                  <div class="content1">
                     <nuxt-link class="serviceItem" to="/service/0">
                        
                        <img src="~assets/image/icon6.1-2.png" alt="">
                        <p class="name">安装服务</p>
                        <p class="desc">上门安装检测服务</p>
                        
                       
                     </nuxt-link>
                      <nuxt-link class="serviceItem" to="/service/1">
                        <img src="~assets/image/icon6.1-5.png" alt="">
                         <p class="name">售后政策</p>
                        <p class="desc">售后服务政策介绍</p>
                     </nuxt-link>
                      <nuxt-link class="serviceItem" to="/service/2">
                        <img src="~assets/image/icon6.1-4.png" alt="">
                         <p class="name">售后服务</p>
                        <p class="desc">在线申请售后服务</p>
                     </nuxt-link>
                      <nuxt-link class="serviceItem" to="/service/3">
                        <img src="~assets/image/icon6.1-1.png" alt="">
                         <p class="name">App下载</p>
                        <p class="desc">下载手机智能App</p>
                     </nuxt-link>
                      <nuxt-link class="serviceItem" to="/service/4">
                        <img src="~assets/image/icon6.1-3.png" alt="">
                         <p class="name">说明书下载</p>
                        <p class="desc">电子说明书在线下载</p>
                     </nuxt-link>
                  </div>
              </div>

              <div class="questions wow fadeInUp">
                  <div class="title">
                      <h2>常见问题</h2>
                      <span></span>
                  </div>
                  <div class="content1">
                      <div class="quesItem">
                          <div class="cont2">
                               <img src="~assets/image/icon6.1-6.png" alt="">
                              <div class="right">
                                  <p class="title">新风常识</p>
                                  <p class="ques">什么是新风系统？为什么需要新风系统？</p>
                                  <p class="ques">新风机与净化器有什么区别？新风系统能为家人的健康做什么？</p>
                              </div>
                          </div>
                      </div>
                      <div class="quesItem">
                          <div class="cont2">
                             <img src="~assets/image/icon6.1-7.png" alt="">
                             
                              <div class="right">
                                  <p class="title">工作原理</p>
                                  <p class="ques">呼博士新风系统工作原理 ；高效空气过滤系统工作原理；</p>
                                  <p class="ques">猎毒胶囊技术特点；全热石墨烯能量交换工作原理。</p>
                              </div>
                          </div>
                      </div>
                      <div class="quesItem">
                          <div class="cont2">
                            <img src="~assets/image/icon6.1-8.png" alt="">
                              <div class="right">
                                  <p class="title">安装使用</p>
                                  <p class="ques">各机风量匹配多大房间 ？已装修房子还能安装新风吗？</p>
                                  <p class="ques">夏天使用会影响室内温度吗？生完小孩还能装新风系统吗？</p>
                              </div>
                          </div>
                      </div>
                         <div class="quesItem">
                          <div class="cont2">
                              <img src="~assets/image/icon6.1-9.png" alt="">
                              <div class="right">
                                  <p class="title">售后维护</p>
                                  <p class="ques">呼博士新风售出的设备保修时间是多久？</p>
                                  <p class="ques">在使用新风的过程中更换滤芯的周期是多久？</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="contact wow fadeInUp">
                   <div class="title">
                      <h2>联系客服</h2>
                      <span></span>
                  </div>
                  <div class="content1">
                      <div class="contactItem">
                          <img src="~assets/image/icon6.1-10.png" alt="">
                          <p class="name">在线客服</p>
                          <p class="time">09:00-18:00</p>
                      </div>
                      <div class="contactItem">
                          <img src="~assets/image/icon6.1-11.png" alt="">
                          <p class="name">官方微博</p>
                          <p class="time">09:00-18:00</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>	
    </div>
</template>
<script>
export default {
    mounted(){
    this.initWow(this)
  }
}
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
.sec2{
    background: #EDEDED;
    display: flex;
    justify-content: center;
    .container{
        width: 1200px;
        padding-top: 100px;
        padding-bottom: 130px;
        .service{
           .content1{
              
height: 234px;
background: #F4F4F4;
border: 1px solid #CCCCCC;
width: 100%;
display: flex;
.serviceItem{
    flex: 1;
    display: flex;
  align-items: center;
  flex-direction: column;
  border-right: 1px solid #CCCCCC;
 text-decoration: none;
   margin: 50px 0;
  
   
           img{
        width: 46px;
        height: 46px;
        margin-bottom: 20px;
    }
    .name{
        
font-size: 20px;
font-family:NotoSansCJK-Bold !important;
color: #505050;
line-height: 34px;
    }
    .desc{
        
font-size: 16px;

color: #808080;
line-height: 34px;
    }
    
  
}
.serviceItem:last-child{
     border-right: none
}
           }
        }

        .questions{
            margin-top: 80px;
            .content1{
                background: #F4F4F4;
                margin-top: 30px;
                border: 1px solid #CCCCCC;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                box-sizing: border-box;
                
border-right: 0;
                .quesItem{
                    width: 50%;
                    border-right:1px solid #CCCCCC ;
                    border-bottom:1px solid #CCCCCC;
                    display: flex;
                    
                    padding: 50px 0 50px 50px;
                    .cont2{
                        display: flex;
                        align-items: center;
                       
                        img{
                            width: 40px;
                            height: 40px;
                            margin-right: 30px;
                        }
                        .right{
                            .title{
                                
font-size: 20px;
font-family:NotoSansCJK-Bold !important;
color: #505050;
line-height: 34px;
margin-bottom: 5px;
                            }
                            .ques{
                                
font-size: 16px;

color: #808080;
line-height: 24px;
                            }
                        }
                    }
                }
                .quesItem:nth-child(n+3){
                     border-bottom:none
                }
            }
        }

        .contact{
            margin-top: 70px;
            .content1{
                 background: #F4F4F4;
            
                border: 1px solid #CCCCCC;
                width: 100%;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
               padding: 30px 0;
                .contactItem{
                    width: 50%;
                    display: flex;
                    justify-content: center;
                     align-items: center;
                     img{
                         width: 36px;
height: 32px;
margin-right: 20px;
                     }
                     .name{
                         
font-size: 20px;
font-family:NotoSansCJK-Bold !important;
color: #505050;
margin-right: 20px;

                     }
                     .time{
                         
font-size: 16px;

color: #808080;

                     }
                }
                .contactItem:first-child{
                  border-right: 1px solid #CCCCCC;
                }
            }
        }
       .title{
                display: flex;
              align-items: flex-end;
              margin-bottom: 30px;
           h2{
              
font-size: 32px;

color: #505050;
           }
           span{
               
height: 2px;
background:#808080;
flex: 1;
position: relative;
top: -10px;
margin-left: 5px;
           }
       }
        
    }
}
</style>