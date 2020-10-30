<template>
  <div class="Content">
    <div class="container">
      <h1 class="Content__Title wow fadeInUp">
        {{ $t('home') }}
      </h1>
      <p>{{ $t('home') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    console.log(1,process)
  },
  // mounted() {
  //   console.log(process)
  //   if (process.browser) {
  //     new this.$wow({
  //       live: true,
  //       offset: 0
  //     }).init();
  //   }
  // },
}
</script>
