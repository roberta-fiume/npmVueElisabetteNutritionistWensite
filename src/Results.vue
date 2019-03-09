<template>
    <div class="question-and-answers-container">
        <h1>Il tuo risultato è: </h1>
        <h2>{{resultTrueAnswers}}</h2>
        <h2>{{resultFalseAnswers}}</h2>
        <h2>Your result is {{result}}</h2>
        <h2> {{profile}}</h2>
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
                resultTrueAnswers: "",
                resultFalseAnswers: "",
                result: "",
                profile: ""
            }
        },
        created() {
            this.assignValueZeroToTrueAnswers();
            this.assignValueOneToFalseAnswers();
            this.sumResultTrueAndFalseAnswers();
            this.defineProfileAndPrintResultinHtml();
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
                
                const trueAnswer = "true";
                const trueAnswers = answers.reduce(function(n, val){
                    return n + (val === trueAnswer);
                }, 0)
                console.log("HERE ARE TRUE ANSWERS", trueAnswers);

                return trueAnswers
              
            },

            

            assignValueZeroToTrueAnswers() {
                //give 0 points for each TRUE
                let trueAnswers = this.countTrueAnswers();

                let resultYes = trueAnswers * 0

                console.log(" THIS IS RESULT YES", resultYes);

                this.resultTrueAnswers = resultYes

                return resultYes

            },
            

            countFalseAnswers() {
                const falseAnswer = "false";
                let answers = this.getQuestions();
                const falseAnswers = answers.reduce(function(n, val) {
                    return n + (val === falseAnswer);
                }, 0)
                console.log("HERE ARE FALSE ANSWERS", falseAnswers);

                return falseAnswers
            },
        

              assignValueOneToFalseAnswers() {
                //  give 1 point for each FALSE
                let falseAnswers = this.countFalseAnswers();

                let resultNo = falseAnswers * 1

                console.log(" THIS IS RESULT NO", resultNo);

                this.resultFalseAnswers = resultNo

                return resultNo

            },

            sumResultTrueAndFalseAnswers() {
                let resultYes = this.assignValueZeroToTrueAnswers();
                let resultNo = this.assignValueOneToFalseAnswers();
                
                let sumOfTrueAndFalseAnswers = resultYes + resultNo;

                this.result = sumOfTrueAndFalseAnswers

                console.log("THIS IS THE FINAL RESULT: ", this.result)

                return sumOfTrueAndFalseAnswers
            },

            defineProfileAndPrintResultinHtml() {
                let sumOfTrueAndFalseAnswers = this.sumResultTrueAndFalseAnswers();

                if (sumOfTrueAndFalseAnswers === 14) {
                    return this.profile = "CONGRATULATIONS"
                } else if (sumOfTrueAndFalseAnswers  < 14 && sumOfTrueAndFalseAnswers >= 8) {
                    return this.profile = "Siamo sulla buona strada!"
                } else if (sumOfTrueAndFalseAnswers === 7) {
                    return this.profile = "Alcune delle tue abitudini alimentari sono corrette MA..."
                } else if (sumOfTrueAndFalseAnswers >= 0 && sumOfTrueAndFalseAnswers <= 6) {
                    return this.profile = "Ahimè bisogna correre ai ripari!"
                }
                
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
