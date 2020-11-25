<template>
    <div class="t2">
        <div class="t2Item">
            <img class="bgk" src="@/assets/image/t2banner1.png" alt="">
            <div class="box">
                <div class="mCont t2m1">
                    <div class="i1a wow fadeInUp">
                        <div class="i1b">{{$t("t2d1")}}</div>
                        <div class="i1c">{{$t("t2d2")}}</div>
                    </div>
                    <div class="i1d wow fadeInUp">
                        <div class="i1e">
                            <div class="i1f">
                                <span class="i1f1">99.99</span>
                                <span class="i1f2">%</span>
                            </div>
                            <div class="i1g">{{$t("t2d3")}}</div>
                        </div>
                        <div class="i1e">
                            <div class="i1f">
                                <span class="i1f1">99.99</span>
                                <span class="i1f2">%</span>
                            </div>
                            <div class="i1g">{{$t("t2d4")}}</div>
                        </div>
                        <div class="i1e">
                            <div class="i1f">
                                <span class="i1f1">99.99</span>
                                <span class="i1f2">%</span>
                            </div>
                            <div class="i1g">{{$t("t2d5")}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="t2Item">
            <img class="bgk" src="@/assets/image/t2banner2.png" alt="">
            <div class="box">
                <div class="mCont t2m2">
                    <div class="t2a wow fadeInUp">
                        <div class="t2b">{{$t("t2d6")}}</div>
                        <div class="t2c">{{$t("t2d7")}}</div>
                        <div class="t2d">{{$t("t2d8")}}</div>
                        <div class="t2d">{{$t("t2d9")}}</div>
                        <div class="t2d">{{$t("t2d10")}}</div>
                        <div class="t2d">{{$t("t2d11")}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="t2Item">
            <img class="bgk" src="@/assets/image/t2banner3.png" alt="">
            <div class="box">
                <div class="mCont t2m3">
                    <div class="t2a wow fadeInUp">{{$t('t2d13')}}</div>
                    <div class="t2b wow fadeInUp">
                        <div class="t2c tc">
                            <div class="t2cItem" v-for="(item,key) of $t('t2d12')" :key="key">{{item}}</div>
                        </div>
                        <div class="t2c">
                            <div class="t2cItem" v-for="(item,key) of $t('t2d14')" :key="key">{{item}}</div>
                        </div>
                        <div class="t2c tc">
                            <div class="t2cItem" v-for="(item,key) of $t('t2d15')" :key="key">{{item}}</div>
                        </div>
                        <div class="t2c">
                            <div class="t2cItem" v-for="(item,key) of $t('t2d16')" :key="key">{{item}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="t2Item">
            <img class="bgk" src="@/assets/image/t2banner4.png" alt="">
            <div class="box">
                <div class="mCont t2m2">
                    <div class="t2a wow fadeInUp">
                        <div class="t2b">{{$t("t2d17")}}</div>
                        <div class="t2c">{{$t("t2d18")}}</div>
                        <div class="t2d">{{$t("t2d19")}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="t2Item">
            <img class="bgk" src="@/assets/image/t2banner5.png" alt="">
            <div class="box">
                <div class="mCont t2m5">
                    <div class="t5d">
                        <div class="t5a wow fadeInUp">{{$t("t2d20")}}</div>
                        <img class="t5aImg" src="@/assets/image/t2banner8.png" alt="">
                        <div class="t5b">
                            <div class="t5c">{{$t("t2d21")}}</div>
                            <div class="t5c">{{$t("t2d22")}}</div>
                            <div class="t5c">{{$t("t2d23")}}</div>
                        </div>
                    </div>
                    <div class="t5d">
                        <div class="t5a wow fadeInUp">{{$t("t2d24")}}</div>
                        <img class="t5aImg" src="@/assets/image/t2banner9.png" alt="">
                        <div class="t5b">
                            <div class="t5c">{{$t("t2d25")}}</div>
                            <div class="t5c">{{$t("t2d26")}}</div>
                            <div class="t5c">{{$t("t2d27")}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="t2Item">
            <img class="bgk" src="@/assets/image/t2banner6.png" alt="">
            <div class="box">
                <div class="mCont t2m6 wow fadeInUp">
                    {{$t("t2d28")}}
                </div>
            </div>
        </div>
        <div class="t2Item">
            <div class="box t2i7Box">
                <div class="mCont t2m7">
                    <div class="i7a i8b">
                        <div>{{$t('t2d29')}}</div>
                        <div>{{$t('t2d30')}}</div>
                    </div>
                    <div class="i7b">
                        <div class="i7c" v-for="(item0,index0) in $t('t2d31')" :key="index0">
                            <div class="i7d" :class="index0 > 0 ? 'i7e' : 'i7f'" v-for="(item1,index1) in item0" :key="index1">
                                {{item1}}
                                <div v-if="item1 && index0 > 0">99.9%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="t2Item">
            <img class="bgk" src="@/assets/image/t2banner7.png" alt="">
            <div class="box">
                <div class="mCont t2m7 wow fadeInUp">
                    <div class="i7a">{{$t("t2d32")}}</div>
                    <img class="i7bImg" src="@/assets/image/t2banner711.png" alt="">
                </div>
            </div>
        </div>
        <div class="t2Item">
            <div class="box t2i7Box">
                <div class="mCont t2m7">
                    <div class="i8f wow fadeInUp">
                        <div>{{$t('t2d33')}}</div>
                    </div>
                    <div class="i7b">
                        <div class="i7c" v-for="(item0,index0) in $t('t2d34')" :key="index0">
                            <div class="i7d i8a" :class="[index0 > 0 ? 'i7e' : 'i7f',index1 > 0 ? 'i8b' : 'i8c']" v-for="(item1,index1) in item0" :key="index1">
                                {{item1}}
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
.t2{
    .t2Item{
        position: relative;
        .bgk{
            display: block;
            width: 100%;
            height: auto;
        }
        .box{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
    }
}
.t2m1{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
    padding-top: 130px;
    .i1a{
        text-align: center;
        .i1b{
            font-size: 56px;
            font-family: 'NotoSansCJK-Bold'!important;
            color: #FFFFFF;
        }
        .i1c{
            margin: auto;
            margin-top: 20px;
            font-size: 22px;
            color: #C2C2C2;
            width: 670px;
        }
    }
    .i1d{
        width: 670px;
        display: flex;
        justify-content: space-between;
        color: #fff;
        .i1e{
            width: 30%;
        }
        .i1f{
            font-family: 'NotoSansCJK-Bold'!important;
            height: 75px;
            .i1f1{
                font-size: 60px;
                background: linear-gradient(#000, #fff, #000);
                color: transparent;
                -webkit-background-clip: text;
            }
            .i1f2{
                font-size: 30px;
                background: linear-gradient(#000, #fff, #000);
                color: transparent;
                -webkit-background-clip: text;
            }
        }
        .i1g{
            color: #DCDCDC;
            font-size: 23px;
            line-height: 25px;
        }
    }
}
.t2m2{
 .t2a{
     width: 670px;
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: flex-start;
     color: #fff;
     .t2b{
         font-size: 44px;
         font-family: 'NotoSansCJK-Bold'!important;
     }
     .t2c{
         color: #C2C2C2;
         font-size: 26px;
         margin-top: 6px;
         margin-bottom: 60px;
     }
     .t2d{
         font-size: 20px;
         line-height: 28px;
     }
 }   
}
.t2m3{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .t2a{
        font-size: 44px;
        color: #000;
        font-family: 'NotoSansCJK-Bold'!important;
    }
    .t2b{
        margin-top: 90px;
        border-bottom: 2px solid #9EC4DB;
        .t2c{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1200px;
            height: 35px;
            font-size: 18px;
            .t2cItem{
                text-align: center;
            }
            .t2cItem:nth-of-type(1){
                width: 15%;
            }
            .t2cItem:nth-of-type(2){
                width: 20%;
            }
            .t2cItem:nth-of-type(3){
                width: 15%;
            }
            .t2cItem:nth-of-type(4){
                width: 20%;
            }
            .t2cItem:nth-of-type(5){
                width: 10%;
            }
            .t2cItem:nth-of-type(6){
                width: 20%;
            }
        }
        .t2c.tc{
            background-color: #9EC4DB;
        }
    }
}
.t2m5{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    .t5d{
        width: 900px;
        .t5a{
            color: #515151;
            font-size: 44px;
            font-family: 'NotoSansCJK-Bold'!important;
            text-align: center;
        }
        .t5aImg{
            width: 100%;
            height: auto;
            margin-top: 60px;
        }
        .t5b{
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            font-size: 22px;
            .t5c{
                width: 27.3%;
                text-align: center;
            }
            .t5c:nth-of-type(2){
                margin-left: -5%;
            }
        }
    }
}
.t2m6{
    color: #515151;
    font-size: 44px;
    font-family: 'NotoSansCJK-Bold'!important;
    text-align: center;
    margin-top: 100px;
}
.t2i7Box{
    background-color: #000000;
    position: initial!important;
    .t2m7{
        padding-top: 140px;
        padding-bottom: 170px;
        color: #fff;
        .i7a{
            font-family: 'NotoSansCJK-Bold'!important;
            font-size: 44px;
            text-align: center;
            padding-top: 0;
        }
        .i7b{
            margin-top: 100px;
            .i7c{
                display: flex;
                height: 40px;
                align-items: center;
                justify-content: space-between;
                .i7d{
                    width: 31%;
                    text-align: center;
                    display: flex;
                    justify-content: space-between;
                    font-size: 18px;
                }
                .i7e{
                    font-size: 18px;
                    padding-left: 30px;
                    padding-right: 30px;
                }
                .i7f{
                    font-family: 'NotoSansCJK-Bold'!important;
                    justify-content: center;
                }
            }
            .i7c:nth-child(odd){
                background-color: #272829;
            }
        }
    }
}
.i7a{
    font-size: 44px;
    font-family: 'NotoSansCJK-Bold'!important;
    color: #000;
    width: 540px;
    padding-top: 13%;
    text-align: justify;
}
.i7bImg{
    width: 540px;
    height: auto;
    margin-top: 5%;
}
.i8b{
    color: #fff;
    width: auto;
}
.i8f{
    font-size: 44px;
    font-family: 'NotoSansCJK-Bold'!important;
    color: #fff;
    // margin-top: 120px;
    text-align: center;
}
.i8a{
    padding: 0!important;
}
.i8b{
    justify-content: center!important;
}
.i8c{
    padding-left: 20px!important;
}
.i8b:nth-of-type(8){
    color: #16B0FF;
}
</style>