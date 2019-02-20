<template>
        <div class="div-select-answer">
                <input type="radio"  class="yes" value="Si" v-model="answers.positive" v-on:click="getValueYesFromRadioBox($event)">
                <label for="value" > {{ getAnswerYes()}} </label>
                <br>
            
                <input type="radio" class="no" value="No" v-model="answers.negative" v-on:click="getValueNoFromRadioBox($event)">
                <label for="no"> {{ getAnswerNo()}} </label>
        
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
                    {positive: "Si1", negative: "No1"},
                    {positive: "Si2", negative: "No2"},
                    {positive: "Si3", negative: "No3"},
                    {positive: "Si4", negative: "No4"},
                    {positive: "Si5", negative: "No5"},
                    {positive: "Si6", negative: "No6"},
                    {positive: "Si7", negative: "No7"},
                    {positive: "Si8", negative: "No8"},
                    {positive: "Si9", negative: "No9"}
                ], 
            }
        },

        methods: {
            getAnswerYes() {
                console.log("I am a DYNAMIC component:", this.$data.answers[this.answerNumber].positive);
                return this.$data.answers[this.answerNumber].positive;
            },
            getAnswerNo() {
                console.log("I am a DYNAMIC component:", this.$data.answers[this.answerNumber].negative);
                return this.$data.answers[this.answerNumber].negative;
            },

            getValueYesFromRadioBox(valueYes) {
              let valueNo = this.answers[0].negative;
              console.log("I AM VALUE NOOOO", valueNo)
               if (valueYes.target.checked)  {
                  return valueNo = false;
                console.log("I AM CHECKED, MY VALUE IS:",valueYes.target.value);
               }
            },

            getValueNoFromRadioBox(valueNo) {
                let valueYes = this.answers[0].positive;
              console.log("I AM VALUE YESSSSSSSSS", valueYes)
               if (valueNo.target.checked)  {
                  return valueYes = false;
                console.log("I AM CHECKED, MY VALUE IS:",valueNo.target.value);
               }
            }
        }
          
    }
 </script>