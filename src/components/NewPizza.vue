<template>
  <form>
    <h3 class="text-muted my-5">添加新的Pizza</h3>
    <div class="form-group row">
      <label class="col-sm-1">品种</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.name" ref="name">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">描述</label>
      <div class="col-sm-11">
        <textarea rows="5" class="form-control" v-model="newPizza.description" ref="description"></textarea>
      </div>
    </div>
    <p><strong>选项1</strong></p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.size1" ref="size1">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.price1" ref="price1">
      </div>
    </div>

    <p><strong>选项2</strong></p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.size2" ref="size2">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.price2" ref="price2">
      </div>
    </div>
    <div class="form-group row">
      <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
    </div>

  </form>
</template>

<script>
  export default {
    name: "NewPizza",
    data() {
      return {
        newPizza: {
          name: '',
          description: '',
          size1: '',
          price1: '',
          size2: '',
          price2: '',
        },
        list: []
      }
    },
    methods: {

      validate() {
        if (this.newPizza.name === '') {
          alert('品种不能为空')
          this.$refs.name.focus()
          return false
        }
        if (this.newPizza.description === '') {
          alert('品种描述不能为空')
          this.$refs.description.focus()
          return false
        }
        if (this.newPizza.size1 === '') {
          alert('选项1尺寸不能为空')
          this.$refs.size1.focus()
          return false
        }
        if (this.newPizza.price1 === '') {
          alert('选项1价格不能为空')
          this.$refs.price1.focus()
          return false
        }
        if (this.newPizza.size2 === '') {
          alert('选项2尺寸不能为空')
          this.$refs.size2.focus()
          return false
        }
        if (this.newPizza.price2 === '') {
          alert('选项2价格不能为空')
          this.$refs.price2.focus()
          return false
        }
        return true
      },
      addMenuItem() {
        if (!this.validate()) {
          return false
        }

        let dataParams = {
          name: this.newPizza.name,
          description: this.newPizza.description,
          options: [
            {
              size: this.newPizza.size1,
              price: this.newPizza.price1,
            },
            {
              size: this.newPizza.size2,
              price: this.newPizza.price2,
            },
          ]
        }
        this.$emit('getChangeData', dataParams)
        // 第一种方法 fetch
        /*fetch('https://mingyuan-318af.firebaseio.com/menu.json', {
          method: 'post',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(dataParams)
        })
          .then(res => res.json())
          .then(data => this.$router.push({name: 'menuLink'}))
          .catch(err => console.log(err))*/
        // 第二种方法axios
        this.$axios.post('menu.json', dataParams)
          .then(res => {
            alert('添加成功，即将跳转至菜单页')
            setTimeout(()=>{
              this.$router.push({name: 'menuLink'})
            }, 2000)
          })
          .catch(err => console.log(err))
      }
    }
  }
</script>

<style scoped>

</style>
