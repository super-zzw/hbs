<template>
  <div class="page">
    <div class="container">
    <div class="sec0 wow fadeInUp">
          <h2 class="title">专注杀毒新风20年</h2>
         <p class="line"></p>
         <p class="con">呼博士杀毒新风机以务实工匠精神研发产品，以杀毒科技为品质根本，以创新为科技支撑，</p>
         <p class="con">呼博士专注杀毒新风20年，致力给用户提供每时每刻的健康呼吸体验。</p>
    </div>
     <!-- <img src="~assets/image/banner2-1.png" alt="" class="banner"> -->
     <div class="sec1 wow fadeInUp">
         <h2 class="title">以工匠态度坚守品牌初心</h2>
         <p class="line"></p>
         <p class="con">我们始终相信，只有用精益求精的工匠态度，</p>
         <p class="con">赋予产品人的信念与情怀，才能缔造出具有深厚底蕴和文化内涵的品牌。</p>
         <p class="con">尽社会责任，创中国名品，铸百年品牌，我们初心不变。</p>
     </div>
     <div class="sec2 wow fadeInUp">
          <h2 class="title">立足中国之根&emsp;面向海外市场</h2>
          <h2 class="title">品牌覆盖各行各业</h2>
           <p class="line"></p>
             <p class="con">众多国内外和世界500强企业多年一直采用我们核心杀毒技术，以及直接由我们OEM生产产品。</p>
         <p class="con">我们设立4大研发中心，把握创新型杀毒技术，并把它运用到每一款产品的生产中。</p>
         <p class="con">在外国设立多个销售据点，品牌足迹遍布海内外，为全球家庭和企业提供服务。</p>
     </div>
     <div class="sec3 wow fadeInUp">
         <div class="content">
             <h2 class="title">我们终将</h2>
             <h2 class="title">定义新风行业的标准</h2>
              <p class="line"></p>
             <p class="con">无论是超大建筑面积的生产基地，</p>
         <p class="con">还是拥有1000级国家标准无尘GMP车间，</p>
         <p class="con">还是世界级大型实验研发基地，</p>
         <p class="con">我们对人类健康未来充满热枕，我们的信念超越新风产品本身。</p>
         <p class="con">使命召唤我们，给新风行业树立一个更好的标杆，</p>
         <p class="con">我们终将定义新风行业的标准，</p>
         <p class="con">定能为世界的积极改变贡献自己的一份力量。</p>
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
    
    .sec0{
          background: url(~assets/image/banner2-1.png);
        height: 750px;
        width: 100%;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .title{
            
font-size: 40px;
font-family: Noto Sans S Chinese;
font-weight: 500;
color: #FFFFFF;


        }
    }
    .sec1{
        background: url(~assets/image/img2-1.png);
        height: 560px;
        width: 100%;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title{
            
font-size: 40px;
font-family: Noto Sans S Chinese;
font-weight: 500;
color: #FFFFFF;
line-height: 60px;
margin-top: 160px;
        }
       
    }
    .sec2{
         background: url(~assets/image/img2-2.png);
        height: 560px;
        width: 100%;
        background-size: 100% 100%;
         display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 150px;
        .title{
      
font-size: 40px;
font-family: Noto Sans S Chinese;
font-weight: 500;
color: #202020;
line-height: 58px;
        }
        .con{
          
color: #707070;;
        }
    }
    .sec3{
        margin-bottom: 160px;
         background: url(~assets/image/img2-3.png);
        height: 680px;
        width: 100%;
        background-size: 100% 100%;
        position: relative;
        .content{
            position: absolute;
            left: 25%;
            top:140px;
            .title{
                
font-size: 40px;
font-family: Noto Sans S Chinese;
font-weight: 500;
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
border: 2px solid #808080;
margin-top: 40px;
background: #808080;
margin-bottom: 30px;
        }
         .con{
            
font-size: 18px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color: #FFFFFF;
line-height: 36px;
        }
</style>