<template>
    <div class="header">
        <div class="container">
          
                 <h1 class="Header__Logo">
              <img src="~assets/image/logo1.png" alt="">
            </h1>
           <div class="nav">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
  <el-menu-item  index="/" :route="$i18n.path('')">{{$t('home')}}</el-menu-item>
  <el-menu-item index="/walkin" :route="$i18n.path('walkin')">{{$t('walkin')}}</el-menu-item>
  <el-menu-item index="/strength" :route="$i18n.path('strength')">{{$t('strength')}}</el-menu-item>
  <el-menu-item index="/product" :route="$i18n.path('product')">{{$t('product')}}</el-menu-item>
  <el-menu-item index="/technology" :route="$i18n.path('technology')">{{$t('technology')}}</el-menu-item>
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
export default {
    data(){
        return{
            activeIndex: "/",
        }
    },
    methods: {
         handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
}
</script>
<style lang="less" scoped>
.header{
     
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
color: #505050;

text-decoration: none;
position: relative;
top: 3px;
margin-right: 30px;
      }
      .line{
          width: 2px;
          height: 18px;
          position: relative;
top: 4px;
margin-right: 25px;
      }
      .search{
          width: 28px;
          height: 28px;
                   position: relative;
top: 4px;
      }
  }
}
.el-menu{
    background: transparent;
}
.el-menu.el-menu--horizontal{
    border: none;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #505050;
  font-weight: bold;
}
.el-menu-item{
    padding:0;
    margin-right: 32px;
}
.el-menu--horizontal>.el-menu-item{
  
font-size: 16px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color:#505050;
line-height: 68px;

}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
  color:#505050 !important;
  
  background-color: transparent;
}
</style>