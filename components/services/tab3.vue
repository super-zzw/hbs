<template>
    <div class="container">
       <div class="desc">如果您在使用呼博士新风系列产品的过程中出现产品故障、耗材更换、移机等安装维护问题时，请拨打400-100-5582热线电话、或联系当地体验门店、或填写如下售后申请表格，我们将迅速为您提供最佳的解决方案。</div>
       <div class="content">
           <div v-for="(item,i) in formData" :key="i" :class="item.flag?'box':'box box1'">
                <p class="label">{{item.label}}*</p>
               <input type="text" v-model="item.value" @focus="item.empty=true" v-if="!item.select">
               <select v-model="item.value" placeholder="" v-else @focus="item.empty=true">
                   <option :value="item1.categoryTitle" v-for="item1 in productList"  :key="item1.id">{{item1.categoryTitle}}</option>
    <!-- <el-option
      v-for="item in productList"
      :key="item.label"
      :label="item.label"
      :value="item.label">
    </el-option> -->
  </select>
               <p :class="item.empty?'warn':'warn active'" >必填字段</p> 
           </div>
          <!-- <div class="box box1">
              <p class="label">您的姓名*</p>
               <input type="text" v-model="formData[0].name">
               <p class="warn" v-if="!formData[0].empty">必填字段</p> 
          </div>
           <div class="box box1">
              <p class="label">联系方式*</p>
               <input type="text" v-model="formData[1].contactWay">
               <p class="warn" v-if="!formData[1].empty">必填字段</p> 
          </div>
            <div class="box ">
              <p class="label">家庭住址*</p>
               <input type="text" v-model="formData[2].address">
               <p class="warn" v-if="!formData[2].empty">必填字段</p> 
          </div>
           <div class="box box1">
              <p class="label">产品型号*</p>
               <input type="text" v-model="formData[3].productModel">
               <p class="warn" v-if="!formData[3].empty">必填字段</p> 
          </div>
          <div class="box box1">
              <p class="label">购买时间*</p>
               <input type="text" v-model="formData[4].buyTime">
               <p class="warn" v-if="!formData[4].empty">必填字段</p> 
          </div>
            <div class="box ">
              <p class="label">服务内容*</p>
               <input type="text" v-model="formData[5].content">
               <p class="warn" v-if="!formData[5].empty">必填字段</p> 
          </div> -->
          <div class="btn" @click="submit">提交申请</div>
       </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            formData:[
                {
                    label:'您的姓名',
                    value:'',
                    empty:true,
                    flag:false,
                    select:false
                },
                 {
                     label:'联系方式',
                    value:'',
                    empty:true,
                     flag:false,
                     select:false
                },
                 {
                    label:'家庭住址',
                    value:'',
                    empty:true,
                    flag:true,
                    select:false
                },
                 {
                       label:'产品型号',
                    value:'',
                    empty:true,
                     flag:false,
                     select:true
                },
                 {
                       label:'购买时间',
                    value:'',
                    empty:true,
                     flag:false,
                     select:false
                },
                 {
                       label:'服务内容',
                   value:'',
                    empty:true,
                     flag:true,
                     select:false
                },
            ]
        }
    },
    computed:{
        ...mapState(['productList'])
    },
    methods:{
        async submit(){
            let num=0
            let formData=this.formData
            formData.forEach(item=>{
                if(!item.value){
                    item.empty=false
                    num++
                }
            })
            if(num==0){
            let res=await this.$axios.get(this.$store.state.api.submitAfterSale,{
                  params:{
                    name:formData[0].value,
                    contactWay :formData[1].value,
                    address :formData[2].value,
                    productModel:formData[3].value,
                    buyTime :formData[4].value,
                    content :formData[5].value,
                  }
              })
              console.log(res)
              if(res==1){
                   this.$message({
          message: '提交成功',
          type: 'success',
          onClose:()=>{
formData.forEach(item=>{
               
                   item.value=''
                
            })
          }
        })
              }
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .container{
        width: 900px;

background: #F2F2F2;
border: 1px solid #F2F2F2;
padding: 60px;

.desc{
    
font-size: 18px;

color: #505050;
line-height: 32px;
}
.content{
    margin-top: 30px;
    display: flex;
justify-content: space-between;
flex-wrap: wrap;
    .box{
        
position: relative;
border: 1px solid #CCCCCC;
display: flex;
padding: 10px;
width: 100%;
margin-bottom: 23px;
.warn{
    position: absolute;
    bottom: -25px;
    left: 0;
    color: #c7000b;
    padding-left: 10px;
    transform:scale(0);
    transition: all .2s;
}
.warn.active{
  transform:scale(1);
   transition: all .3s;
}
.label{
    white-space: nowrap;
font-size: 18px;
color: #505050;

padding-right: 10px;
border-right: 1px dotted #505050;
}
input{
     border: none;
    float: left;
    flex:1;
    outline: medium;
    background: transparent;
    padding-left: 15px;
    font-size: 18px;
}
select{
    border: none;
    float: left;
    flex:1;
    outline: medium;
      background: transparent;
       padding-left: 15px;
    font-size: 18px;
}
    }
      .box1{
          width: 49%;
      }
      .btn{
      width: 100%;    
height: 40px;
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
//  /deep/ .el-input__inner{
//    background: transparent;
//    width: 200px;
// }
</style>