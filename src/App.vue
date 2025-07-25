<template>
  <div id="app">
    <MyElement />
  </div>
</template>

<script>
import MyElement from './components/Create/Create.vue'

export default {
  name: 'App',
  components: {
    MyElement
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
