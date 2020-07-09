<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p class="colorSize">我是页面1</p>
    <Title></Title>
  </div>
</template>

<script>
import Title from '@title'
export default {
  name: 'HelloWorld',
  components:{
    Title
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
