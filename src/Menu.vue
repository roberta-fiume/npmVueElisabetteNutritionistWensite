<template>
        <ul id="ul-menu">
            <li id="listMenu"><router-link to="/" class="routerLink"><p class="list-text">Home</p></router-link></li>
            <li id="listMenu"><router-link to="/whoIam" class="routerLink"><p class="list-text">Chi sono</p></router-link></li>
            <li id="listMenu"><router-link to="/howIcanHelpYou" class="routerLink"><p class="list-text">Come posso aiutarti</p></router-link></li>
            <li id="listMenu"><router-link to="/reasonsToHaveBia" class="routerLink"><p class="list-text">Perché effettuare l'analisi impedenziometrica della composizione corporea (BIA)?</p></router-link></li>
            <li id="listMenu"><router-link to="/doTest" class="routerLink"><p class="list-text">Fa' il tuo test</p></router-link></li>
        </ul>
</template>

<script>
export default {
   data() {
       return {
       
      }
   }
}

</script>

<style>

 #ul-menu {
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    width: 200px;
    height: 300px;
    background-color: black;
    color: white;
    /* opacity: 0.5; */
    justify-content: center;
    align-items: center;
    border-radius: 1px;
    border: 1px solid #74D397;
    font-family: 'Dosis';
  }

  #listMenu {
    width: 200px;
    align-items: center;
    display: flex;
    height: 90px;
    list-style: none;
    color: white;
    font-family: 'Dosis';
  }

  .list-text {
    color: white;
  }

  .list-text:hover {
    color: #74D397;
  }

  .routerLink {
    text-decoration: none;
  }

</style>

