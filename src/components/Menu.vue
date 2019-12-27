<template>
  <div class="row">
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
        <tr>
          <th>尺寸</th>
          <th>价格</th>
          <th>加入</th>
        </tr>
        </thead>
        <tbody v-for="(item, index) in getMenuItems" :key="index">
        <tr>
          <td>
            <strong>{{item.name}}</strong>
          </td>
        </tr>
        <tr v-for="(option, index) in item.options" :key="index">
          <td>{{option.size}}寸</td>
          <td>{{option.price}}元</td>
          <td>
            <button @click="addToBasket(item, option)" class="btn btn-sm btn-outline-success">+</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4">
      <div v-if="baskets.length > 0">
        <table class="table">
          <thead class="thead-default">
          <tr>
            <th>数量</th>
            <th>品种</th>
            <th>价格</th>
          </tr>
          </thead>
          <tbody v-for="(item, index) in baskets" :key="index">
          <tr>
            <td>
              <button class="btn btn-sm" @click="decreaseQuantity(item, index)">-</button>
              <span>{{item.quantity}}</span>
              <button class="btn btn-sm" @click="increaseQuantity(item)">+</button>
            </td>
            <td>{{item.name}}{{item.size}}寸</td>
            <td>{{item.price * item.quantity}}元</td>
          </tr>
          </tbody>
        </table>
        <p>总价:{{total}}元</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else="">{{basketText}}</div>
    </div>
  </div>
</template>

<script>
  // import axios from 'axios'
  export default {
    name: "Menu",
    data() {
      return {
        baskets: [],
        basketText: '购物车没有任何商品',
        getMenuItems: {
          1: {
            name: '比萨',
            description: '比萨描述',
            options:
              [
                {size: 20, price: 40},
                {size: 120, price: 140}
              ]
          }
        },
      }
    },
    methods: {
      addToBasket(item, option) {
        let basketParams = {
          name: item.name,
          size: option.size,
          price: option.price,
          quantity: 1
        }
        if (this.baskets.length > 0) {
          // 过滤
          let result = this.baskets.filter((basketParams) => {
            return (basketParams.name === item.name && basketParams.price === option.price)
          })
          console.log(result)
          if (result != null && result.length > 0) {
            result[0].quantity++
          } else {
            this.baskets.push(basketParams)
          }
        } else {
          this.baskets.push(basketParams)
        }
      },
      decreaseQuantity(item, index) {
        console.log(item, index)
        item.quantity--
        if (item.quantity <= 0) {
          // this.baskets.splice(index, 1);
          this.removeFromBasket(item)
        }
      },
      increaseQuantity(item) {
        item.quantity++
      },
      removeFromBasket(item) {
        this.baskets.splice(this.baskets.indexOf(item), 1);
      },
      getListData() {
        // 第一种方法
        /*fetch('https://mingyuan-318af.firebaseio.com/menu.json')
          .then(res => res.json())
          .then(data => {
            this.getMenuItems = data
          })
          .catch(err => console.log(err))*/

        // 第二种方法  需单独引入axios   import axios from 'axios'
        /*axios.get('menu.json')
          .then(res =>{
            this.getMenuItems = res.data
            console.log(res.data)
          })*/
        // 第三种方法  全局配置了axios,直接使用,不用每个组件单独引用axios
        this.$axios.get('menu.json')
          .then(res =>{
            this.getMenuItems = res.data
            console.log(res.data)
          })
      }
    },
    created() {
      this.getListData()
    },
    computed: { // computed 属性调用,必须要有返回值
      total() { // 计算总价
        let totaCost = 0
        for (let index in this.baskets) {
          var individualItem = this.baskets[index]
          totaCost += individualItem.price * individualItem.quantity
        }
        return totaCost
      }
    }
  }
</script>

<style scoped>

</style>
