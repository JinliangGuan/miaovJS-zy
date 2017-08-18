<template>
  <div class="hello">
          <input type="text" v-model="val"/>
          <bpp :v="val" n="num">
                  
          </bpp>

  </div>
</template>

<script>
import Bpp from './bpp'

export default {
  name: 'hello',
  data () {
    return {
            val:'',
            num:'123'
    }
  },
  components:{
          Bpp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
