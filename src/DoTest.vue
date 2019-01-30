<template>
    <div id="rootTest">
        <div id="test-title">
            <h2 class="h2-test-title"> Quanto sono corrette le tue abitudini alimentari?</h2>
            <br/>
            <h2 class="h2-test-title"> Scoprirlo è facile e veloce!</h2>
            <h2 class="h2-test-title">  
                Ti basteranno pochi minuti per capire in che modo il tuo stile di vita influenza il tuo stato di salute e benessere.
            </h2>
        </div>
        
        <div id="div-start-test">
            <router-link to="/Test" class="routerLink">
                <p class="list-text">INIZIA IL TEST</p>
            </router-link>
        </div>
    </div>  
</template>


<style>

/*
    body {
        background-image: url('../src/assets/img/test-img.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
    */

    #rootTest {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-image: url('../src/assets/img/test-img.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;  
        background-size: cover;  
    }
 
    #test-title {
        margin-top: 140px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 770px;
        height: 450px;
        color: whitesmoke;
     }

    .h2-test-title {
        font-size: 30px;
        text-align: center;
        width: 550px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #div-start-test {
        margin-top: 0px;
        color: whitesmoke;
        font-size: 23px;
        display: flex;
        align-items: center;
        justify-content: center;
        border : 1px solid #74D397;
        width: 200px;
        height: 80px;
    }

    #div-start-test:hover {
        color: #74D397;
        background-color: black;
    }


   
  

</style>


