<template>
    <div class="question-box">
        <!-- <ul>
            <li v-for="question in questions" :question="question" :key="question.id"> {{question.text}} </li>
        </ul> -->
        {{ getQuestion() }}
    </div>
</template>

<script>
     export default {
        props: ['questionNumber'],

        created() {
            console.log("routeParam question number111111111", this.questionNumber);
        },

        data() {
            return {
                questions: [
                    {text: "1) Question 1"},
                    {text: "2) Question 2"},
                    {text: "3) Question 3"},
                    {text: "4) Question 4"},
                    {text: "5) Question 5"},
                    {text: "6) Question 6"},
                    {text: "7) Question 7"},
                    {text: "8) Question 8"},
                    {text: "9) Question 9"},
                ]
            }
        },

        methods: {
            getQuestion() {
                return this.$data.questions[this.questionNumber].text;
            }
        }
    }
 </script>