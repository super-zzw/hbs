<template>
  <div class="container">
    <div class="quesItem">
      <div class="top">
        <div class="left">
          <img src="~assets/image/icon6.7-1.png" alt="" />
          <p class="ques">什么是新风系统？</p>
        </div>
        <img src="~assets/image/icon6.7-2.png" alt="" class="right" />
      </div>
      <div class="answer">
        <p class="tag">A：</p>
        <p class="con">
          新风系统是持续高效的对室内外空气进行24小时不间断循环，并能使进入室内的空气通过
          内置的高效空气过滤净化系统处理的空气置换系统。被昵称为“房屋的呼吸系统”，也是室内空气新鲜度的调节器。新风系统主要是将室外新鲜气体经过过滤、净化，通过管道输送到室内，同时将室内污浊、含氧量低的空气排出室外。
        </p>
      </div>
    </div>
    <div class="quesItem">
      <div class="top">
        <div class="left">
          <img src="~assets/image/icon6.7-1.png" alt="" />
          <p class="ques">为什么需要新风系统？</p>
        </div>
        <img src="~assets/image/icon6.7-2.png" alt="" class="right" />
      </div>
      <div class="answer">
        <p class="tag">A：</p>
        <p class="con">
          1、不用开窗也能享受大自然的新鲜空气；<br>
          2、避免社会上广泛议论的“空调病”； 3、防止室内家具衣物的发霉；<br>
          4、随时排除室内装饰长期缓释的有害气体；<br>
          5、带来保持身体健康所必需的、高质量的、充足的新鲜空气。<br>
        </p>
      </div>
    </div>
    <img src="~assets/image/icon6.7-3.png" alt="" class="add" />
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.container {
  width: 900px;
  background: #F2F2F2;
  position: relative;
  border: 1px solid #CCCCCC;
  padding: 56px 62px;
  .quesItem {
    background: #F4F4F4;
    border: 1px solid #CCCCCC;
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
        font-size: 17px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: #808080;
        line-height: 28px;
      }
      .con {
        font-size: 16px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: #808080;
        line-height: 28px;
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