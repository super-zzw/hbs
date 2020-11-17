<template>
    <div class="t4">
        <div class="t3Item t4i1  wow fadeInDown">
            <img class="bgk" src="@/assets/image/t5banner1.png" alt="">
            <div class="box">
                <div class="mCont t4m1">
                    <div class="t3Cont iamcont">
                        <div class="i4a">{{$t("t5d1")}}</div>
                        <div class="i4b">{{$t("t5d2")}}</div>
                        <div class="i4c">{{$t("t5d3")}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="t3Item  wow fadeInDown">
            <img class="bgk" src="@/assets/image/t5banner2.png" alt="">
            <div class="box">
                <div class="mCont">
                    <div class="t3Cont i3mcont">
                        <div class="t3Title">{{$t("t5d4")}}</div>
                        <div class="i3a">{{$t("t5d5")}}</div>
                        <div class="i3a">{{$t("t5d6")}}</div>
                        <div class="i3a">{{$t("t5d7")}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="t3Item wow fadeInDown">
            <img class="bgk" src="@/assets/image/t5banner3.png" alt="">
            <div class="box">
                <div class="mCont i4mc">
                    <div class="t3Cont i4mcont">
                        <div class="t3Title t3Title2 i4ab">
                            <div class="i4b">{{$t("t5d8")}}</div>
                        </div>
                        <div class="i4a">{{$t("t5d9")}}</div>
                        <div class="i4a">{{$t("t5d10")}}</div>
                        <div class="i4a">{{$t("t5d11")}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="t3Item wow fadeInDown">
            <img class="bgk" src="@/assets/image/t5banner4.png" alt="">
            <div class="box">
                <div class="mCont">
                    <div class="t3Cont i3mcont i4Box">
                        <div class="t3Title">{{$t("t5d12")}}</div>
                        <div class="i3b">
                            <div class="i3c" v-for="(item,index) in $t('t5d13')" :key="index">
                                <div class="i3d">{{item[0]}}</div>
                                <div class="i3e">{{item[1]}}</div>
                                <div class="i3e">{{item[2]}}</div>
                            </div>
                        </div>
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
    .t4m1{
        display: flex;
        justify-content: flex-end;
        .iamcont{
            width: 40%;
            color: #fff;
            .i4a{
                font-size: 56px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .i4b{
                font-size: 22px;
                color: #C2C2C2;
            }
            .i4c{
                width: 437px;
                font-size: 20px;
                line-height: 28px;
                margin-top: 50px;
            }
        }
    }
}
.i3mcont{
    .i3a{
        font-size: 20px;
        color: #000;
        margin-bottom: 4px;
    }
}
.i4mc{
    display: flex;
    justify-content: flex-end;
    width: 80%;
    .i4mcont{
        .i4b{
            width: 500px;
        }
        .i4a{
            font-size: 20px;
            color: #C2C2C2;
        }
    }
}
.i4Box{
    width: 45%;
    display: flex!important;
    align-items: center!important;
    justify-content: center!important;
    flex-direction: column!important;
    .i3b{
        width: 420px;
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
        .i3c{
            width: 200px;
            box-sizing: border-box;
            border: 1px solid #1B1B1B;
            height: 104px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            .i3d{
                color: #131313;
                font-size: 17px;
                font-weight: bold;
            }
            .i3e{
                font-size: 14px;
            }
        }
    }
}
</style>