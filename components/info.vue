<template>
    <div class="header">
        <div class="container">
           
               <div class="nav">
                <el-menu :default-active="path" class="el-menu-demo" mode="horizontal"  :router="true">
  <!-- <el-menu-item  index="/" :route="$i18n.path('')">{{$t('home')}}</el-menu-item> -->
  <el-submenu index="/walkin" class="i1Item">
    <template slot="title">{{$t('walkin')}}</template>
    <el-menu-item index="/walkin/tab1" :route="$i18n.path('walkin/tab1')">品牌文化</el-menu-item>
    <el-menu-item index="/walkin/tab2" :route="$i18n.path('walkin/tab2')">招商计划</el-menu-item>
    <el-menu-item index="/walkin/tab3" :route="$i18n.path('walkin/tab3')">公司介绍</el-menu-item>
  
  </el-submenu>
  <el-submenu index="/strength" class="i1Item">
    <template slot="title">{{$t('strength')}}</template>
    <el-menu-item index="/strength/tab1" :route="$i18n.path('strength/tab1')">软实力</el-menu-item>
    <!-- <el-menu-item index="2-2">硬实力</el-menu-item> -->
     <el-submenu index="2-2">
      <template slot="title">硬实力</template>
      <el-menu-item index="/strength/tab2" :route="$i18n.path('strength/tab2')">工厂实力</el-menu-item>
      <el-menu-item index="/strength/tab3" :route="$i18n.path('strength/tab3')">实验室</el-menu-item>
      <el-menu-item index="/strength/tab4" :route="$i18n.path('strength/tab4')">四大研发</el-menu-item>
    </el-submenu>
    <el-menu-item index="/strength/tab5" :route="$i18n.path('strength/tab5')">企业实力</el-menu-item>
    
  </el-submenu>
   <el-submenu index="/product" class="i1Item">
    <template slot="title">{{$t('product')}}</template>
    <el-menu-item index="/product/tab1" :route="$i18n.path('product/tab1')">壁挂机</el-menu-item>
    <el-menu-item index="/product/tab2" :route="$i18n.path('product/tab2')">吊顶机</el-menu-item>
    <el-menu-item index="/product/tab3" :route="$i18n.path('product/tab3')">立柜机</el-menu-item>
  
  </el-submenu>
   <el-menu-item  class="i1Item" index="/technology"  :route="$i18n.path('technology')">{{$t('technology')}}</el-menu-item>
  <el-menu-item  class="i1Item" index="/service" :route="$i18n.path('service')">{{$t('service')}}</el-menu-item>
</el-menu>
            <NuxtLink v-if="$i18n.locale === 'zh'" :to="`/en` + $route.fullPath" class="Header__Link" active-class="none" exact>
                    {{ $t('en') }}
                </NuxtLink>
                <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="Header__Link" active-class="none" exact>
                    {{ $t('zh') }}
                </NuxtLink>
           </div>
            <div class="imgBox">
                <div class="input_box">
                    <el-input v-model="input" placeholder="请输入搜索内容"></el-input>
                    <div class="search"><img src="~assets/image/search2.png" alt=""></div>
                </div>
            </div>
            <div class="tip">BRI呼博士品牌隶属于厦门蒙发利科技（集团）股份有限公司 Copyright 2020 MRI.ALL Rights Reserved. 闽ICP备20003087号-2</div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            input:''
        }
    },
    computed:{
        ...mapState(['path'])
    },
}
</script>
<style lang="less" scoped>
.header{
  background: #DFDFDF;
  display: flex;
  
  align-items: center;

}
.container {
width: 100%;
  
  display: flex;

 flex-direction: column;
  justify-content: space-between;
  align-items: center;
 
}
.Header__Link{
    margin-right: 72px;
    
font-size: 20px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color: #505050;
text-decoration: none;
}
.imgBox{
    background: url(../assets/image/footImg.png);
    background-size: 100% 100%;
    height: 380px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .input_box{
        display: flex;
        /deep/ .el-input__inner{
            
color: #505050;
font-size: 16px;
        }
        input{
            width: 485px;
height: 48px;
background: #FFFFFF;
padding: 16px;
        }
        .search{
            width: 48px;
height: 48px;
margin-left: 16px;
background: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
img{
    width: 32px;
    height: 32px;
}
        }
    }
}
.tip{
    
height: 42px;
background: #3C3C3C;
width: 100%;
display: flex;
align-items: center;

font-size: 12px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color: #C8C8C8;
justify-content: center;
}
.el-input{
width: 485px;
 height: 48px;
}
/deep/ .el-input__inner{
    height: 48px;
    border-radius: 0;
    outline: none;
    border: none;
}
.nav{
      display: flex;
     
      align-items: center;
      .Header__Link{
          
font-size: 16px;
font-family: Noto Sans S Chinese;
font-weight: 400;
 color: #505050;

text-decoration: none;
position: relative;
top: -2px;
margin-right: 30px;
      }
      .line{
          width: 2px;
          height: 18px;
          position: relative;
top: -2px;
margin-right: 25px;
      }
      .search{
          width: 28px;
          height: 28px;
                   position: relative;
top: -2px;
      }
  }

.el-menu{
    background: transparent;
}
.el-menu.el-menu--horizontal{
    border: none;
}
/deep/ .nav .el-submenu__title i{
    color: #505050;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
  font-weight: bold;
}
.el-menu-item{
    padding:0;
    margin-right: 50px;
    height: auto;
    

}
.el-menu--horizontal>.el-menu-item{
  
font-size: 16px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color:#505050;
line-height: 68px;

}
.el-menu--horizontal>.el-submenu{
    margin: 0 20px;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
//   color: #ffffff !important;
  
  background-color: transparent;
}
/deep/ .el-menu--horizontal>.el-submenu .el-submenu__title {
   font-size: 16px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color: #505050;
line-height: 68px;
}
/deep/ .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
    background: transparent;
}

 .el-menu--horizontal .el-menu .el-menu-item{
    
font-size: 16px;
font-family: NotoSansHans-Regular, NotoSansHans;
font-weight: 400;
color: #909090;
line-height: 60px;
height: auto;
margin: 0 20px;
 border-bottom: 1px solid #DEDEDE;
 
}
.el-menu--horizontal .el-menu .el-menu-item:last-child{
    border-bottom: none;
    margin-bottom: 10px;
}

 .el-menu--horizontal .el-menu .el-menu-item:hover{
     border-bottom: 1px solid #505050;
     
color: #505050;
font-weight: 600;
 }
.el-menu--horizontal .el-menu .el-submenu {
    font-size: 16px;
font-family: NotoSansHans-Regular, NotoSansHans;
font-weight: 400;
color: #909090;
// line-height: 60px;
height: auto;
margin: 0 20px;
padding:10px 0;
border-bottom: 1px solid #DEDEDE;
}
.el-menu--horizontal .el-menu .el-submenu:hover{
     border-bottom: 1px solid #505050;
     
color: #505050;
font-weight: 600;
}
/deep/ .el-menu--horizontal .el-menu .el-submenu__title{
//   line-height: 60px;
  height: auto;
}

/deep/ .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
    border-bottom: none;
     font-weight: bold;
}
.nav {
    /deep/ .el-menu--horizontal{
        width:  800px;
        display: flex;
        justify-content: space-between;
    }
    .i1Item{
        margin: 0;
        /deep/ .el-submenu__title{
            padding: 0;
        }
    }
}
</style>