<template>
  <div class="wrap">
    <navigation v-if="nav == 1 && !isFixed"  class="fixed"></navigation>
    <navigation1
      v-if="nav == 2 || isFixed"
      :class="isFixed ? 'fixed' : ''"
      :style="{ top: top ? '0px' : '-80px' }"
      ref="nav"
    ></navigation1>
    <div class="content">
      <Nuxt />
    </div>
    <div class="contactUs" @click="toContact">
     <img src="~assets/image/lianxi.png" alt="">
    </div>
    <div class="btn-top" v-if="isTop" @click="toTop">
      <img src="~assets/image/top.png" alt="" class="goTop" />
    </div>

    <info ></info>
  </div>
</template>

<script>
import { mapState } from "vuex";
import navigation from "@/components/navigation.vue";
import navigation1 from "@/components/navigation1.vue";
import info from "@/components/info.vue";
export default {
  components: {
    navigation,
    info,
    navigation1,
  },
  data() {
    return {
      isFixed: false,
      isTop: false,
      top: true,
    };
  },
  mounted() {
    //  window.onresize=()=>{
    //           console.log(document.body.clientWidth)
    //         //   if(document.body.clientWidth<1050){
    //         //       console.log('11')
    //         //       this.showMenu=true
    //         //       this.mode='vertical'
    //         //   }else{
    //         //       this.showMenu=false
    //         //       this.mode='horizontal'
    //         //   }
    //       }
    window.onscroll = (e) => {
      var a = document.documentElement.scrollTop || document.body.scrollTop; //滚动条y轴上的距离
      // console.log(a)
      if (a > 80) {
        this.isFixed = true;
        var scrollFunc=()=>{
      
             var e = e || window.event;
            var b = document.documentElement.scrollTop || document.body.scrollTop; //滚动条y轴上的距离
            if(b<a){
                  // console.log("鼠标滚轮向上拖动");
               this.top = true;
            }else{
              //  console.log("鼠标滚轮向下拖动");
               this.top = false;
            }
        }
        var wheelFunc = () => {
          var e = e || window.event;
          if (e.wheelDelta) {
            if (e.wheelDelta > 0) {
              //当鼠标滚轮向上滚动时
              this.top = true;
              // console.log("鼠标滚轮向上滚动");
            }
            if (e.wheelDelta < 0) {
              //当鼠标滚轮向下滚动时
              // console.log(this.$refs.nav);
              this.top = false;
              // console.log("鼠标滚轮向下滚动");
            }
          } else if (e.detail) {
            if (e.detail < 0) {
              //当鼠标滚轮向上滚动时
              // console.log("鼠标滚轮向上滚动");
            }
            if (e.detail > 0) {
              //当鼠标滚轮向下滚动时
              // console.log("鼠标滚轮向下滚动");
            }
          }
        };
        //    给页面绑定鼠标滚轮事件,针对火狐的非标准事件
        // window.addEventListener("DOMMouseScroll", scrollFunc);
        window.addEventListener("scroll", scrollFunc);
        //    给页面绑定鼠标滚轮事件，针对Google，mousewheel非标准事件已被弃用，请使用 wheel事件代替
        window.addEventListener("wheel", wheelFunc);
        //    ie不支持wheel事件，若一定要兼容，可使用mousewheel
        // window.addEventListener("mousewheel", scrollFunc);
      } else {
        this.isFixed = false;
      }
      if (a > 800) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    };
  },
  computed: {
    ...mapState(["nav"]),
  },
  methods: {
    toContact(){
       this.$router.push('/service/6')
    },
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 100;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
  },
};
</script>

<style lang="less">
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body,
.wrap {
  // min-height: 100vh;
  min-width: 1280px;
}
.wrap {
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
}
.content {
  // flex: 1;
}
.banner {
  width: 100%;
  height: auto;
}
.fixed {
  position: fixed !important;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.2s;
}

.btn-top {
  width: 44px;
  height: 44px;
  position: fixed;
  right: 0px;
  bottom: 50px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
}
.btn-top:hover {
  background: rgba(0, 0, 0, 0.7);
}
.goTop {
  width: 30px;
  height: 20px;
}
.contactUs{
  position: fixed;
  right: 0px;
  bottom: 100px;
   width: 44px;
  height: 44px;
  background: #d75861;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  img{
    width: 35px;
  height: 30px;
  }
}
.el-input{
width: 350px;
 height: 48px;
}
.el-input__suffix{
  font-size: 28px;
  right: 10px;
}
</style>
