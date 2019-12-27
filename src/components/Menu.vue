<template>
  <h1>Menu</h1>
</template>

<script>
  export default {
    name: "Menu",
    data() {
      return {
        title: 'mingyuan'
      }
    },
    // 组件内守卫
    beforeRouteEnter: (to, from, next) => {
       // alert('hello' + this.title)
       next(vm => {
         console.log('hello ' + vm.title)
       })
     },
    beforeRouteLeave: (to, from, next) => {
      if (confirm('确定离开?') == true) {
        next()
      } else {
        next(false)
      }
    }
  }
</script>

<style scoped>

</style>
