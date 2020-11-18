<template>
  <div class="page">
    <div class="container">
        <div class="sec1 wow fadeInUp">
          <img src="~assets/image/banner3-1.png" alt="" class="banner">
          <div class="cont">
                  <div class="content1">
          <div class="Box">
            <p class="line1"></p>
            <p class="t1">NEWS</p>
            <p class="t2">品牌资讯</p>
          </div>
          <p class="t3">最新的公司资讯</p>
        
        </div>
          </div>
       
      </div>
      <div class="sec2 wow fadeInUp">
          
         <div class="container">
           <div class="dateBox">
              <p class="date">24.09.2020</p>
              <p class="line"></p>
          </div>
          <div class="contentBox">
           <img src="~assets/image/img3-1.png" alt="" class="pic">
            <div class="content1">
                <h2 class="title">呼博士新风迎来最大发展利好</h2>
                <p class="desc">关于奥佳华(002614.SZ)子公司蒙发利健康引入保碧基金为战略投资公告</p>
                <div class="con">奥佳华智能健康科技集团股份有限公司（以下简称“公司”）控股子公司厦门蒙发利健康科技有限公司（以下简称“蒙发利健康”）以增资扩股的方式引入战略投资者。2020 年 9 月 24 日，公司、蒙发利健康、厦门智宏仁企业管理合伙企业（有限合伙）（以下简称“智宏仁”）、厦门智呼企业管理合伙企业（有限合伙）（以下简称“智呼”）、公司控股股东邹剑寒先生、李五令先生与南昌市慧星股权投资合伙企业（有限合伙）（以下简称“保碧基金”）共同签署《关于蒙发利健康的增资协议》，本次投资将按照蒙发利健康的投前估值人民币 66,566.5000万元，保碧基金拟向蒙发利健康增资人民币 7,651.3218 万元，其中人民币3,365.4126 万元计入蒙发利健康新增注册资本，人民币 4,285.9092 万元计入蒙发利健康资本公积，本次交易完成后保碧基金将取得蒙发利健康 10.3093%股权。在本次增资扩股完成后，蒙发利健康注册资本由人民币 29,279.0896 万元增加至人民币 32,644.5022 万元。</div>
                <div class="showImg">
                    <img src="~assets/image/img3-2.png" alt="">
                    <img src="~assets/image/img3-3.png" alt="">
                </div>
            </div>

          </div>
          <div class="optBox">
              <div class="back">
                  <img src="~assets/image/back.png" alt="">
                  回到列表
              </div>
              <div class="go">
                  <p>上一条</p>
                  <span></span>
                  <p>下一条</p>
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
    background: #F2F2F2;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    .container{
        width: 1200px;
        .dateBox{
        display: flex;
        align-items: center;
        .date{
            
font-size: 24px;
font-family: SourceHanSansCN;
font-weight: bold;
color: #808080;
line-height: 36px;
margin-right: 30px;
        }
        .line{
   flex: 1;
   
height: 2px;
border: 2px solid #909090;
opacity: 0.5;
background: #909090;
        }
    }
    .contentBox{
        margin-top: 20px;
        background: #fff;
        .pic{
            width: 100%;
            height: auto;
        }
        .content1{
            padding: 40px;
            .title{
                
font-size: 32px;
font-family:NotoSansCJK-Bold !important;
color: #505050;
line-height: 36px;
            }
            .desc{
                
font-size: 20px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color: #808080;
line-height: 36px;
margin-top: 10px;
            }
            .con{
         margin-top: 20px;       
font-size: 16px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color: #505050;
line-height: 30px;
text-indent:2em;
            }
            .showImg{
                margin-top: 30px;
                display: flex;
                justify-content: space-between;
                img{
                    width: 49%;
                    height: auto;
                }
            }
        }
    }
    .optBox{
        display: flex;
        justify-content: space-between;
        height: 40px;
        background: #F9F9F9;
        .back{
            display: flex;
            align-items: center;
            padding: 8px;
            background: #707070;
font-size: 16px;
font-family: Adobe Heiti Std;
font-weight: normal;
color: #FFFFFF;

            img{
                width: 20px;
                height: 20px;
                
            }
        }
        .go{
            display: flex;
            align-items: center;
            margin-right: 10px;
            p{
                
font-size: 15px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #808080;
line-height: 36px;

            }
            span{
    width: 1px;
height: 15px;
border: 1px solid #808080;
background: #808080;
margin: 0 15px;
position: relative;
top: 2px;
}
        }
    }
    }
    
}
</style>