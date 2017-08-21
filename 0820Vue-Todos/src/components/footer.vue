<template>
      <footer class="footer">
          <span class="todo-count">
              <strong>{{checkNum}}</strong>
              <span>条未选中</span>
          </span>
        <ul class="filters">
          <li v-for="(item,key) in btnData">
            <a
              :href="item.hash"
              :class="{selected:nowHash==item.hash}"
              @click="clickHash(item.hash)"
            >{{item.name}}</a>
          </li>
        </ul>
        <button
          class="clear-completed"
          @click = "clickClear"
        >
            清除完成项
        </button>
      </footer>
</template>

<script>
export default {
    name: 'vue-footer',
    data () {
        return {
          btnData:[
              {name:'全部',checked:true,hash:'#/all'},
              {name:'未选中',checked:false,hash:'#/active'},
              {name:'已完成',checked:false,hash:'#/completed'}
          ],

        }
    },
    props:['checkNum','nowHash'],
    methods:{
        clickHash(btnHash){
            this.$emit('actHash',btnHash)
        },
        clickClear(btnHash){
            this.$emit('clearNo')
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
