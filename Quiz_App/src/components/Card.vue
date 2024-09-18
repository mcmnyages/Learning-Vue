<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router';

const {quiz}= defineProps(['quiz'])
const router = useRouter()
 
const NavigateToQuiz=()=>{
    router.push(`/quiz/${quiz.id}`)
}

</script>

<template>
  <div class="card" @click="NavigateToQuiz">
    <img :src="quiz.img" alt="" />
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} questions</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  margin-right: 35px;
  margin-bottom: 20px;
  box-shadow: 1px, 1px, 10px, rgb(240, 243, 240);
}

.card img {
  width: 100%;
  height: 190px;
  object-fit: cover;
  margin: 0;
}

.card .card-text {
  padding: 0px 5px;
}
.card .card-text h2 {
  font-weight: bold;
}
</style>
