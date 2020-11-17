<template>
    <div class="t4">
        <div class="t3Item t4i1 wow fadeInDown">
            <img class="bgk" src="@/assets/image/t4banner1.png" alt="">
            <div class="box">
                <div class="mCont t4m1">
                    <div class="t3Cont iamcont">
                        <div class="i4a">{{$t("t4d1")}}</div>
                        <div class="i4b">{{$t("t4d2")}}</div>
                        <div class="i4b">{{$t("t4d3")}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="t3Item wow fadeInDown">
            <img class="bgk" src="@/assets/image/t4banner2.png" alt="">
            <div class="box">
                <div class="mCont">
                    <div class="t3Cont i3mcont">
                        <div class="t3Title">{{$t("t4d4")}}</div>
                        <div class="i3a">{{$t("t4d5")}}</div>
                        <div class="i3b">{{$t("t4d6")}}</div>
                        <div class="i3b">{{$t("t4d7")}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="t3Item wow fadeInDown">
            <img class="bgk" src="@/assets/image/t4banner3.png" alt="">
            <div class="box">
                <div class="mCont i4mc">
                    <div class="t3Cont i4mcont">
                        <div class="t3Title t3Title2">{{$t("t4d8")}}</div>
                        <div class="i4a">{{$t("t4d9")}}</div>
                        <div class="i4a">{{$t("t4d10")}}</div>
                        <div class="i4a">{{$t("t4d11")}}</div>
                        <div class="i4d">
                            <div class="i4e" v-for="(item,index) in $t('t4d12')" :key="index">
                                <div class="i4f">
                                    <span class="i4f1">{{item[0]}}</span>
                                    <span class="i4f2">%</span>
                                </div>
                                <div class="i4g">{{item[1]}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="t3Item wow fadeInDown">
            <img class="bgk" src="@/assets/image/t4banner4.png" alt="">
            <div class="box">
                <div class="mCont">
                    <div class="t3Cont i3mcont">
                        <div class="t3Title">{{$t("t4d13")}}</div>
                        <div class="i3b">{{$t("t4d14")}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="t3Item wow fadeInDown">
            <img class="bgk" src="@/assets/image/t4banner5.png" alt="">
            <div class="box">
                <div class="mCont i4mc">
                    <div class="t3Cont i4mcont">
                        <div class="t3Title t3Title2">{{$t("t4d15")}}</div>
                        <div class="i4a">
                            <span>{{$t("t4d16")}}</span>
                            <span class="i4a1">{{$t("t4d17")}}</span>
                        </div>
                        <div class="i4a">{{$t("t4d18")}}</div>
                        <div class="i4h">{{$t("t4d19")}}</div>
                        <div class="i4d">
                            <div class="i4e" v-for="(item,index) in $t('t4d20')" :key="index">
                                <div class="i4f">
                                    <span class="i4f1">{{item[0]}}</span>
                                    <span class="i4f2" v-if="index == 0">%</span>
                                </div>
                                <div class="i4g">{{item[1]}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="t3Item wow fadeInDown">
            <img class="bgk" src="@/assets/image/t4banner6.png" alt="">
            <div class="box">
                <div class="mCont">
                    <div class="t3Cont i3mcont">
                        <div class="t3Title">{{$t("t4d21")}}</div>
                        <div class="i3b i6a">{{$t("t4d22")}}</div>
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
.t4 {
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
        font-size: 44px;
        color: #000;
        font-weight: bold;
        margin-bottom: 25px;
    }
    .t3Title2{
        color: #fff;
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
.t4i1{
    // margin-top: 70px;
    .t4m1{
        display: flex;
        justify-content: flex-end;
        .iamcont{
            width: 40%;
            color: #000;
            .i4a{
                font-size: 44px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .i4b{
                font-size: 22px;
                line-height: 26px;
            }
        }
    }
}
.i3mcont{
    .i3a{
        font-size: 20px;
        color: #505050;
        margin-bottom: 20px;
        margin-bottom: 40px;
    }
    .i3b{
        color: #808080;
        font-size: 20px;
        margin-bottom: 20px;
        width: 468px;
    }
    .i6a{
        width: 366px;
    }
}
.i4mc{
    display: flex;
    justify-content: flex-end;
    .i4mcont{
        .i4a{
            font-size: 20px;
            color: #C2C2C2;
            margin-top: 20px;
            width: 520px;
        }
        .i4d{
            margin-top: 80px;
            display: flex;
            .i4e{
                margin-right: 30px;
                .i4f{
                    font-weight: bold;
                    .i4f1{
                        font-size: 70px;
                        background: linear-gradient(#000, #fff, #000);
                        color: transparent;
                        -webkit-background-clip: text;
                    }
                    .i4f2{
                        font-size: 36px;
                        background: linear-gradient(#000, #fff, #000);
                        color: transparent;
                        -webkit-background-clip: text;
                    }
                }
                .i4g{
                    color: #DCDCDC;
                    font-size: 17px;
                }
            }
        }
        .i4h{
            color: #C2C2C2;
            font-size: 14px;
            margin-top: 30px;
        }
    }
}
</style>