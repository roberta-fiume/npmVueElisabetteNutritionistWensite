<template>

    <div class="div-select-answer">
            <input type="radio" :checked="'selectedYes'===value" class="yes" value="Si" v-model="answers.positive" v-on:click="getValueYesFromRadioBox($event), uncheck(value)">
            <label for="val" > {{ getAnswer()}} </label>
            <br>
        <!--
            <input type="radio" class="no" value="No" v-model="answers">
            <label for="no">  No </label>
        -->
    
    </div>
    
</template>

<script>
     export default {
        props: ['answerNumber', 'selectedYes'],
    
        created() {
            console.log("Heloooooo11111", this.answerNumber);
        },

        data() {
            return {
                answers: [
                    {positive: "Si1", negative: "No"},
                    {positive: "Si2", negative: "No"},
                    {positive: "Si3", negative: "No"},
                    {positive: "Si4", negative: "No"},
                    {positive: "Si5", negative: "No"},
                    {positive: "Si6", negative: "No"},
                    {positive: "Si7", negative: "No"},
                    {positive: "Si8", negative: "No"},
                    {positive: "Si9", negative: "No"}
                ]
            }
        },

        methods: {
            getAnswer() {
                console.log("Hello, I work:", this.$data.answers[this.answerNumber].positive);
                return this.$data.answers[this.answerNumber].positive;
            },
             getValueYesFromRadioBox(valueYes) {
               console.log("Heyyyy");
               if (valueYes.target.checked) {
                console.log(valueYes.target.value);
               }
           },
           uncheck(val) {
               if (val === this.selectedYes) {
                   this.selectedYes = false
               } else {
                   this.selectedYes = val
               }
           }   
        }
    }
 </script>