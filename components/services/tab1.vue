<template>
    <div class="container">
        <p class="desc">呼博士资深工程师坚信：新风系统，三分靠机器，七分靠安装</p>
        <div class="contents">
           <div class="contentBox header">装修前</div>
           <div class="contentBox header">装修后</div>
           <div class="contentBox">适合中央吊顶新风</div>
           <div class="contentBox">适合壁挂式和立柜式新风</div>
           <div class="contentBox">
              免费预约现场勘查 <br>
               收集房屋面积、户型结构、客户需求等必备数据 
           </div>
           <div class="contentBox">官方免费咨询，确认所需机型<br>呼博士提供免费标准安装服务</div>
           <div class="contentBox">新风系统设计，包括风量计算、设备及风口位置等<br>确定管路管径，选择新风设备等</div>
           <div class="contentBox">选购所需新风机</div>
           <div class="contentBox">确定设计方案，预约上门时间</div>
           <div class="contentBox">预约上门时间</div>
           <div class="contentBox">安装上门，现场讲解沟通，按照设计方案和<br>《呼博士新风安装规范》进行标准作业</div>
           <div class="contentBox">安装上门，检查产品及配件<br>确认安装条件位置及开孔方案</div>
           <div class="contentBox">主机定位和风口定位</div>
           <div class="contentBox">钻孔前准备防水防尘装置，保护墙面和地面</div>
           <div class="contentBox">主机和风管安装，主机和风管连接，风口安装</div>
           <div class="contentBox">固定钻孔设备，按呼博士标准流程进行钻孔作业</div>
           <div class="contentBox">控制器开关安装</div>
           <div class="contentBox">安装保温管和密封圈等配套设施后，安装新风机</div>
           <div class="contentBox1">安装完成，现场调试，检测新风系统是否运行正常，新风量和噪音等是否正常<br>
           并讲解注意事项和售后服务</div>

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .container{
        width: 900px;

       background: #F2F2F2;
       border: 1px solid #C6C6C6;
       padding: 60px;
       .desc{
           
font-size: 18px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color: #505050;
line-height: 36px;
       }
       .contents{
           margin-top: 20px;
           width: 774px;
// height: 627px;
border: 1px solid #C3C3C3;
display: flex;
flex-wrap: wrap;
.contentBox{
    width: 50%;
    box-sizing: border-box;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #C3C3C3;
    text-align: center;
font-size: 16px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #808080;
    
}
.contentBox1{
    width: 100%;
    text-align: center;
     height: 60px;
     display: flex;
     justify-content: center;
     
font-size: 16px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #808080;
     align-items: center;
}
.contentBox:nth-child(odd){
border-right: 1px solid #C3C3C3;

}
.header{
    
font-size: 22px;
font-family: SourceHanSansCN;
font-weight: bold;
color: #FFFFFF;
background: #808080;
}
       }
    }
</style>