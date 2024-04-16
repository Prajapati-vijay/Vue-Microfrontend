<template>
  <div>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <FooterApp></FooterApp>
  </div>
</template>

<script>

import FooterApp from './components/FooterApp.vue';
export default {
  name: 'App',
  components: {

    FooterApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
