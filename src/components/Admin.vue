<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <app-new-pizza ></app-new-pizza>
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
        <tbody v-for="(item, index) in getMenuItems" :key="index">
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
        // getMenuItems: []
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
            // 数据同步
            this.$store.commit('setMenuItems', menuArray)
           // this.getMenuItems = menuArray
          })
          .catch(err => console.log(err))
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
            /*this.$router.push({name: 'menuLink'})
            this.get()*/
            alert('删除成功!')
            this.$store.commit('removeMenuItems', item)
          })
          .catch(err => console.log(err))
      }
    },
    computed: {
      getMenuItems: {
        get() {
          // return this.$store.state.menuItems
          // 通过getters获取数据
          return this.$store.getters.getMenuItems
        },
        set() {}
      }
    },
    components: {
      'app-new-pizza': NewPizza
    }
  }
</script>

<style scoped>

</style>
