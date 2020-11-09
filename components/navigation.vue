<template>
    <div class="header">
        <div class="container">
            <h1 class="Header__Title">
            banner
            </h1>
            <nav class="Header__Menu">
                <NuxtLink :to="$i18n.path('')" class="Header__Link" exact>
                    {{ $t('home') }}
                </NuxtLink>
                <NuxtLink :to="$i18n.path('walkin')" class="Header__Link" exact>
                    {{ $t('about') }}
                </NuxtLink>
                <NuxtLink v-if="$i18n.locale === 'zh'" :to="`/en` + $route.fullPath" class="Header__Link" active-class="none" exact>
                    {{ $t('en') }}
                </NuxtLink>
                <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="Header__Link" active-class="none" exact>
                    {{ $t('zh') }}
                </NuxtLink>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>

.container {
  width: 75%;
  margin: 0 auto;
  display: flex;
  background-color: #efefef;
  justify-content: space-between;
  align-items: center;
}
</style>