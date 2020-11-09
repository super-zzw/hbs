<template>
  <div class="wrap">
    <navigation></navigation>
    <div class="content">
      <Nuxt />
    </div>
    <info></info>
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue'
import info from '@/components/info.vue'
export default {
  components:{
    navigation,info
  },
  // mounted() {
  //   if (process.browser) {
  //     new this.$wow({
  //       live: false,
  //       offset: 0
  //     }).init();
  //   }
  // },
}
</script>

<style>
*, *:before, *:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html, body ,.wrap{
  min-height: 100vh;
}
.wrap{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content{
  flex: 1;
}
</style>
