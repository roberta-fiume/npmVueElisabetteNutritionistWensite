
<template>
  <div id="app">
    <book-appointment></book-appointment>
    <container-menu></container-menu>
    <router-view></router-view>
  </div>
</template>

<script>

 import BookAppointment from './BookAppointment.vue';

 import Menu from './Menu'

  export default {
    name: 'App',
    
    components: {
      "book-appointment": BookAppointment,
      "container-menu": Menu
    }
  }
</script>

<style>
  #app {
    display: flex;
    justify-content: space-around;
    background-image: url('../src/assets/img/strawberry.jpg');
    align-items: center;
    flex-wrap: wrap;
    width: 1300px;
    height: 800px;
    margin: 0 auto
  }
 
</style>
