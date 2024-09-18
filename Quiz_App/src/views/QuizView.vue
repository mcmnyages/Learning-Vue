<script setup>
import Question from "@/components/Question.vue"
import QuizHeader from "@/components/QuizHeader.vue";
import { ref,computed } from "vue";
import Result from "@/components/Result.vue";
import { useRoute } from "vue-router";
import quizes from "../data/quizes.json"

const route=useRoute()
const quizId= parseInt(route.params.id)
const quiz=quizes.find(q=>q.id===quizId)
const currentQuizIndex = ref(0)
const noOfCorrectAnswers = ref(0)
const showResults = ref(false)
const questionStatus = computed (()=>  `${currentQuizIndex.value}/${quiz.questions.length}`)
const barPercentage = computed(()=> `${currentQuizIndex.value/quiz.questions.length*100}%`)

const onOptionSelected=(isCorrect)=>{
    if(isCorrect){
        noOfCorrectAnswers.value++
    }
    if(quiz.questions.length-1===currentQuizIndex.value){
        showResults.value=true
    }
    currentQuizIndex.value++
}

</script>
 
<template>
    <div>
 
        <QuizHeader :questionStatus="questionStatus"
        :barPercentage="barPercentage"
        />
        </div>
        <div>
       <Question v-if="!showResults" :question="quiz.questions[currentQuizIndex]" 
       @selectedOption="onOptionSelected"
       />

       <Result
       :noOfCorrectAnswers="noOfCorrectAnswers"
       :quizLength="quiz.questions.length"
        v-else/>
    </div>
   

    
</template>

