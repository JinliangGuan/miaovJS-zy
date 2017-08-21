<template>
    <li :class="{completed:itemData.checked,editing:itemData.isEdit}">
        <div class="view">
            <input class="toggle" type="checkbox" v-bind:checked="itemData.checked" v-on:click="checkFn">
            <label
            @dblclick = "dblFn">{{itemData.con}}</label>
            <button class="destroy" v-on:click="delFn"></button>
        </div>
        <input
            class="edit"
            :value="this.itemData.con"
            @blur="enterFn($event)"
            @keyup.enter = "enterFn($event)"
            @keyup.esc = "escFn"

        >
    </li>
</template>

<script>
export default {
  name: 'li-item',
  props:['itemData'],
  data () {
        return {

        }
    },
    methods:{
        delFn(){
            this.$emit('removeOne',this.itemData.id)
        },
        checkFn(){
            this.$emit('oneCheck',this.itemData.id)
        },
        dblFn(){
            this.$emit('dblEdit',this.itemData.id);
        },
        enterFn($ev){
            console.log('enter')
            var editOne = {
                con:$ev.target.value,
                checked:this.itemData.checked,
                isEdit:false,
                id:this.itemData.id
            };
            this.$emit('dblEnter',editOne);
        },
        escFn(){
            this.$emit('escEdit',this.itemData.id);
        }
    }

}
</script>
<!-- <input class="edit" value="多多对对对"> -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
