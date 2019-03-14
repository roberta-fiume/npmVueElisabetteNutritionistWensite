<template>
    <div id="answer-component" class="p-smooth">
        <input type="radio"  class="radio-input" v-model="answer" value=true checked>
        <label for="value">  Si </label>
        <br>
    
        <input type="radio" class="radio-input" v-model="answer" value=false checked>
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
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        height: 200px;
        width: 500px;
        /* background-color: #74D397; */
        border: 3px solid  #0DFF92;;
        font-size: 27px;
        font-family: 'Dosis';
    }

    .radio-input {
        appearance: none;
        /* display: inline-block; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* position: relative; */
        background-color: white;
        color:  black;
        /* top: 10px; */
        height: 40px;
        width: 40px;
        border-radius: 50px;
        cursor: pointer;     
        margin-right: 7px;
        outline: none;
    }

    .radio-input:checked::before {
        display: flex;
        /* position: absolute; */
        /* left: 11px;
        top: 7px; */
        content: '\02143';
        transform: rotate(40deg);
    }
    .radio-input:hover {
        background-color: #0DFF92;
    }

    .radio-input:hover + label {
        color: #0DFF92;
    }
    .radio-input:checked {
        background-color: #0DFF92;
    }

    label {
        color: white;
        cursor: pointer;
    } 




    /*

     label {
        display: flex;
        width: 60px;
        font-size: 25px;
        margin: 10px auto;
        height: 30px;
        cursor: pointer;
        transition: all 0.25s linear;
        }

    .radioButton {
        display: flex;
        border: 5px solid rgb(185, 176, 176);
        border-radius: 100%;
        height: 25px;
        width: 25px;
        top: 30px;
        left: 20px;
        z-index: 5;
        transition: border .25s linear;
        transition: border .25s linear;
    } 

     label:hover {
        color: #0DFF92;
    } 

    */



    /* .radioButton::before {
        display: flex;
        content: '';
        border-radius: 100%;
        height: 15px;
        width: 15px;
        top: 5px;
        left: 5px;
        margin: auto;
        transition: background 0.25s linear; 
    } */


  /*
    input[type=radio] {
      border: 3px solid #0DFF92;
    }
     

    
    input[type=radio]:checked ~ label{
    color: #0DFF92;
    }

    */

    

    
 </style>
 