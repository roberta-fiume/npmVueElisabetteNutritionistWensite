<template>
    <div id="main-cointainer">
       <div class="question-and-answers-container">
          <h2><question :questionNumber="$route.params.number"></question></h2>
            <answer :questionNumber="$route.params.number"></answer> 

            <div>
                <button v-on:click="navigateToPreviousQuestion()">PREVIOUS</button>
            </div>
     
            <div>
                <button v-on:click="continueWithTest()">NEXT</button>
            </div>
        </div>

   
    </div>
</template>

 <script>
 import Question from './Question.vue';
 import Answer from './Answer.vue';
 import Results from './Results.vue'
 import QuestionModel from "./QuestionModel.js"
 
    export default {
        data() {
            return {
                answers: "",
            }
        },

        methods: {
            continueWithTest() {
                let currentQuestionNumber = this.$route.params.number;
                currentQuestionNumber++;

                if(this.isTestFinished(currentQuestionNumber)) {
                    this.goToResult();
                } else {
                    this.goToNextQuestion(currentQuestionNumber);
                }
            },

           navigateToPreviousQuestion() {
               let currentQuestionNumber = this.$route.params.number;
               currentQuestionNumber--;
               this.$router.go(-1);
           },

           isTestFinished(currentQuestionNumber) {
               let totalNumberOfQuestions = QuestionModel.data.questions.length;
               
               return currentQuestionNumber === totalNumberOfQuestions; //there are no more questions left in the array!!!!!
           },
           goToResult() {
               this.$router.push('/result');
           },
           
           goToNextQuestion(currentQuestionNumber) {
               this.$router.push('/test/' + currentQuestionNumber);
           }
        },
         
        components: {
            "question": Question,
            "answer" : Answer,
            "results": Results,
        }
    }
 </script>
 
<style>

    #main-cointainer {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        font-family: 'Dosis';
        
    }

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
        flex-direction: column;
        background-color: black;
        opacity: 0.7;
        align-items: center;

    }
    .question-box {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: aquamarine;
        color: black;
        width: 850px;
        height: 150px;
        font-size: 25px;

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

  

</style>
