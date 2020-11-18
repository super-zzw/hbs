<template>
    <div class="t3">
        <div class="t3Item">
            <img class="bgk" src="@/assets/image/t3banner1.png" alt="">
            <div class="box">
                <div class="mCont">
                    <div class="t3Cont i1mcont wow fadeInUp">
                        <div class="t3Title">{{$t("t3d1")}}</div>
                        <div class="i1a">{{$t("t3d2")}}</div>
                        <div class="i1a">{{$t("t3d3")}}</div>
                        <div class="i1a">{{$t("t3d4")}}</div>
                        <div class="i1a">{{$t("t3d5")}}</div>
                        <div class="i1a">{{$t("t3d6")}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="t3Item">
            <img class="bgk" src="@/assets/image/t3banner2.png" alt="">
            <div class="box">
                <div class="mCont t3m2">
                    <div class="t3Cont i2mcont wow fadeInUp">
                        <div class="t3Title t3Title2">{{$t("t3d7")}}</div>
                        <div class="i2c">
                            <div class="i2a">{{$t("t3d8")}}</div>
                            <div class="i2a">{{$t("t3d9")}}</div>
                            <div class="i2a">{{$t("t3d10")}}</div>
                            <div class="i2a">{{$t("t3d11")}}</div>
                        </div>
                        <div class="i2b">
                            <div class="i2d" v-for="(item,index) in $t('t3d12')" :key="index">
                                <div class="i2e">
                                    <div class="i2f">{{item[0]}}</div>
                                    <div class="i2g">{{item[1]}}</div>
                                    <div class="i2h">{{item[2]}}</div>
                                    <div class="i2h">{{item[3]}}</div>
                                </div>
                                <div class="i2i" v-if="index < $t('t3d12').length - 1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="t3Item">
            <img class="bgk" src="@/assets/image/t3banner3.png" alt="">
            <div class="box">
                <div class="mCont">
                    <div class="t3Cont i3mcont">
                        <div class="t3Title t3Title2 wow fadeInUp">{{$t("t3d26")}}</div>
                        <div class="i3a">{{$t("t3d27")}}</div>
                        <div class="i3b">{{$t("t3d28")}}</div>
                        <div class="i3b">{{$t("t3d29")}}</div>
                        <div class="i3b">{{$t("t3d30")}}</div>
                        <div class="i3c">{{$t("t3d31")}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="t3Item">
            <img class="bgk" src="@/assets/image/t3banner4.png" alt="">
            <div class="box">
                <div class="mCont i4mc">
                    <div class="t3Cont i4mcont">
                        <div class="t3Title t3Title2 wow fadeInUp">{{$t("t3d32")}}</div>
                        <div class="i4a">{{$t("t3d33")}}</div>
                        <div class="i4b">{{$t("t3d34")}}</div>
                        <div class="i4c">{{$t("t3d35")}}</div>
                        <div class="i4b">{{$t("t3d36")}}</div>
                        <div class="i4c">{{$t("t3d37")}}</div>
                        <div class="i4c i4d">{{$t("t3d38")}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
      mounted(){
    this.initWow(this)
  },
}
</script>
<style lang="less" scoped>
.t3 {
    padding-bottom: 0;
  .t3Item {
    position: relative;
    .bgk {
      width: 100%;
      height: auto;
      display: block;
    }
    .box {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .t3Title{
        font-size: 56px;
        color: #fff;
        font-weight: bold;
        margin-bottom: 25px;
    }
    .t3Title2{
        font-size: 44px;
    }
    .t3Cont{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
    }
    .i1a{
        color: #C2C2C2;
        font-size: 22px;
        line-height: 30px;
    }
    .i2a{
        color: #C2C2C2;
        font-size: 20px;
        line-height: 30px;
    }
  }
}
.i1mcont{
    
}
.t3m2{
    display: flex;
    justify-content: flex-end;
}
.i2mcont{
    width: 50%;
    .i2c{
        width: 468px;
    }
    .i2b{
        width: 500px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
        .i2d{
            display: flex;
            .i2e{
                text-align: center;
                .i2f{
                    color: #5ACAD9;
                    font-size: 18px;
                }
                .i2g{
                    color: #CECECE;
                    font-size: 13px;
                    margin-top: 5px;
                }
                .i2h{
                    color: #CECECE;
                    font-size: 12px;
                }
            }
            .i2i{
                margin-top: 20px;
                width: 1px;
                height: 10px;
                background-color: #7F7F7F;
                margin-left: 20px;
                margin-right: 20px;
            }
        }
    }
}
.i3mcont{
    padding-top: 150px;
    justify-content: flex-start!important;
    .i3a{
        font-size: 24px;
        color: #fff;
        margin-bottom: 30px;
    }
    .i3b{
        color: #C2C2C2;
        font-size: 20px;
    }
    .i3c{
        color: #9A9A9A;
        font-size: 14px;
        margin-top: 20px;
    }
}
.i4mc{
    display: flex;
    justify-content: flex-end;
    .i4mcont{
        width: 48%;
        justify-content: flex-start!important;
        padding-top: 50px;
        .i4a{
            font-size: 24px;
            color: #fff;
            margin-top: 20px;
        }
        .i4b{
            margin-top: 35px;
            font-size: 23px;
            color: #fff;
        }
        .i4c{
            color: #C2C2C2;
            font-size: 20px;
            margin-top: 20px;
            width: 520px;
        }
        .i4d{
            color: #fff;
            margin-top: 0;
        }
    }
}
</style>