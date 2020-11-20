<template>
  <div class="page">
    <div class="container">
    <div class="sec0 wow fadeInUp">
       <img src="~assets/image/banner2-1.png" alt="" class="banner">
       <div class="cont">
            <h2 class="title">{{$t("walkin1-1")}}</h2>
         <p class="line"></p>
         <p class="con">{{$t("walkin1-2")}}</p>
         <p class="con">{{$t("walkin1-3")}}</p>
       </div>
        
    </div>
     <!-- <img src="~assets/image/banner2-1.png" alt="" class="banner"> -->
     <div class="sec1 wow fadeInUp">
         <img src="~assets/image/img2-1.png" alt="" class="banner">
         <div class="cont">
               <h2 class="title">{{$t("walkin1-4")}}</h2>
         <p class="line"></p>
         <p class="con">{{$t("walkin1-5")}}</p>
         <p class="con">{{$t("walkin1-6")}}</p>
         <p class="con">{{$t("walkin1-7")}}</p>
         </div>
        
     </div>
     <div class="sec2 wow fadeInUp">
        <img src="~assets/image/img2-2.png" alt="" class="banner">
        <div class="cont">
             <h2 class="title">{{$t("walkin1-8")}}</h2>
          <h2 class="title">{{$t("walkin1-9")}}</h2>
           <p class="line"></p>
             <p class="con">{{$t("walkin1-10")}}</p>
         <p class="con">{{$t("walkin1-11")}}</p>
         <p class="con">{{$t("walkin1-12")}}</p>
        </div>
         
     </div>
     <div class="sec3 wow fadeInUp">
        <img src="~assets/image/img2-3.png" alt="" class="banner">
      
            <div class="content">
             <h2 class="title">{{$t("walkin1-13")}}</h2>
             <h2 class="title">{{$t("walkin1-14")}}</h2>
              <p class="line"></p>
             <p class="con">{{$t("walkin1-15")}}</p>
         <p class="con">{{$t("walkin1-16")}}</p>
         <p class="con">{{$t("walkin1-17")}}</p>
         <p class="con">{{$t("walkin1-18")}}</p>
         <p class="con">{{$t("walkin1-19")}}</p>
         <p class="con">{{$t("walkin1-20")}}</p>
         <p class="con">{{$t("walkin1-21")}}</p>
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
       .banner{
        width: 100%;
        height: auto;
      }
    .sec0{
     
       position: relative;
        width: 100%;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .title{
            
font-size: 40px;
// font-family:NotoSansCJK-Bold !important;
// font-weight: 500;
color: #FFFFFF;
line-height: 58px;


        }
    }
    .sec1{
        
        width: 100%;
       position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title{
            
font-size: 40px;
// font-family:NotoSansCJK-Bold !important;

color: #FFFFFF;
line-height: 58px;
// margin-top: 160px;
        }
       
    }
    .sec2{
       position: relative;
        width: 100%;
     
         display: flex;
        flex-direction: column;
        align-items: center;
       
        .title{
      
font-size: 40px;
// font-family:NotoSansCJK-Bold !important;
// font-weight: 500;
color: #202020;
line-height: 58px;
        }
        .con{
          
color: #707070;;
        }
    }
    .sec3{
        margin-bottom: 160px;
        
        width: 100%;
       
        position: relative;
        .content{
            position: absolute;
            left: 25%;
            top:50%;
            transform: translateY(-50%);
            .title{
                
font-size: 40px;
// font-family:NotoSansCJK-Bold !important;
color: #202020;
line-height: 60px;
            }
            .con{
          
color: #707070;;
        }
        }

    }
    .line{
            width: 51px;
height: 2px;

// margin-top: 40px;
background: #808080;
margin: 30px 0;
        }
         .con{
            
font-size: 18px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color: #FFFFFF;
line-height: 36px;
        }
</style>