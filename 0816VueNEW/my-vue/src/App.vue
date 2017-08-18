<template>
  <div id="app">
    
    <children>
    	<span>我是要显示出来的文字</span>
    	<p>还有哦</p>
    </children>	
  </div>
</template>

<script>
import children from './components/slot'

export default {
  name:'app',
  data(){
  	return{
  		 
  	}
	              
  },
  methods: {
    
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
