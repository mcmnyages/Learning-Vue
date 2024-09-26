<script setup>
import { ref } from "vue";
import quizes from "../data/quizes.json"
import { useRoute } from "vue-router";

const route = useRoute()
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);
</script>

<template>
   <div v-for="quiz in quizes" :key="quiz.id" ></div>
</template> 