<template>
  <div id="app">
    <pageOne msg="i am page1"/>
      <w-textarea></w-textarea>
  </div>
</template>

<script>
import pageOne from './components/pageOne.vue'

export default {
  name: 'app',
  components: {
    pageOne
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
