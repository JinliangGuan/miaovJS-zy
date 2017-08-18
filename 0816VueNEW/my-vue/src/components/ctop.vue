<template>
  <li>
  	<input type="checkbox" @click="click(val)" v-model="val.checked"/>
  	<span>{{val.name}}</span>
  </li>
</template>

<script>


export default {
  name: 'Ctop',
  props:['pVal'],
  data () {
    return {
            val:{...this.pVal},
    }
  },
  methods: {
    click(val){
    	this.$emit('childChange',val)
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
