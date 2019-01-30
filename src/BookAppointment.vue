<template>
    <div id="book-appointment">
        <button id="p-book"  v-on:click="seeContacts=!seeContacts">{{bookApp}}</button>
         <contact-details  :seeContactsProps="seeContacts"></contact-details>
    </div>

   

</template>

<script>

import ContactDetails from './ContactDetails.vue';

export default {
   
    data() {
        return {
          bookApp : "Prenota un appuntamento",
          seeContacts: false
        }
    },

    methods: {
     
    },

    components: {
        "contact-details": ContactDetails,
    }
}
</script>

<style>
#book-appointment {
    color: #74D397;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 400px;
    width: 300px;
    border-radius: 1px;
}


#p-book {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65px;
    width: 300px;
    background-color: black;
    text-transform: uppercase;
    border: 1px solid #74D397;
    color: white;
    font-size: 17px;
    font-family: 'Dosis';
    margin-bottom: 50px;
}

#p-book:hover {
    color: #74D397;
}

#p-book:focus {
 outline: none;
}

</style>

