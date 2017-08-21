<template>
  <div>
      <h1>todos</h1>
      <input type="text" class="new-todo" placeholder="请输入内容" v-on:keyup.enter="keyUp" v-model='msg'>
  </div>
</template>

<script>
export default {
  name: 'vue-header',
  data () {
        return {
          msg:''
        }
    },
    props:['isHave'],
    methods:{
        keyUp(){
            this.$emit('addOne',this.msg);
            this.msg='';
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
