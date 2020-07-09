<template>
  <div id="app">
    <pageTwo msg="elemen-ui表单校验 循环校验 表格校验"/>
  </div>
</template>

<script>
import pageTwo from './components/pageTwo.vue'

export default {
  name: 'app',
  components: {
    pageTwo
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
