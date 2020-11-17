<template>
    <div class="container">
        <div class="t1">
            <p class="tt tt2">凡购买本公司产品，可以享受免费保修服务，整机保修一年，核心部件（电机）三年（注：网络销售往返运费需要客户承担）。</p>
            <p class="tt tt2">三包有效期从发票开具之日起计算，用户凭有效购机发票或有效购机凭证，即可享受保修政策。</p>
        </div>
        <div class="t2">
            <div class="tt"><p class="tag">1.</p>售后服务规定仅在中国大陆范围内有效。</div>
            <div class="tt"><p class="tag">2.</p>保修期所有更换的旧零件为本公司所有。</div>
            <div class="tt"><p class="tag">3.</p>超过免费保修期后，我们将提供有偿维修服务。</div>
            <div class="tt"><p class="tag">4.</p>若用户自行拆机、自行维修、改装或非本公司授权的第三方拆动、改装、维修产品，保修服务立即终止。</div>
            <div class="tt"><p class="tag">5.</p>包修期内更换的备件仍旧按照当初购买该产品时的日期计算保修期。</div>
        </div>
        <div class="t3">
            <div class="desc">以下情形提供有偿保修服务，本公司将不提供免费保修服务：</div>
            <div class="cont">
                <div class="tt1"><p class="tag">(1)</p>因不可抗力因素（如水灾、火灾、雷击、地震等自然灾害）导致的故障；</div>
                <div class="tt1"><p class="tag">(2)</p>一切人为因素的损坏，包括不按说明书使用和保管、错误操作和自行不良运输等导致的故障，用户因电源电压不稳，不符合国家安全用电标准（AC220V+10%，50Hz）而造成的损坏；</div>
                <div class="tt1"><p class="tag">(3)</p>产品用做工业用途；</div>
                <div class="tt1"><p class="tag">(4)</p>产品的消耗品或者附件，如滤网等；</div>
                <div class="tt1"><p class="tag">(5)</p>不能提供有效购买凭证，如发票或网上购买凭证；</div>
                <div class="tt1"><p class="tag">(6)</p>超过保修期的产品。</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .container{
        width: 900px;

background: #F2F2F2;
border: 1px solid #C6C6C6;
padding: 60px;
.t1{
    margin-bottom: 50px;
    
}
.tt2{
    text-indent: 2em;
}
.tt{
        
font-size: 18px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #505050;
line-height: 36px;
display: flex;
    }
    .tag{
        margin-right: 5px;
    }
    }
    .t3{
        margin-top: 20px;
        
border: 1px solid #505050;
.desc{
    height: 40px;
    line-height: 40px;
    
font-size: 18px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color: #FFFFFF;
padding-left: 20px;
background: #505050;
}
.cont{
    padding: 22px;
    .tt1{
        
font-size: 18px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #808080;
line-height: 34px;
display: flex;

    }
}
    }
</style>