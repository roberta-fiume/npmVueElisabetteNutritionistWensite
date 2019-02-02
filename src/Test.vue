<template>
    <div>
       <div class="question-and-answers-container">
           <!-- <div class="question-box">
                <h1> 1) Al mattino mangio frequentemente brioche e cappuccino al bar. </h1>
            </div> -->
            <question :questionNumber="$route.params.number"></question>
            <div class="div-select-answer">
                    <div class="yes-box">
                        <input type="radio" class="yes" value="Si" v-model="answers">
                        <label for="yes"> Si </label>
                        <br>
                    </div>
                    <div class="no-box">
                        <input type="radio" class="no" value="No" v-model="answers">
                        <label for="no"> No </label>
                        <br>  
                    </div>   
            </div>
            <div class="final-answer"> 
                <h2>Your answer is: {{answers}}</h2>
            </div>
       </div>
        <button v-on:click="navigateToNextQuestion()">NEXT</button>
       </div>

       </div>
    </div>
</template>

 <script>
 import Question from './Question.vue';
 
    export default {
        data() {
            return {
                answers: ""
            }
        },

        methods: {
            navigateToNextQuestion() {
                let currentQuestionNumber = this.$route.params.number;
                currentQuestionNumber++;
                console.log("on click 1111111", currentQuestionNumber);
                this.$router.push('/test/' + currentQuestionNumber);
                console.log("on click 2222222", currentQuestionNumber);
            }
        },

        components: {
            "question": Question
        }
    }
 </script>
 
<style>

    body {
        background-image: url('../src/assets/img/test-img.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;  
    }
    .question-and-answers-container{
        display: flex;
        flex-direction: column;
        width: 900px;
        height: 600px;
        background-color: yellow;
        flex-direction: column
    }
    .question-box {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: aquamarine;
        width: 850px;
        height: 100px;
    }

    .div-select-answer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center; 
        width: 600px;
        height: 150px;
        background-color: pink;
    }

    .yes {
        color:blue
    }

</style>
