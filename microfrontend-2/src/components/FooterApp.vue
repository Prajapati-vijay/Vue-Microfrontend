<!-- Header.vue -->
<template>
    <header class="header">
      <div style="border: 3px solid black; background: black; color: white; border-radius: 10px;">
      <h1>Hello From Microfrontend 2</h1>
      <h2>Hello From MF2</h2>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderApp',    
    
  }
  </script>
  
  <style scoped>
  .header {
    background-color: #333;
    color: #fff;
    padding: 10px  20px;
    text-align: center;
  }
  
  .navbar {
    display: flex;
    justify-content: center;
  }
  
  .navbar ul {
    list-style-type: none;
    padding: 0;
  }
  
  .navbar ul li {
    display: inline;
    margin: 0 10px;
  }
  
  .navbar ul li a {
    color: #fff;
    text-decoration: none;
  }
  </style>
  