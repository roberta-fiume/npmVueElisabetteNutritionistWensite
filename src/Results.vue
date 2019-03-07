<template>
    <div class="question-and-answers-container">
        <h1>Il tuo risultato è: </h1>
        <h2>{{result}}</h2>
        <!-- <ul id="example-1">
            <li v-for="question in this.questions">
                Question: {{ question.question }}
                <br>
                Answer: {{ question.answer }}
            </li>
        </ul> -->
    </div>
</template>

<script> 

 import QuestionModel from "./QuestionModel.js"

    export default {
        data() {
            return {
                questions: [],
                result: ""
            }
        },
        created() {
            this.countTrueAnswers();
        },

        methods: {
            getQuestions() {
                console.log("My answers are: ", QuestionModel.data.questions);
                this.questions = QuestionModel.data.questions;

                console.log("my array!!!!!!!!!!!!!", this.questions);

                const answers = this.questions.map(question => question.answer);

                console.log("my answersssss!!!!!!!!!!!!!", answers);

                return answers

            },

            countTrueAnswers() {
                console.log("I COUNT THE ANSWERS!!!!");
                let answers = this.getQuestions();
                console.log("I'M THE ARRAY OF ANSWERS:", answers);
                //give 0 points for each TRUE
                const trueAnswer = "true";
                const trueAnswers = answers.reduce(function(n, val){
                    return n + (val === trueAnswer);
                }, 0)
                console.log("HERE ARE TRUE ANSWERS", trueAnswers);


                let resultYes = trueAnswers * 0

                console.log(" THIS IS RESULT YES", resultYes);

                this.result = resultYes

                return resultYes
              
            },


             // FOR TOMORROW: ADJUST FUNCTION COUNTTRUEANSWERS

            // countFalseAnswers() {
            //     //  give 1 point for each FALSE
            //     const falseAnswer = "false";
            //     const falseAnswers = answers.reduce(function(n, val) {
            //         return n + (val === falseAnswer);
            //     }, 0)
            //     console.log("HERE ARE FALSE ANSWERS", falseAnswers);
            // }
        }
    }
</script>

<style>
    .question-and-answers-container{
        display: flex;
        flex-direction: column;
        width: 900px;
        height: 600px;
        background-color: yellow;
        flex-direction: column
    }
</style>
