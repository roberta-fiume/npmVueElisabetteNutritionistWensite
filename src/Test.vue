<template>
    <div >
       <div class="question-and-answers-container">
            <question :questionNumber="$route.params.number"></question>
            <answer :questionNumber="$route.params.number" :selectedYesAsProps="selectedYes"></answer>

            <div class="final-answer"> 
                <h2>Your answer is: {{answers}}</h2>
            </div>
        <div>
        <button v-on:click="navigateToPreviousQuestion()">PREVIOUS</button>
       </div>
       <div>
        <button v-on:click="navigateToNextQuestion(), uncheckAll(), saveAnswers($event)">NEXT</button>
       </div>

      

        </div>
    </div>
</template>

 <script>
 import Question from './Question.vue';
 import Answer from './Answer.vue'
 
    export default {
        data() {
            return {
                answers: "",
                selectedYes: "Si",
                selectedNo: "No",
            }
        },

        methods: {
            navigateToNextQuestion() {
                let currentQuestionNumber = this.$route.params.number;
                currentQuestionNumber++;
                this.$router.push('/test/' + currentQuestionNumber);
            },
           navigateToPreviousQuestion() {
               console.log("Hello!");
               let currentQuestionNumber = this.$route.params.number;
               currentQuestionNumber--;
               console.log(currentQuestionNumber);
               this.$router.go(-1);
           },

           saveAnswers() {
                
           },
     
           uncheckAll() {
               console.log("I UNCHECK ALL", this.selectedYes);
                    return this.selectedYes = false;
                }
            },
           
           /*
             getValueNoFromCheckBox(valueNo) {
               console.log("Heyyyy");
               if (valueNo.target.checked) {
                console.log(valueNo.target.value);
               }
           },
           */

          /*           v-model="selectedYes" */
        

        components: {
            "question": Question,
            "answer" : Answer
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
