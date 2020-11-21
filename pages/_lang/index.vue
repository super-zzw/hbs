<template>
  <div class="Content">
    <div class="container">
      <el-carousel
        :height="height"
        class="swiper wow fadeInUp"
        :autoplay="true"
        cla
      >
        <el-carousel-item v-for="(item, i) in swiperImg" :key="i">
          <img :src="item" alt="" class="swiperImg" />
        </el-carousel-item>
      </el-carousel>
      <div class="section1 wow fadeInUp">
        <div class="container1">
          <h2 class="title">{{ $t("index1") }}</h2>
          <div class="box">
            <div
              class="con"
              v-for="product in productList"
            
              :key="product.id"
              @click="toProduct(product.id)"
            >
              <img :src="product.coverImg" alt="" class="bg" />
              <div class="cont1">
                     <p class="name">{{ product.title }}</p>
              <p class="line"></p>
              <p class="desc">{{ product.label }}</p>
              <div class="more">
                {{ $t("liaojie") }}
                <img src="~assets/image/right.png" alt="" />
              </div>
              </div>
             
            </div>
          </div>
        </div>
        <div class="container mt">
          <h2 class="title">{{ $t("index8") }}</h2>
          <span class="desc">{{ $t("index9") }}</span>
          <div
            class="article"
            v-for="article in articleList"
            :key="article.id"
            @click="toDetail(article.id)"
          >
            <img :src="article.coverImgUrl" alt="" class="pic" />
            <div class="content">
              <h3 class="c_title">{{ article.title }}</h3>
              <div class="tt">
                <p>{{ article.summary }}</p>
                <!-- <p class="mt">{{$t('index12')}}</p> -->
              </div>
              <div class="about">
                {{ $t("liaojie") }}
                <img src="~assets/image/more.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section2 wow fadeInUp">
        <h2 class="title">{{ $t("index16") }}</h2>
        <span class="desc">{{ $t("index17") }}</span>
        <div class="imgList">
          <div class="row">
            <div class="imgItem">
              <p>{{ $t("index18") }}</p>
              <img src="~assets/image/img1-3.png" alt="" />
            </div>
            <div class="imgItem">
              <p>{{ $t("index19") }}</p>
              <img src="~assets/image/img1-4.png" alt="" />
            </div>
          </div>
          <div class="row">
            <div class="imgItem">
              <p>{{ $t("index20") }}</p>
              <img src="~assets/image/img1-5.png" alt="" />
            </div>
            <div class="imgItem">
              <p>{{ $t("index21") }}</p>
              <img src="~assets/image/img1-6.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import utils from "@/utils/methods.js";
import banner1 from "@/assets/image/banner1.png";
import banner2 from "@/assets/image/banner2.png";
import banner3 from "@/assets/image/banner3.png";
export default {
  mounted() {
    utils.initWow(this);
    this.getAutoHeight();
    window.onresize = () => {
      this.getAutoHeight();
    };
  },
  async asyncData({ app, store }) {
    let productList = [];
    let articleList = [];
    try {
      let res = await Promise.all([
        app.$axios.get(store.state.api.getConfig, {
          params: {
            pageName: store.state.pageNames.index,
          },
        }),
        app.$axios.get(store.state.api.getProductList),
        app.$axios.get(store.state.api.getArticleList),
      ]);
      if (res[0] != null) {
        if (res[0].seoTitle) {
          app.head.title = res[0].seoTitle;
        }
        if (res[0].seoKeys && res[0].seoDesc) {
          app.head.meta = [
            {
              hid: "homekeywords",
              name: "keywords",
              content: res[0].seoKeys,
            },
            {
              hid: "homedescription",
              name: "description",
              content: res[0].seoDesc,
            },
          ];
        }
      }
      if (res[1].length) {
        if(res[1].length>3){
          res[1]= res[1].slice(0,3)
        }
        productList = res[1];
      }
      if (res[2].length) {
        articleList = res[2];
      }
    } catch (e) {}
    return {
      productList,
      articleList,
    };
  },
  methods: {
    getAutoHeight() {
      let _w =
        document.documentElement.clientWidth || document.body.clientWidth;
      this.height = (_w * 770) / 1920 + "px";
    },
    toDetail(id) {
      this.$router.push("/strength/tab1?id=" + id);
    },
    toProduct(id) {
      this.$router.push("/product?id=" + id);
    },
  },
  data() {
    return {
      swiperImg: [banner1, banner2, banner3],
      height: "",
    };
  },
};
</script>
<style lang="less" scoped>
.swiper {
  width: 100%;
}
.swiperImg {
  width: 100%;
  // height: 770px;
  height: 100%;
}

.section1 {
  background: #f2f2f2;
  padding: 100px 0 150px;

  display: flex;
  align-items: center;
  flex-direction: column;
  .mt {
    margin-top: 100px;
  }
  .container1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .box {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 60px;
      z-index: 10;
      .con {
        flex: 1;
        // height: 520px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-right: 15px;
        cursor: pointer;
        background: #000000;
       
        overflow: hidden;
        .cont1{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
                 .name {
          font-size: 40px;
          font-weight: 400;
          color: #ffffff;

          z-index: 10;
        }
        .line {
          width: 40px;
          height: 2px;
          background: #dcdcdc;
          z-index: 10;
          margin: 10px 0 15px;
        }
        .desc {
          background: rgba(255, 2555, 2555, 0.3);
          z-index: 10;
          font-size: 20px;
         white-space: nowrap;
          font-weight: 400;
          color: #ffffff;
          // line-height: 68px;
          padding: 5px;
        }
        .more {
          z-index: 10;
          margin-top: 20px;
          padding: 3px 20px;
          font-size: 16px;
          opacity: 0.3;
          font-weight: normal;
          color: #ffffff;
          // line-height: 68px;
          display: flex;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
          }
        }
        }
        .desc {
          margin-top: 0;
        }
        .bg {
          width: 100%;
          height: auto;
          // position: absolute;
          // left: 0;
          // top: 0;

          opacity: 0.4;
          transform: scale(1);
        transition: all 0.6s;
        }
        .bg:hover{
            opacity: 0.3;
        transform: scale(1.1);
    
        }
       
      }
     
      .con:last-of-type {
        margin-right: 0;
      }
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;

    .article {
      margin-top: 60px;
      display: flex;
      align-items: center;
      background: #fff;
      width: 100%;
      cursor: pointer;
      justify-content: flex-end;
      .pic {
        width: 470px;
        //  height: 300px;
      }
      .content {
        //  padding: 50px 40px 0;
        margin-left: 40px;
        .c_title {
          font-size: 30px;

          font-weight: 400;
          color: #505050;
          line-height: 40px;
        }
        .tt {
          margin-top: 30px;
          p {
            font-size: 20px;

            font-weight: 400;
            color: #707070;
            line-height: 28px;
            width: 650px;
            white-space: pre-line;
          }
          .mt {
            margin-top: 18px;
          }
        }
        .about {
          margin-top: 56px;

          font-size: 18px;

          font-weight: 400;
          color: #808080;
          display: flex;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
}

.section2 {
  background: #fff;
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .imgList {
    margin-top: 60px;
    .row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 14px;
      .imgItem {
        // width: 49.7%;
        // height: 587px;
        position: relative;
        margin-right: 14px;
        img {
          width: 100%;
          height: auto;
          display: block;
        }
        p {
          position: absolute;
          left: 36px;
          top: 30px;
          padding: 4px 24px;

          background: rgba(0, 0, 0, 0.5);
          border-radius: 10px;

          font-size: 32px;

          font-weight: 400;
          color: #ffffff;
          // line-height: 57px;
        }
      }
      .imgItem:last-child {
        margin-right: 0;
      }
    }
  }
}
.title {
  font-size: 40px;

  color: #505050;
  position: relative;
}

.desc {
  margin-top: 45px;

  font-size: 20px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: #909090;
  line-height: 36px;
}
.title::after {
  position: absolute;
  width: 51px;
  height: 2px;

  content: "";
  left: 50%;
  top: 80px;
  background: #808080;
  transform: translateX(-50%);
}
/deep/ .el-carousel__button {
  width: 10px;
  height: 10px;
  background: #808080;
  border-radius: 50%;
}
/deep/ .el-carousel__indicator.is-active button {
  background: #fff;
}
</style>
