<template>
  <div class="container">
    <!-- <img src="~assets/image/map.png" alt="" class="map" /> -->
     <baidu-map
          :dragging="true"
          :center="center"
          :zoom="18"
          :scroll-wheel-zoom="true"
          style="height: 520px;width: 50%"
        >
          <bm-info-window :position="center" title="厦门蒙发利健康科技有限公司" :show="true"></bm-info-window>
        </baidu-map>
    <div class="cont1">
      <p class="name">厦门蒙发利健康科技有限公司</p>
      <p class="tt">
        售后热线：400-100-5582 <br>
        公司邮箱：service@bri.com.cn <br>
        公司地址：福建省厦门市同安区马垵路30号 <br>
        公司网址：www.bri.com.cn <br>
      </p>
      <img src="~assets/image/qrcode.png" alt="" class="code">
      <p class="desc">扫描二维码关注我们</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
       center: { lng: 118.114131, lat: 24.699805 },
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
  .map {
    width: 100%;
  }
  .cont1{
      // position: absolute;
      // top: 50%;
      // transform: translateY(-50%);
      // left: 65%;
      margin-left: 50px;
      .name{
          
font-size: 23px;
font-family: SourceHanSansCN;
font-weight: 550;
color: #505050;
line-height: 30px;

      }
      .tt{
          
font-size: 18px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #505050;
line-height: 30px;
margin: 10px 0;
      }
      .code{
          width: 137px;
height: 137px;
border: 1px solid #808080;
      }
      .desc{
          
font-size: 15px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #505050;
line-height: 29px;
      }
  }
}
</style>