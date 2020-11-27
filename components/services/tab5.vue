<template>
    <div class="container">
      <div class="cont1">
          <img src="~assets/image/img6.6-1.png" alt="">
           <p class="name">EH-Z-7B200F-说明书</p> 
           <a class="download" href="http://www.bri.com.cn/static/EH-Z-7B200F-说明书.pdf" download> 立即下载</a>
      </div>
      <div class="cont1">
          <img src="~assets/image/img6.6-2.png" alt="">
           <p class="name">XS-D350A-说明书</p> 
           <a class="download" href="http://www.bri.com.cn/static/XS-D350A 说明书.pdf" download>立即下载</a>
      </div>
      <div class="cont1">
          <img src="~assets/image/img6.6-3.png" alt="">
           <p class="name">EH-Z-7G750-说明书</p> 
           <a class="download" href="http://www.bri.com.cn/static/EH-Z-7G750-说明书.pdf" download>立即下载</a>
      </div>
      <div class="cont1">
          <img src="~assets/image/img6.6-4.png" alt="">
           <p class="name">EH-Z-7G400-说明书</p> 
           <a class="download" href="http://www.bri.com.cn/static/EH-Z-7G400说明书.pdf" download>立即下载</a>
      </div>
    </div>
</template>
<script>
export default {
    methods:{
        download(){
       
        }
    }
}
</script>
<style lang="less" scoped>
 .container{
     display: flex;
     justify-content: center;
     .cont1{
        width: 218px;
height: 308px;
background: #FFFFFF;
border: 1px solid #CCCCCC;
margin-right: 30px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
img{
    width: 184px;
    height: 184px;
}
.name{
    
font-size: 18px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color: #505050;
line-height: 36px;
margin-bottom: 5px;
}
.download{
 width: 88px;
height: 28px;   
border: 1px solid #ccc;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
color: #808080;
text-decoration: none;
}
     }
     .cont:last-child{
         margin-right: 0;
     }
 }
</style>