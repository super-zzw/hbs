<template>
  <div class="container">
    <div class="quesItem">
      <div class="top" @click="changeTab(0)">
        <div class="left">
          <img src="~assets/image/icon6.7-1.png" alt="" />
          <p class="ques">什么是新风系统？</p>
        </div>
        <img
          src="~assets/image/icon6.7-2.png"
          v-if="active[0]"
          alt=""
          class="right"
        />
        <img src="~assets/image/icon6.7-3.png" v-else alt="" class="right" />
      </div>
      <div class="answer" v-if="active[0]">
        <p class="tag">A：</p>
        <p class="con">
          新风系统是持续高效的对室内外空气进行24小时不间断循环，并能使进入室内的空气通过
          内置的高效空气过滤净化系统处理的空气置换系统。被昵称为“房屋的呼吸系统”，也是室内空气新鲜度的调节器。新风系统主要是将室外新鲜气体经过过滤、净化，通过管道输送到室内，同时将室内污浊、含氧量低的空气排出室外。
        </p>
      </div>
    </div>
    <div class="quesItem">
      <div class="top" @click="changeTab(1)">
        <div class="left">
          <img src="~assets/image/icon6.7-1.png" alt="" />
          <p class="ques">为什么需要新风系统？</p>
        </div>
        <img
          src="~assets/image/icon6.7-2.png"
          v-if="active[1]"
          alt=""
          class="right"
        />
        <img src="~assets/image/icon6.7-3.png" v-else alt="" class="right" />
      </div>
      <div class="answer" v-if="active[1]">
        <p class="tag">A：</p>
        <p class="con">
          1、不用开窗也能享受大自然的新鲜空气；<br />
          2、避免社会上广泛议论的“空调病”； 3、防止室内家具衣物的发霉；<br />
          4、随时排除室内装饰长期缓释的有害气体；<br />
          5、带来保持身体健康所必需的、高质量的、充足的新鲜空气。<br />
        </p>
      </div>
    </div>
    <div class="quesItem">
      <div class="top" @click="changeTab(2)">
        <div class="left">
          <img src="~assets/image/icon6.7-1.png" alt="" />
          <p class="ques">新风系统能为家人的健康做什么？</p>
        </div>
        <img
          src="~assets/image/icon6.7-2.png"
          v-if="active[2]"
          alt=""
          class="right"
        />
        <img src="~assets/image/icon6.7-3.png" v-else alt="" class="right" />
      </div>
      <div class="answer" v-if="active[2]">
        <p class="tag">A：</p>
        <p class="con">
          1、不用开窗也能享受大自然的新鲜空气；<br />
          2、避免社会上广泛议论的“空调病”；<br />
          3、防止室内家具衣物的发霉；<br />
          4、随时排除室内装饰长期缓释的有害气体；<br />
          5、带来保持身体健康所必需的、高质量的、充足的新鲜空气。<br />
        </p>
      </div>
    </div>
    <div class="quesItem">
      <div class="top" @click="changeTab(3)">
        <div class="left">
          <img src="~assets/image/icon6.7-1.png" alt="" />
          <p class="ques">新风系统与空气净化器有什么区别？</p>
        </div>
        <img
          src="~assets/image/icon6.7-2.png"
          v-if="active[3]"
          alt=""
          class="right"
        />
        <img src="~assets/image/icon6.7-3.png" v-else alt="" class="right" />
      </div>
      <div class="answer" v-if="active[3]">
        <p class="tag">A：</p>
        <p class="con">
          新风系统属于开放式的循环系统，每天24小时为室内提供新鲜的经过过滤的室外空气，让人们在室内也可以呼吸到新鲜、干净、高品质的空气;而空气净化器的使用效果受各种因素
          影响较大，处理能力随室内空气污浊度增加而迅速下降，虽然能吸附部分灰尘等有害物质，但无法吸附空气中的有害分子，而经过反复处理的空气，其品质大打折扣。
        </p>
      </div>
    </div>
    <div class="quesItem">
      <div class="top" @click="changeTab(4)">
        <div class="left">
          <img src="~assets/image/icon6.7-1.png" alt="" />
          <p class="ques">中央空调自带“新风功能”，和新风系统有什么区别？</p>
        </div>
        <img
          src="~assets/image/icon6.7-2.png"
          v-if="active[4]"
          alt=""
          class="right"
        />
        <img src="~assets/image/icon6.7-3.png" v-else alt="" class="right" />
      </div>
      <div class="answer" v-if="active[4]">
        <p class="tag">A：</p>
        <p class="con">
          中央空调的“新风功能”，注意只是功能，且不是主要功能，空调的主要功能都是调节温度。它的“新风功能”是通过进风口把室外的空气抽进来，经过一遍粗线条的过滤，将制冷或加热后的空气送到室内，回风口则将室内污浊的空气吸回去仍旧是室内循环。新风系统是通过新风机组、新风管道和风口，将室外的空气送入室内，再通过风口、排风管道和风机将室内的空气排出室外。简单的说，新风系统就是通过换气，将浑浊的室内空气排出去，将室外新鲜空气引进来，实现室内外空气的循环。
        </p>
      </div>
    </div>
     <div class="quesItem">
      <div class="top" @click="changeTab(5)">
        <div class="left">
          <img src="~assets/image/icon6.7-1.png" alt="" />
          <p class="ques">新风系统是否可以和空调一起配合使用？</p>
        </div>
        <img
          src="~assets/image/icon6.7-2.png"
          v-if="active[5]"
          alt=""
          class="right"
        />
        <img src="~assets/image/icon6.7-3.png" v-else alt="" class="right" />
      </div>
      <div class="answer" v-if="active[5]">
        <p class="tag">A：</p>
        <p class="con">
          新风系统+空调搭配使用，在功能上，空调和新风系统一起使用是不重复的。空调是通过制冷制热来调节室内温度的，而新风系统是利用室内外空气的循环来保证室内空气质量的。在提升室内空间舒适度上，两者是互补的。空调利用制冷制热的功能使人体处在一个相对舒适的温度下，新风系统则可以保证室内空气的新鲜度。
        </p>
      </div>
    </div>
     <div class="quesItem">
      <div class="top" @click="changeTab(6)">
        <div class="left">
          <img src="~assets/image/icon6.7-1.png" alt="" />
          <p class="ques">如果有一房间离排气口较远，那么此房间换气是否受影响？</p>
        </div>
        <img
          src="~assets/image/icon6.7-2.png"
          v-if="active[6]"
          alt=""
          class="right"
        />
        <img src="~assets/image/icon6.7-3.png" v-else alt="" class="right" />
      </div>
      <div class="answer" v-if="active[6]">
        <p class="tag">A：</p>
        <p class="con">
          不会受影响。因为，新鲜的空气是在压力场的作用下按照预定的路径流动的，只要有压力场的存在，气流就不会停滞，所以，离排气口远的房间的通风换气也不会受影响。
        </p>
      </div>
    </div>
    <div class="quesItem">
      <div class="top" @click="changeTab(7)">
        <div class="left">
          <img src="~assets/image/icon6.7-1.png" alt="" />
          <p class="ques">装上新风换气系统，卫生间里还须装排气扇吗？</p>
        </div>
        <img
          src="~assets/image/icon6.7-2.png"
          v-if="active[7]"
          alt=""
          class="right"
        />
        <img src="~assets/image/icon6.7-3.png" v-else alt="" class="right" />
      </div>
      <div class="answer" v-if="active[7]">
        <p class="tag">A：</p>
        <p class="con">
          新风换气系统是用来解决高品质空气问题的，与排气扇概念毫无关联。通过对系统的整合，
        </p>
      </div>
    </div>
    <div class="quesItem">
      <div class="top" @click="changeTab(8)">
        <div class="left">
          <img src="~assets/image/icon6.7-1.png" alt="" />
          <p class="ques">请问新风系统的管道要不要做保温呢？</p>
        </div>
        <img
          src="~assets/image/icon6.7-2.png"
          v-if="active[8]"
          alt=""
          class="right"
        />
        <img src="~assets/image/icon6.7-3.png" v-else alt="" class="right" />
      </div>
      <div class="answer" v-if="active[8]">
        <p class="tag">A：</p>
        <p class="con">
          室外新风引入管路，为防止在冬季外界气温低于0℃情况下，管道存在温差而产生管道外壁结露现象，应使用保温管道。
        </p>
      </div>
    </div>
     <div class="quesItem">
      <div class="top" @click="changeTab(9)">
        <div class="left">
          <img src="~assets/image/icon6.7-1.png" alt="" />
          <p class="ques">呼博士新风系统有哪些技术优势?</p>
        </div>
        <img
          src="~assets/image/icon6.7-2.png"
          v-if="active[9]"
          alt=""
          class="right"
        />
        <img src="~assets/image/icon6.7-3.png" v-else alt="" class="right" />
      </div>
      <div class="answer" v-if="active[9]">
        <p class="tag">A：</p>
        <p class="con">
          呼博士杀毒新风系统由钟南山领导的广州呼研所（现广州呼吸健康研究院）和蒙发利健康科技有限公司联合研发。广州呼研所是全国顶级呼吸疾病研究机构，20年来一直为呼博士的新风产品提供最先进的技术优化，经由我司112人超强研发团队进行杀毒科研成果精确转化，历经上千次科学实验对照，经国家权威检测报告验证，呼博士杀毒新风对室内空气中的冠状病毒消杀率高达99.99%。
        </p>
      </div>
    </div>
     <div class="quesItem">
      <div class="top" @click="changeTab(10)">
        <div class="left">
          <img src="~assets/image/icon6.7-1.png" alt="" />
          <p class="ques">新风系统寿命是多少？</p>
        </div>
        <img
          src="~assets/image/icon6.7-2.png"
          v-if="active[10]"
          alt=""
          class="right"
        />
        <img src="~assets/image/icon6.7-3.png" v-else alt="" class="right" />
      </div>
      <div class="answer" v-if="active[10]">
        <p class="tag">A：</p>
        <p class="con">
          新风系统产品核心部件就是风机，该产品采用德国技术的风机,风机可以连续运转500000小时，寿命10年以上。
        </p>
      </div>
    </div>
     <div class="quesItem">
      <div class="top" @click="changeTab(11)">
        <div class="left">
          <img src="~assets/image/icon6.7-1.png" alt="" />
          <p class="ques">家用新风系统该如何选择？</p>
        </div>
        <img
          src="~assets/image/icon6.7-2.png"
          v-if="active[11]"
          alt=""
          class="right"
        />
        <img src="~assets/image/icon6.7-3.png" v-else alt="" class="right" />
      </div>
      <div class="answer" v-if="active[11]">
        <p class="tag">A：</p>
        <p class="con">
          住宅密闭性的不断增强，选择合适的通风换气设备已经成为一种必然趋势，在寻找换气产品的时候，新风系统走进了广大用户的眼中，但是家用新风系统该如何选择，一直被广大用户所困扰。 
          <span class="con1">
              <span class="i">1：</span>新风系统类型：首先，我们需要了解新风系统有哪几款机型。新风系统共分为壁挂式新 风系统、柜式新风系统以及中央新风系统三大类型。
              
              
              <!-- <br> 2：装修前后：通常，中央式新风系统适用于装修前，装修前可以在墙壁和底部顶部铺设管 道，装修后既能保持美观又能净享舒适新风，而壁挂式和柜式新风系统一般用于已装修 的家庭，在不影响家庭装修的情况下改善用户的呼吸质量。<br> 3：适用情况：柜式新风系统，适用于已装修好的大面积空间，例如：会议室、客厅、实验 室等，壁挂式新风系统，适用于小面积的密闭空间，例如：婴儿房、卧室、办公室等。 呼博士 新风系统，集科研、生产、销售、服务为一体的高新技术企业，新风行业领军品牌，致力于为 每一户家庭带来更好的洁净空气，现拥有市场上最为全面，种类最多的新风系统可供选择。　 -->
          </span>
          <span class="con1"><span class="i">2：</span>装修前后：通常，中央式新风系统适用于装修前，装修前可以在墙壁和底部顶部铺设管 道，装修后既能保持美观又能净享舒适新风，而壁挂式和柜式新风系统一般用于已装修 的家庭，在不影响家庭装修的情况下改善用户的呼吸质量。 </span>
          <span class="con1"><span class="i">3</span>适用情况：柜式新风系统，适用于已装修好的大面积空间，例如：会议室、客厅、实验 室等，壁挂式新风系统，适用于小面积的密闭空间，例如：婴儿房、卧室、办公室等。 呼博士 新风系统，集科研、生产、销售、服务为一体的高新技术企业，新风行业领军品牌，致力于为 每一户家庭带来更好的洁净空气，现拥有市场上最为全面，种类最多的新风系统可供选择。</span>
        </p>

      </div>
    </div>
    <!-- <img src="~assets/image/icon6.7-3.png" alt="" class="add" /> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
   active:[false,false,false,false,false,false,false,false,false,false,false,false]
    };
  },
  methods: {
    changeTab(index) {
      this.$set(this.active, index, !this.active[index]);
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  width: 900px;
  background: #f2f2f2;
  position: relative;
  border: 1px solid #cccccc;
  padding: 56px 62px;
  .quesItem {
    background: #f4f4f4;
    border: 1px solid #cccccc;
    width: 100%;
    padding: 20px 20px 30px 23px;
    margin-bottom: 20px;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        img {
          width: 32px;
          height: 32px;
          margin-right: 10px;
        }
        .ques {
          font-size: 18px;
          font-family: Noto Sans S Chinese;
          font-weight: 500;
          color: #505050;
          line-height: 36px;
        }
      }
      .right {
        width: 26px;
        height: 26px;
      }
    }
    .answer {
      margin-top: 20px;
      display: flex;
      .tag {
        width: 42px;
        text-align: center;
        font-size: 17px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: #808080;
        line-height: 28px;
      }
      .con {
        flex: 1;
        font-size: 16px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: #808080;
        line-height: 28px;
        .con1:first-child{
           margin-top: 20px;
        }
         
        .con1{
          display: block;
        
          padding-left: 25px;
          position: relative;
          .i{
            width: 35px;
            display: inline-block;
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      }
    }
  }
  .quesItem:last-child {
    margin-bottom: 0;
  }
  .add {
    position: absolute;
    right: -50px;
    top: 80px;
    width: 30px;
    height: 28px;
  }
}
</style>