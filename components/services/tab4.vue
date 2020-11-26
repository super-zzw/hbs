<template>
  <div class="container">
    <div class="sec1">
      <img src="~assets/image/img6.5-1.png" alt="" class="banner" />
      <div class="cont1">
        <h2 class="title">
          家里空气质量 <br />
          一目了然
        </h2>
        <p class="line"></p>
        <p class="desc">检测数据实时显示，随时随地掌控设备</p>
        <div class="box1">
          <div class="item">
            <img src="~assets/image/icon6.5-1.png" alt="" />
            <p class="tt">空气质量检测</p>
          </div>
          <div class="item">
            <img src="~assets/image/icon6.5-2.png" alt="" />
            <p class="tt">定时开机</p>
          </div>
          <div class="item">
            <img src="~assets/image/icon6.5-3.png" alt="" />
            <p class="tt">滤芯更换提示</p>
          </div>
          <div class="item">
            <img src="~assets/image/icon6.5-4.png" alt="" />
            <p class="tt">模式调节</p>
          </div>
        </div>
      </div>
    </div>
    <div class="sec2">
      <h2 class="title">五大模式任意切换</h2>
      <p class="line"></p>
      <div class="box2">
        <div class="modeItem">
          <img src="~assets/image/icon6.5-5.png" alt="" />
          <p class="name">智能模式</p>
        </div>
        <div class="modeItem">
          <img src="~assets/image/icon6.5-6.png" alt="" />
          <p class="name">手动模式</p>
        </div>
        <div class="modeItem">
          <img src="~assets/image/icon6.5-1.png" alt="" />
          <p class="name">净化模式</p>
        </div>
        <div class="modeItem">
          <img src="~assets/image/icon6.5-7.png" alt="" />
          <p class="name">排污模式</p>
        </div>
        <div class="modeItem">
          <img src="~assets/image/icon6.5-8.png" alt="" />
          <p class="name">静音模式</p>
        </div>
      </div>
      <h2 class="title">WiFi连接,多台设备轻松管理</h2>
      <p class="line"></p>
      <p class="desc">同一注册账号可以添加多台新风设备，同时进行管理</p>
      <img src="~assets/image/img6.5-2.png" alt="" class="img6" />
      <div class="dBtns">
        <div class="callBtn" @click="downAndr">
          <img src="~assets/image/icon6.5-9.png" alt="" />
          <div class="cont1">
            <p class="t1">BRI呼博士</p>
            <p class="t2">Android</p>
          </div>
        </div>
        <div class="callBtn" @click="showIos">
          <img src="~assets/image/icon6.5-9.png" alt="" />
          <div class="cont1">
            <p class="t1">BRI呼博士</p>
            <p class="t2">IOS</p>
          </div>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="show" width="30%" :before-close="handleClose">
      <img src="@/assets/image/ios.png" alt="" />
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    downAndr() {
      window.open(
        "https://xmall-1300255297.cos.ap-guangzhou.myqcloud.com/cyou/bri/brikqgj.apk",
        "_blank"
      );
    },
    showIos() {
      this.show = !this.show;
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
}
.sec1 {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  .cont1 {
    width: 310px;
    position: absolute;
    left: 15%;
    .title {
      font-size: 40px;
      font-family: NotoSansCJK-Bold !important;
      color: #505050;
      line-height: 60px;
    }
    .box1 {
      margin-top: 20px;
      display: flex;

      .item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 34px;
          height: 34px;
        }
        .tt {
          font-size: 11px;

          color: #707070;
          line-height: 38px;
        }
      }
    }
  }
}
.sec2 {
  background: #f2f2f2;
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 40px;
    font-family: NotoSansCJK-Bold !important;
    color: #505050;
    line-height: 75px;
  }
  .box2 {
    margin-top: 40px;
    margin-bottom: 100px;
    display: flex;
    .modeItem {
      margin-right: 100px;
      img {
        // width: 86px;
        height: 70px;
      }
      .name {
        font-size: 24px;
        font-family: Adobe Heiti Std;
        font-weight: normal;
        color: #505050;
        line-height: 70px;
      }
    }
    .modeItem:last-child {
      margin-right: 0;
    }
  }
  .img6 {
    margin-top: 50px;
    width: 100%;
  }
  .dBtns{
      display: flex;
  }
  .callBtn {
      margin-left: 20px;
      margin-right: 20px;
    margin-top: 80px;
    display: flex;

    align-items: center;

    border: 1px solid #808080;
    padding: 10px 30px;
    img {
      width: 52px;
      height: 39px;
      margin-right: 20px;
    }
    .cont1 {
      display: flex;
      flex-direction: column;
      .t1 {
        font-size: 23px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        color: #707070;
        line-height: 35px;
      }
      .t2 {
        font-size: 18px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: #707070;
        line-height: 35px;
      }
    }
  }
}
.line {
  height: 2px;
  background: #808080;
  width: 50px;
  margin: 20px 0;
}
.desc {
  font-size: 18px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: #707070;
  line-height: 36px;
}
</style>