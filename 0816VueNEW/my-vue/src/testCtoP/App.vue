<template>
  <div id="app">
    
    {{arr}}
    <ul>
    	<ctop @childChange="parentChange" v-for="(val,key) in arr" :pVal="val"></ctop>
    	
    </ul>
  </div>
</template>

<script>
import Ctop from './components/ctop'

export default {
  name:'app',
  data(){
  	return{
  		 arr:[
	          {name:'空山新雨后',checked:true,id:1},
	          {name:'天气晚来秋',checked:false,id:2},
	          {name:'粒粒皆辛苦',checked:false,id:3}
	          ] 
  	}
	        
         
  },
  methods: {
    parentChange(val){
    	
    	this.arr.forEach((e)=>{
    		if(e.id == val.id){
    			e.checked = val.checked;
    		}
    	})
    	console.log(val)
    }
  },
  components:{
  	Ctop
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
