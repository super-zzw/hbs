<template>
  <div class="Content">
    <div class="container">
      <h1 class="Content__Title wow fadeInUp">
        {{ $t('home') }}
      </h1>
    </div>
  </div>
</template>

<script>
import utils from '@/utils/methods.js'
export default {
  mounted(){
    utils.initWow(this)
  }
}
</script>
