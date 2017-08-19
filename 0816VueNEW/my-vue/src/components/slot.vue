<template>	
	<button v-on:click="incrementCounter">{{counter}}</button>
</template>

<script>


export default {
  name: 'children',
  props:[],
  data () {
    return {
        counter:0  
    }
  },
  methods:{
  	incrementCounter(){
  		this.counter += 1;
  		this.$emit('increment');
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
