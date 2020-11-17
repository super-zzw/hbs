<template>
  <div class="wrap">
    <navigation v-if="nav==1"></navigation>
    <navigation1  v-if="nav==2"></navigation1>
    <div class="content">
      <Nuxt />
    </div>
    <info></info>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import navigation from '@/components/navigation.vue'
import navigation1 from '@/components/navigation1.vue'
import info from '@/components/info.vue'
export default {
  components:{
    navigation,info,navigation1
  },
  data(){
    return{
        
    }
  },
  computed:{
    ...mapState(['nav'])
  },
  
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
