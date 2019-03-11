<template>
    <div class="question-box">
        {{ getQuestion() }}
    </div>
</template>

<script>
    import QuestionModel from "./QuestionModel.js"

    export default {
        props: ['questionNumber'],

        created() {
            console.log("routeParam question number111111111", this.questionNumber);
        },

        // data() {
            // return {
            // }
        // },

        methods: {
            getQuestion() {
                console.log("All questions", QuestionModel.data.questions);
                return QuestionModel.data.questions[this.questionNumber].question;
            }
        }
    }
 </script>