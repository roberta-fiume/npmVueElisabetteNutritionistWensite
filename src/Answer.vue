<template>
    <div id="answer-component">
        <input type="radio"  class="yes" v-model="answer" value=true>
        <label for="value">  Si </label>
        <br>
    
        <input type="radio" class="no" v-model="answer" value=false>
        <label for="no">  No </label>

    </div>
</template>

<script>
    import QuestionModel from "./QuestionModel.js"

     export default {

        props: ['questionNumber'],
    
        updated() {
            console.log("updateedddddddd, answer", this.answer);
            console.log("updateedddddddd, question number", this.questionNumber);
        },

        watch: {
            questionNumber: function(newValue, oldValue) {
                console.log("watch activatedddddd", newValue, oldValue)
                if(newValue > oldValue) {
                    this.answer = null;
                } else {
                    this.answer = QuestionModel.data.questions[this.questionNumber].answer;
                }
            }, 
            answer: function() {
                QuestionModel.data.questions[this.questionNumber].answer = this.answer;
                  console.log("getAnswer!!!! my answer is:", QuestionModel.data.questions[this.questionNumber]);
            }
        },
        
        data() {
            return {
                answer: null,
            }
            
        },

        methods: {
          
        }  
    }
 </script>

 <style>
    #answer-component {
        display: flex;
        height: 200px;
        width: 400px;
        background-color: pink;
        flex-direction: row;
        align-items: center;
    }
 </style>
 