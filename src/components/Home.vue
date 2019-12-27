<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="backgroud">
        <h1>欢迎大家品尝pizza！</h1>
        <h2>这里有你非常喜欢的pizza！</h2>
        <button class="btn btn-success" @click="goToMenu">let's order!</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data () {
      return {}
    },
    methods: {
      goToMenu () {
        // 跳转到上一次浏览的页面
        // this.$router.go(-1)

        // 指定跳转到某一个地址
        // this.$router.replace('/menu')
        // 指定跳转路由的名字
        this.$router.replace({name: 'adminLink'})

        // 通过push进行跳转,push可以传更多的参数
        // this.$router.push('/menu')
        this.$router.push({name: 'adminLink'})
      }
    }
  }
</script>

<style scoped>
  #home{
    background: url('../../src/assets/pizza.jpg');
    height: 85vh;
    padding: 10%;
  }
  h1,h2{
    margin: 6%;
  }
.backgroud{
  background-color: #eee;
  opacity: .8;
  max-width: 75vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
