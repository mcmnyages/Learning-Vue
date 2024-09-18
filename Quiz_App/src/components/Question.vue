<script setup>

import { defineProps,defineEmits } from 'vue';
const {question}= defineProps(['question'])
const emit = defineEmits("selectedOption")

const emitSelectedOption = (isCorrect)=>{
    emit("selectedOption",isCorrect)
}
</script>


<template>
    <div class="questions-container">
        <h1 class="question">{{question.text}}</h1>
    </div>
    <div class="options-container">
        <div class="option" v-for="option in question.options" :key="option.id" @click="emitSelectedOption(option.isCorrect)">
            <p class="option-label">{{option.label}}</p>
            <p class="option-value">{{option.text}}</p>
        </div>
    </div>
</template>
<style scoped>
.question-container{
    margin-top: 20px;

}
.question{
    margin-bottom: 42px;
    font-size: 40px;
}

.option{
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
    width: 100%;

}
.option-label{
    background-color: gray;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    display:flex;
    font-size: 30px;
}

.option-value{
    background-color: rgb(65, 42, 14);
    width: 100%;
    font-size: 30px;
    padding: 0 20px;
}
</style>