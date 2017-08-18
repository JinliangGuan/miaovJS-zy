<template>
        <div>
                <h1>{{num}}</h1>
                <p>{{v}}</p>

        </div>
</template>

<script>

export default {
  name: 'bpp',
  props:[
          'v','num'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
