<template>
  <div class="header">
    <div class="container">
      <h1 class="Header__Logo" @click="toIndex">
        <img src="~assets/image/logo.png" alt="" />
      </h1>
      <div style="position: relative">
        <div
          class="nav"
          :style="{ transform: showSearchBox ? 'scale(1)' : 'scale(0)' }"
        >
          <el-menu
            :default-active="path"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            :router="true"
          >
            <el-menu-item index="/" :route="$i18n.path('')">{{
              $t("home")
            }}</el-menu-item>
            <el-submenu class="l1Nav" index="/walkin">
              <template slot="title">{{ $t("walkin") }}</template>
              <el-menu-item
                index="/walkin/tab3"
                :route="$i18n.path('walkin/tab3')"
                >公司介绍</el-menu-item
              >
              <el-menu-item
                index="/walkin/tab1"
                :route="$i18n.path('walkin/tab1')"
                >品牌文化</el-menu-item
              >
              <el-menu-item
                index="/walkin/tab4"
                :route="$i18n.path('walkin/tab4')"
                >品牌咨讯</el-menu-item
              >
              <el-menu-item
                index="/walkin/tab2"
                :route="$i18n.path('walkin/tab2')"
                >招商计划</el-menu-item
              >
            </el-submenu>
            <el-submenu index="/strength" class="l1Nav">
              <template slot="title">{{ $t("strength") }}</template>
              <!-- <el-menu-item index="/strength/tab1" :route="$i18n.path('strength/tab1')">软实力</el-menu-item>
     <el-submenu index="2-2">
      <template slot="title">硬实力</template>
      <el-menu-item index="/strength/tab2" :route="$i18n.path('strength/tab2')">工厂实力</el-menu-item>
      <el-menu-item index="/strength/tab3" :route="$i18n.path('strength/tab3')">实验室</el-menu-item>
      <el-menu-item index="/strength/tab4" :route="$i18n.path('strength/tab4')">四大研发</el-menu-item>
    </el-submenu> -->
              <el-menu-item
                index="/strength/tab2"
                :route="$i18n.path('strength/tab2')"
                >工厂实力</el-menu-item
              >
              <el-menu-item
                index="/strength/tab3"
                :route="$i18n.path('strength/tab3')"
                >实验室</el-menu-item
              >
              <el-menu-item
                index="/strength/tab4"
                :route="$i18n.path('strength/tab4')"
                >四大研发</el-menu-item
              >
              <el-menu-item
                index="/strength/tab5"
                :route="$i18n.path('strength/tab5')"
                >企业实力</el-menu-item
              >
            </el-submenu>
            <el-submenu index="/product" class="l1Nav">
              <template slot="title">{{ $t("product") }}</template>
              <el-menu-item
                :index="String(item.id)"
                :route="$i18n.path('product/' + item.id)"
                v-for="(item, i) in productList"
                :key="i"
                >{{ item.categoryTitle }}</el-menu-item
              >
              <!-- <el-menu-item index="/product/tab2" :route="$i18n.path('product/tab2')">吊顶机</el-menu-item>
    <el-menu-item index="/product/tab3" :route="$i18n.path('product/tab3')">立柜机</el-menu-item> -->
            </el-submenu>
            <el-submenu class="l1Nav" index="/technology">
              <template slot="title">{{ $t("technology") }}</template>
              <el-menu-item
                index="/technology"
                :route="$i18n.path('technology')"
                >总览</el-menu-item
              >
              <el-menu-item
                index="/technology/liedujiaonang"
                :route="$i18n.path('technology/liedujiaonang')"
                >猎毒胶囊技术</el-menu-item
              >
              <el-menu-item
                index="/technology/shimoxi"
                :route="$i18n.path('technology/shimoxi')"
                >石墨烯高效全热交换芯</el-menu-item
              >
              <el-menu-item
                index="/technology/bianpinhengfeng"
                :route="$i18n.path('technology/bianpinhengfeng')"
                >变频恒风技术</el-menu-item
              >
              <el-menu-item
                index="/technology/aicontrl"
                :route="$i18n.path('technology/aicontrl')"
                >智能控制技术</el-menu-item
              >
            </el-submenu>
            <!-- <el-menu-item index="/technology"  :route="$i18n.path('technology')">{{$t('technology')}}</el-menu-item> -->
            <!-- <el-menu-item index="/service" :route="$i18n.path('service')">{{$t('service')}}</el-menu-item> -->
            <el-submenu index="/service" class="l1Nav">
              <template slot="title">{{ $t("service") }}</template>
              <!-- <el-menu-item index="/strength/tab1" :route="$i18n.path('strength/tab1')">软实力</el-menu-item> -->
              <el-menu-item index="/service" :route="$i18n.path('service')"
                >总览</el-menu-item
              >
              <el-submenu index="6-1" class="siWidth">
                <template slot="title">
                  <div class="dfghjk" style="width: 120px">服务项目</div>
                </template>
                <el-menu-item
                  index="/service/0"
                  :route="$i18n.path('service/0')"
                  >安装服务</el-menu-item
                >
                <el-menu-item
                  index="/service/1"
                  :route="$i18n.path('service/1')"
                  >售后政策</el-menu-item
                >
                <el-menu-item
                  index="/service/2"
                  :route="$i18n.path('service/2')"
                  >售后申请</el-menu-item
                >
                <el-menu-item
                  index="/service/3"
                  :route="$i18n.path('service/3')"
                  >app下载</el-menu-item
                >
                <el-menu-item
                  index="/service/4"
                  :route="$i18n.path('service/4')"
                  >说明书下载</el-menu-item
                >
                <el-menu-item
                  index="/service/6"
                  :route="$i18n.path('service/6')"
                  >联系我们</el-menu-item
                >
              </el-submenu>
              <el-menu-item index="/service/5" :route="$i18n.path('service/5')"
                >常见问题</el-menu-item
              >
            </el-submenu>
          </el-menu>

          <!-- <NuxtLink v-if="$i18n.locale === 'zh'" :to="`/en` + $route.fullPath" class="Header__Link" active-class="none" exact>
                    {{ $t('en') }}
                </NuxtLink>
                <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="Header__Link" active-class="none" exact>
                    {{ $t('zh') }}
                </NuxtLink> -->
          <img src="~assets/image/line.png" alt="" class="line" />
          <div class="sear" @click="showSearchBox = false">
            <img src="~assets/image/search.png" alt="" class="search" />
          </div>
        </div>
        <div
          class="input_box"
          :style="{ transform: showSearchBox ? 'scale(0)' : 'scale(1)' }"
        >
          <el-input v-model="input" placeholder="请输入搜索内容">
            <i
              class="el-icon-search el-input__icon"
              style="cursor: pointer"
              slot="suffix"
              @click="handleIconClick"
            >
            </i
          ></el-input>
          <div class="search" @click="showSearchBox = true">
            <img src="~assets/image/close.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      input: "",
      showSearchBox: true,
      enter: false,
    };
  },
  watch: {
    activeIndex(val) {
      console.log(val);
    },
  },
  mounted() {},
  computed: {
    ...mapState(["path", "productList"]),
  },
  created() {
    //  this.getProductTitleList()
  },
  methods: {
    toIndex() {
      this.$router.push("/");
    },
    handleIconClick() {
      this.$router.push("/service/search/" + this.input);
      this.showSearchBox = true;
    },
    outBtn() {
      setTimeout(() => {
        if (this.enter) {
          this.showSearchBox = true;
        } else {
          this.showSearchBox = false;
        }
      }, 100);
    },

    // async getProductTitleList(){
    //     let res=await this.$axios.get(this.$store.state.api.getProductTitleList)
    //      this.$store.commit('setProductTitleList',res)
    // },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less" scoped>
.menu {
  width: 24px;
  height: 20px;
}
.searchBox {
  height: 0;
  background: #225560;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  overflow: hidden;
}
.input_box {
  display: flex;
  position: absolute;
  right: 0;
  top: 10px;
  transition: all 0.3s;
  /deep/ .el-input__inner {
    color: #505050;
    font-size: 16px;
  }
  input {
    width: 485px;
    height: 48px;
    background: #ffffff;
    padding: 16px;
  }
  .search {
    width: 40px;
    border-radius: 5px;
    height: 40px;
    margin-left: 16px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      width: 32px;
      // height: 32px;
    }
  }
}
.searchBox.active {
  height: 200px;
  transition: all 0.3s;
}
.header {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
}

.container {
  min-width: 992px;
  //   margin: 0 auto;
  display: flex;
  z-index: 999;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  .Header__Logo {
    cursor: pointer;
    width: 130px;
    // height: 45px;
    img {
      width: 100%;
      display: block;
      height: auto;
    }
  }
  // .nav.hide{
  //   transform: scale(0);
  // }
  .nav {
    display: flex;
    // transform: scale(1);
    transition: all 0.3s;
    align-items: center;
    //       .Header__Link{

    // font-size: 16px;
    // font-family: Noto Sans S Chinese;
    // font-weight: 400;
    // color: #FFFFFF;

    // text-decoration: none;
    // position: relative;
    // top: -2px;
    // margin-right: 30px;
    // margin-left: 20px;
    //       }
    .line {
      width: 2px;
      height: 18px;
      position: relative;
      top: -2px;
      margin-right: 20px;
    }
    .sear {
      height: 60px;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      .search {
        width: 28px;
        height: 28px;
        //        position: relative;
        //  top: -2px;
      }
    }
  }
}
.el-menu {
  background: transparent;
}
.el-submenu {
  margin: 0 20px;
}
.el-menu.el-menu--horizontal {
  border: none;
}
/deep/ .nav .el-submenu__title i {
  color: #fff;
}
/deep/ .el-submenu__title {
  padding: 0;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #fff;
  font-family: NotoSansCJK-Bold !important;
}
.el-menu-item {
  padding: 0;
  margin: 0 25px;
  height: auto;
}
.el-menu--horizontal > .el-menu-item {
  font-size: 16px;
  font-family: NotoSansHans-Regular;
  font-weight: 400;
  color: #ffffff;
  line-height: 68px;
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  color: #ffffff !important;

  background-color: transparent;
}
/deep/ .el-menu--horizontal > .el-submenu .el-submenu__title {
  font-size: 16px;
  font-family: NotoSansHans-Regular;
  font-weight: 400;
  color: #ffffff;
  line-height: 68px;
  height: 68px;
}
/deep/ .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background: transparent;
}

.el-menu--horizontal .el-menu .el-menu-item {
  font-size: 16px;
  font-family: NotoSansHans-Regular, NotoSansHans;
  font-weight: 400;
  color: #909090;
  line-height: 60px;
  height: auto;
  margin: 0 20px;
  border-bottom: 1px solid #dedede;
  // width: 160px !important;
}
.el-menu--horizontal .el-menu .el-menu-item:last-child {
  border-bottom: none;
  margin-bottom: 10px;
}
//  .el-menu--horizontal .el-menu .el-menu-item:last-child:hover{

//     border-bottom: none;
//  }
.el-menu--horizontal .el-menu .el-menu-item:hover {
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
  padding: 10px 0;
  border-bottom: 1px solid #dedede;
}
.el-menu--horizontal .el-menu .el-submenu:hover {
  border-bottom: 1px solid #505050;

  color: #505050;
  font-weight: 600;
}
/deep/ .el-menu--horizontal .el-menu .el-submenu__title {
  //   line-height: 60px;
  height: auto;
}

/deep/ .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom-color: #fff;
}
.el-menu--horizontal > .el-menu--popup-bottom-start {
}

</style>