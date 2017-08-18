<template>	
  <button><slot></slot>我是个按钮</button>
</template>

<script>


export default {
  name: 'children',
  data () {
    return {
        val:{}
    }
  }

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
