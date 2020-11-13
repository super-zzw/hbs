<template>
  <div class="page">
    <div class="container">
       <div class="sec1">
        <div class="content1">
          <div class="Box">
            <p class="line1"></p>
            <p class="t1">ABOUT US</p>
            <p class="t2">关于我们</p>
          </div>
          <p class="t3">专注杀毒新风20年</p>
          <p class="t3">打造全方位健康呼吸空间</p>
        </div>
      </div>
      <div class="sec2">
         <img src="~assets/image/img2-8.png" alt="" class="pic">
         <div class="content1">
             <h2 class="title">蒙发利健康科技有限公司</h2>
             <p class="line"></p>
             <p class="con">BRI呼博士是蒙发利集团大健康产业品牌多元化战略品牌之一，</p>
             <p class="con">2011年奥佳华集团在深圳挂牌上市(股票代码:002614.SZ)。呼博</p>
             <p class="con">士专注杀毒新风20年，秉承“健康呼吸、健康生活”的企业使</p>
             <p class="con">命，现已拥有近百项杀毒检测认证和30项新风专利技术，参编</p>
             <p class="con">多项国家及地方新风行业标准制定，出口全球60+国家，为越来</p>
             <p class="con">越多的家庭和企业提供健康和高品质生活。</p>
         </div>
      </div>
      <div class="sec3">
          <div class="container">
                <h2 class="title">合作品牌</h2>
                <p class="line"></p>
                <p class="desc">你买的世界500强的产品，很可能是我们出品</p>
                <img src="~assets/image/img2-9.png" alt="">
          </div>
         
      </div>
        <div class="sec2">
        
         <div class="content1 content2">
             <h2 class="title">呼博士携手钟南山广州呼研所 </h2>
             <h2 class="title">联合研发新风系统杀毒技术</h2>
             <p class="line"></p>
             <p class="con">广州呼研所是全国领先、世界一流的呼吸研究中心，具有呼吸疾病国</p>
             <p class="con">家重点实验室和国家呼吸疾病临床医学研究中心等权威科研机构。20</p>
             <p class="con">年来，呼博士与呼研所在室内空气与呼吸疾病的病理机制，尤其是室</p>
             <p class="con">内空气病毒、细菌和有害化学物质的致病机理与防治领域进行长期深</p>
             <p class="con">度合作，创造性地将独有猎毒胶囊技术与医用HEPA滤网结合，形成</p>
             <p class="con">2+1+1层高效复合过滤杀毒，对PM2.5、冠状病毒和甲醛等几十种室</p>
             <p class="con">内空气病毒细菌和颗粒物的灭杀率高达99.9%，全方位护佑室内呼吸</p>
             <p class="con">健康。</p>
         </div>
          <img src="~assets/image/img2-10.png" alt="" class="pic">
      </div>
    </div>
      <div class="sec4">
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
  }
}
</script>
<style lang="less" scoped>
    .sec1 {
  background: url(~assets/image/banner2-3.png);
  height: 760px;
  width: 100%;
  background-size: 100% 100%;
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
        font-family: Noto Sans S Chinese;
        font-weight: 900;
        color: #FFFFFF;
        line-height: 97px;
        opacity: 1;
      }
      .t2 {
        font-size: 28px;
        font-family: Noto Sans S Chinese;
        font-weight: 500;
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
    background: #2C2C2C;
    padding: 0 360px;
    width: 100%;
    height: 530px;
    display: flex;
    justify-content: center;
    .pic{
        width: 630px;
        height: 480px;
        position: relative;
        top: 108px;
        margin-right: 67px;
    }
    .content1{
        margin-top: 170px;
        display: flex;
        flex-direction: column;
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
line-height: 45px;

    }
    .desc{
        
font-size: 18px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #808080;

    }
    img{
        width: 848px;
        height: 210px;
        margin: 30px 0 80px;
    }
    }
   
}
 .title{
       
font-size: 32px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color: #FFFFFF;
line-height: 45px;     
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
border: 2px solid #808080;
background: #808080;
margin-top: 30px;
margin-bottom: 30px;
 }
 .content1.content2{
     margin-top: 80px;
     
         margin-right: 100px;
     
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
            height: 390px;
            
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
</style>