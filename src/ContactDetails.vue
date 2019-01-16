<template>
    <div id="contact-details" v-show="seeContactsProps">
        <div class="div-img">
           <img :src="images.email" class="img">
           <p class="text">{{email}}</p>
        </div>

        <div class="div-img">
           <img :src="images.mobile" class="img">
           <p class="text">{{mobileNumber}}</p>
        </div>

        <div class="div-img">
           <img :src="images.fbIcon" class="img">
           <p class="text">{{fbPage}}</p>
        </div>

    </div>
</template>

<script>

export default {

    props: ['seeContactsProps'],

    data() {
        return { 
         images: {
            email: require('./assets/img/email.png'),
            mobile: require('./assets/img/mobile.png'),
            fbIcon: require('./assets/img/fb-icon.png')
         },
         email: "e.casciello@libero.it",
         mobileNumber: "3713549027",
         fbPage: "Facebook"
        }
    },
    methods: {
     
    }
}
</script>

<style>
    #contact-details {
        align-self: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 180px;
        color: white;
        background-color: black;
        border: 1px solid #74D397;
        font-family: 'Dosis';
        font-size: 20px;
    }

    .div-img {
        display: flex;
        flex-direction: row;
        width: 250px;
        height: 60px;
        align-items: center;
        justify-content: flex-start;
    }

    .img {
        margin-right: 10px;
        width: 40px;
        height: 40px;
    }
    .text {
        display: flex;
        width: 200px;
    }

    .text:hover {
        color: #74D397;
    }

   

</style>


