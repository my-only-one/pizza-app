<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../../src/assets/icon.png" alt="">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email" name="email">邮箱</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <button type="submit" class="btn btn-block btn-success">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from  'axios'
  export default {
    name: "Register",
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      onSubmit() {
        axios.get('/users.json')
          .then(res=>{
            const data = res.data
            const users = []
            for (let key in data) {
              const user = data[key]
              users.push(user)
            }
            // 实现过滤 filter就是一个数组过滤器，参数接收一个函数，数组的每一项经过函数过滤，返回一个符合过滤条件的新数组
            let result = users.filter((item, i, arr) => {
              return item.email === this.email && item.password === this.password
            })
            console.log(result)
             if (result != null && result.length > 0) {
               this.$router.push({name: 'homeLink'})
             } else {
               alert('账号或密码错误')
             }
          })
      }
    }
  }
</script>

<style scoped>

</style>
