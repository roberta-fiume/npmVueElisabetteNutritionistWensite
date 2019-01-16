<template>
        <ul id="ul-menu">
            <li v-for="voice in voices" id="listMenu"><p class="list-text">{{voice}}</p></li>
        </ul>
</template>

<script>
export default {
   data() {
       return {
       voices: ["Home","Chi sono", "Come posso aiutarti", "Perché  effettuare l'analisi impedenziometrica della composizione corporea?", "Fa' il tuo test"] 
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

  .list-text:hover {
    color: #74D397;
  }

</style>

