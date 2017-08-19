<template>
  <div id="app">
    <p>{{total}}</p>
	  <children v-on:increment="incermentTotal"></children>		
	  
  </div>
</template>

<script>
import children from './components/slot'

export default {
  name:'app',
  data(){
  	return{
  		 total:0
  	}              
  },
  methods: {
  	incermentTotal(){
  		this.total += 1
   	}
  },
  components:{
  	children
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
