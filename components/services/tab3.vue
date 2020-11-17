<template>
    <div class="container">
       <div class="desc">如果您在使用呼博士新风系列产品的过程中出现产品故障、耗材更换、移机等安装维护问题时，请拨打400-100-5582热线电话、或联系当地体验门店、或填写如下售后申请表格，我们将迅速为您提供最佳的解决方案。</div>
       <div class="content">
          <div class="box box1">
              <p class="label">您的姓名</p>
               <input type="text" v-model="formData.name">
          </div>
           <div class="box box1">
              <p class="label">联系方式</p>
               <input type="text">
          </div>
            <div class="box ">
              <p class="label">家庭住址</p>
               <input type="text">
          </div>
           <div class="box box1">
              <p class="label">产品型号</p>
               <input type="text">
          </div>
          <div class="box box1">
              <p class="label">购买时间</p>
               <input type="text">
          </div>
            <div class="box ">
              <p class="label">服务内容</p>
               <input type="text">
          </div>
          <div class="btn">提交申请</div>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            formData:{}
        }
    }
}
</script>
<style lang="less" scoped>
    .container{
        width: 900px;

background: #F2F2F2;
border: 1px solid #CCCCCC;
padding: 60px;

.desc{
    
font-size: 18px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #505050;
line-height: 32px;
}
.content{
    margin-top: 30px;
    display: flex;
justify-content: space-between;
flex-wrap: wrap;
    .box{
        

border: 1px solid #505050;
display: flex;
padding: 10px;
width: 100%;
margin-bottom: 23px;
.label{
    
font-size: 18px;
font-family: SourceHanSansCN;
font-weight: 500;
color: #505050;

padding-right: 10px;
border-right: 1px dotted #505050;
}
input{
     border: none;
    float: left;
    zoom:1;
    outline: medium;
    background: transparent;
    padding: 0 15px;
    font-size: 18px;
}
    }
      .box1{
          width: 49%;
      }
      .btn{
      width: 100%;    
height: 50px;
background: #808080;

font-size: 18px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
      }
    
      
}
    }
  
</style>