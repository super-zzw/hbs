<template>
    <div class="header">
        <div class="container">
            <nav class="Header__Menu">
                <NuxtLink :to="$i18n.path('walkin')" class="Header__Link" exact>
                    {{ $t('walkin') }}
                </NuxtLink>
                <NuxtLink :to="$i18n.path('strength')" class="Header__Link" exact>
                    {{ $t('strength') }}
                </NuxtLink>
                 <NuxtLink :to="$i18n.path('product')" class="Header__Link" exact>
                    {{ $t('product') }}
                </NuxtLink>

                 <NuxtLink :to="$i18n.path('technology')" class="Header__Link" exact>
                    {{ $t('technology') }}
                </NuxtLink>
                 <NuxtLink :to="$i18n.path('service')" class="Header__Link" exact>
                    {{ $t('service') }}
                </NuxtLink>
                
                <NuxtLink v-if="$i18n.locale === 'zh'" :to="`/en` + $route.fullPath" class="Header__Link" active-class="none" exact>
                    {{ $t('en') }}
                </NuxtLink>
                <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="Header__Link" active-class="none" exact>
                    {{ $t('zh') }}
                </NuxtLink>
            </nav>
            <div class="imgBox">
                <div class="input_box">
                    <el-input v-model="input" placeholder="请输入搜索内容"></el-input>
                    <div class="search"><img src="~assets/image/search2.png" alt=""></div>
                </div>
            </div>
            <div class="tip">BRI呼博士品牌隶属于厦门蒙发利科技（集团）股份有限公司 Copyright 2020 Together-link Inc. 闽ICP备20003087号-2</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            input:''
        }
    }
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
  .Header__Menu{
     padding: 35px 0;
  }
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
    
}
</style>