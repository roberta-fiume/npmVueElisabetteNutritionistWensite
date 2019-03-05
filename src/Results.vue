<template>
    <div class="question-and-answers-container">
        <h1>Il tuo risultato è: </h1>
        <ul id="example-1">
            <li v-for="question in this.questions">
                Question: {{ question.question }}
                <br>
                Answer: {{ question.answer }}
            </li>
        </ul>
    </div>
</template>

<script> 

 import QuestionModel from "./QuestionModel.js"

    export default {
        data() {
            return {
                questions: []
            }
        },
        created() {
            this.getQuestions();
        },
        methods: {
            getQuestions() {
                console.log("My answers are: ", QuestionModel.data.questions);
                this.questions = QuestionModel.data.questions;

                console.log("my array!!!!!!!!!!!!!", this.questions);

                const answers = this.questions.map(question => question.answer);

                console.log("my answersssss!!!!!!!!!!!!!", answers);
            }
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
