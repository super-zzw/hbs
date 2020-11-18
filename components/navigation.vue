<template>
    <div class="header">
        <div class="container">
                 <h1 class="Header__Logo">
              <img src="~assets/image/logo.png" alt="">
            </h1>
           <div class="nav">
                <el-menu :default-active="path" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
  <el-menu-item  index="/" :route="$i18n.path('')">{{$t('home')}}</el-menu-item>
  <el-submenu index="/walkin">
    <template slot="title">{{$t('walkin')}}</template>
    <el-menu-item index="/walkin/tab1" :route="$i18n.path('walkin/tab1')">品牌文化</el-menu-item>
    <el-menu-item index="/walkin/tab2" :route="$i18n.path('walkin/tab2')">招商计划</el-menu-item>
    <el-menu-item index="/walkin/tab3" :route="$i18n.path('walkin/tab3')">公司介绍</el-menu-item>
  
  </el-submenu>
  <el-submenu index="/strength">
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
   <el-submenu index="/product">
    <template slot="title">{{$t('product')}}</template>
    <el-menu-item  :index="'/product?id='+item.id" :route="$i18n.path('product?id='+item.id)" v-for="(item,i) in productList" :key="i">{{item.categoryTitle}}</el-menu-item>
    <!-- <el-menu-item index="/product/tab2" :route="$i18n.path('product/tab2')">吊顶机</el-menu-item>
    <el-menu-item index="/product/tab3" :route="$i18n.path('product/tab3')">立柜机</el-menu-item> -->
  
  </el-submenu>
   <el-menu-item index="/technology"  :route="$i18n.path('technology')">{{$t('technology')}}</el-menu-item>
  <el-menu-item index="/service" :route="$i18n.path('service')">{{$t('service')}}</el-menu-item>
</el-menu>
            
            <NuxtLink v-if="$i18n.locale === 'zh'" :to="`/en` + $route.fullPath" class="Header__Link" active-class="none" exact>
                    {{ $t('en') }}
                </NuxtLink>
                <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="Header__Link" active-class="none" exact>
                    {{ $t('zh') }}
                </NuxtLink>
                <img src="~assets/image/line.png" alt="" class="line">
                <img src="~assets/image/search.png" alt="" class="search">
           </div>
           
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    
    data(){
        return{
            // activeIndex: "/",
        }
    },
    watch:{
        activeIndex(val){
            console.log(val)
        }
    },
    computed:{
        ...mapState(['path','productList'])
    },
    created(){
       this.getProductTitleList()
    },
    methods: {
        async getProductTitleList(){
            let res=await this.$axios.get(this.$store.state.api.getProductTitleList)
             this.$store.commit('setProductList',res)
        },
         handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
}
</script>
<style lang="less" scoped>
.header{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    z-index: 999;
}
.container {
  width: 75%;
  margin: 0 auto;
  display: flex;
  z-index: 999;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  .Header__Logo{
      width: 130px;
      height: 45px;
      img{
          width: 100%;
        
          height: 100%;
      }
  }
  .nav{
      display: flex;
     
      align-items: center;
      .Header__Link{
          
font-size: 16px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color: #FFFFFF;

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
}
.el-menu{
    background: transparent;
}
.el-submenu{
    margin: 0 20px;
}
.el-menu.el-menu--horizontal{
    border: none;
}
/deep/ .nav .el-submenu__title i{
    color: #fff;
}
/deep/ .el-submenu__title{
    padding: 0;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #fff;
  font-family: NotoSansCJK-Bold !important;
}
.el-menu-item{
    padding:0;
    margin:0 25px;
    height: auto;
    

}
.el-menu--horizontal>.el-menu-item{
  
font-size: 16px;
font-family: NotoSansHans-Regular;
font-weight: 400;
color: #FFFFFF;
line-height: 68px;

}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
  color: #ffffff !important;
  
  background-color: transparent;
}
/deep/ .el-menu--horizontal>.el-submenu .el-submenu__title {
   font-size: 16px;
font-family: NotoSansHans-Regular;
font-weight: 400;
color: #FFFFFF;
line-height: 68px;
height: 68px;
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
//  .el-menu--horizontal .el-menu .el-menu-item:last-child:hover{
   
//     border-bottom: none;
//  }
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
    border-bottom-color: #fff;
}

</style>