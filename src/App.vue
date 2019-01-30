
<template>
  <div id="app">
        <router-view></router-view>
        <div class="boxMenuAndBookAppoint">
          <book-appointment></book-appointment>
           <container-menu></container-menu>
        </div>
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
 
  body {
    height: 100%;
    width: 100%;
    background-image: url('../src/assets/img/strawberry.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-end;
  }

  #app {
    display: flex;
    justify-content: flex-end;
    /*background-image: url('../src/assets/img/strawberry.jpg');*/
    align-items: center;
    flex-wrap: wrap;
    width: 1300px;
    height: 800px;
    margin: 0 auto;
  }

  .boxMenuAndBookAppoint {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: lightgreen;
    height: 800px;
    width: 300px;
  }

  
</style>
