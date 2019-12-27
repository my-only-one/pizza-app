<template>
  <div id="app">
    <div class="container">
      <appHeader></appHeader>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'

  export default {
    name: 'app',
    data() {
      return {}
    },
    components: { // 注册组件
      appHeader: Header
    }
  }
</script>

<style lang="scss">

</style>
