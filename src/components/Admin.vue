<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <app-new-pizza v-on:getChangeData="updateData"></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
        <tr>
          <th>品种</th>
          <th>删除</th>
        </tr>
        </thead>
        <tbody v-for="(item, index) in list" :key="index">
        <tr>
          <td>{{item.name}}</td>
          <td>
            <button @click="delBtn(item)" class="btn btn-outline-danger btn-sm">&times;</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
  import axios from  'axios'
  import NewPizza from './NewPizza'
  export default {
    name: "Admin",
    data () {
      return {
        list: []
      }
    },
    created () {
      this.getData()
    },
    methods: {

      // 获取数据
      getData () {
        axios.get('/menu.json')
          .then(res=> {
            let menuArray = []
            let datas = res.data
            for (let key in datas) {
              datas[key]['id'] = key
              menuArray.push(datas[key])
            }
           this.list = menuArray
          })
          .catch(err => console.log(err))
      },
      // 子组件向父组件传递过来的数据
      updateData (e) {
        console.log(e)
        this.list.push(e)
      },
      // 删除
      delBtn (item) {
        fetch('https://mingyuan-318af.firebaseio.com/menu/' + item.id + '/.json', {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          },
        })
          .then(res => res.json)
          .then(data =>{
            alert('删除成功，即将跳转至菜单页')
            this.getData()
            setTimeout(()=>{
              this.$router.push({name: 'menuLink'})
            }, 2000)
            console.log(data)
          })
          .catch(err => console.log(err))

      }
    },
    components: {
      'app-new-pizza': NewPizza
    }
  }
</script>

<style scoped>

</style>
