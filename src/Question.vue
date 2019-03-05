<template>
    <div class="question-box">
        <!-- <ul>
            <li v-for="question in questions" :question="question" :key="question.id"> {{question.text}} </li>
        </ul> -->
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