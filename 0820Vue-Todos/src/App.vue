<template>
    <section class="todoapp" id="app">
        <div>
            <vue-header class="header" v-on:addOne="addOneFn" ></vue-header>
            <section class="main">
                <input class="toggle-all"
                    type="checkbox"
                    v-bind:checked="isAll"
                    v-on:click="allFn($event)"
                    v-show = 'isHave'
                >
                <ul class="todo-list">
                    <li is="li-item"
                        v-for="(item,key) in showlist"
                        v-bind:itemData="item"
                        @removeOne = "removeFn"
                        @oneCheck = "oneCheckFn"
                        @dblEdit = "dblEditFn"
                        @escEdit = "escEditFn"
                        @dblEnter = "dblEnterFn"
                    ></li>
                </ul>
            </section>
            <vue-footer
                :checkNum = "checkNum"
                :nowHash = "nowHash"
                @actHash = 'actHashFn'
                @clearNo = "clearNoFn"
                v-show = "isHave"
            ></vue-footer>
        </div>
    </section>
</template>

<script>
import vueHeader from './components/header';
import vueFooter from './components/footer';
import liItem from './components/li';

export default {
  name: 'app',
  data(){
      return {
          list:[

          ],
          nowHash:'#/all'

      }
  },
  mounted(){
      this.list = getLocalData('data');
  },
  components: {
      vueHeader,liItem,vueFooter
  },
  computed:{
      isAll(){
          return this.list.every((e)=>{
              return e.checked
          })
      },
      isHave(){
          console.log(this.list.length)
          if(this.list.length){
              localStorage.setItem('data',JSON.stringify(this.list));
          }
          return this.list.length;
      },
      checkNum(){
          var num = 0;
          this.list.forEach(e=>{
              if(!e.checked){
                  num++
              }
          })
          return num;
      },
      showlist(){
          switch(this.nowHash){
              case '#/active':
                return this.list.filter(e=>!e.checked);
              break;
              case '#/completed':
                return this.list.filter(e=>e.checked);
              break;
              case '#/all':
                return this.list
              break;
          }
      }
  },
  methods:{
      allFn($ev){
          this.list.forEach((e)=>{
              e.checked = $ev.target.checked;
          })
      },
      addOneFn(scanVal){
          var newOne = {
              con:scanVal,
              checked:false,
              isEdit:false,
              id:+new Date
          }
          this.list.push(newOne);
      },
      removeFn(id){
          var arr = this.list.concat();
          this.list = arr.filter(function(e){
              return e.id != id
          });
          if(!this.list.length){
              localStorage.setItem('data',JSON.stringify(this.list));
          }
      },
      oneCheckFn(id){
          this.list.forEach(function(e){
              if(e.id == id){
                  e.checked = !e.checked;
              }
          })
      },
      dblEditFn(id){
          this.list.forEach(function(e){
              if(e.id == id){
                  e.isEdit = true;
              }
          })
      },
      escEditFn(id){
          this.list.forEach(function(e){
              if(e.id == id){
                  e.isEdit = false;
              }
          })
      },
      actHashFn(theHash){
          this.nowHash = theHash;
      },
      clearNoFn(){
          var arr = this.list.concat();
          this.list = arr.filter(function(e){
              return !e.checked
          })
          if(!this.list.length){
    
              localStorage.setItem('data',JSON.stringify(this.list));
          }

      },
      dblEnterFn(editOne){
         this.list = this.list.map(function(e){
             if(e.id==editOne.id){
                 return editOne;
             }else{
                 return e;
             }
         })
     }
  }
}
function getLocalData(dataName){
    var initData = [
        {con:'示例：白日依山尽',checked:true,isEdit:false,id:1},
        {con:'示例：粒粒皆辛苦',checked:false,isEdit:false,id:2},
        {con:'示例：更上一层楼',checked:false,isEdit:false,id:3}
    ]
    var val = JSON.parse(localStorage.getItem(dataName));
    console.log(val)
    if(val && val.length){
        return val;
    }else{
        return initData;
    }
}



</script>

<style>
    @import '../static/css/index.css';
</style>
