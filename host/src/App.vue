<template>
  <div>
    <HeaderApp></HeaderApp>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld title="Module fedration test" />
   <FooterApp></FooterApp>
  </div>
</template>
<script>

import HelloWorld from "./components/HelloWorld.vue";
import { defineAsyncComponent } from "vue";
const HeaderApp = defineAsyncComponent(() => import("mf/HeaderApp"));
const FooterApp = defineAsyncComponent(() => import("mf2/FooterApp"));


export default {
  name: 'App',
  components: {
    HeaderApp,
    HelloWorld,
    FooterApp,
  },

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
