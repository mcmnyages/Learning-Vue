<script setup>
import AnswersReview from "./AnswersReview.vue";
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
const { quizLength, noOfCorrectAnswers } = defineProps([
  "noOfCorrectAnswers",
  "quizLength",
]);
</script>

<template>
  <div class="home">
    <!--<RouterLink to="/">Home</RouterLink>-->
  </div>
  <div class="results">
    <p>Your results ...</p>
    <h1>{{ noOfCorrectAnswers }}/{{ quizLength }}</h1>
  </div>
  <div class="answers">
  
  </div>
</template>
<style scoped>
.results {
  text-align: center;
  padding: 100px 0;
}
p {
  font-size: 25px;
}
h1 {
  font-size: 80px;
}
.home {
  font-size: 50px;
  color: aqua;
  text-decoration: none;
}
</style>
