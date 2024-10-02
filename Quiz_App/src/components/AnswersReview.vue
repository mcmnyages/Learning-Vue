<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  quiz: {
    type: Object,
    required: true,
  },
});

const isCorrectAnswer = (option) => option.isCorrect;
</script>

<template>
  <div class="answers-review">
    <h2>Answers Review</h2>
    <div v-for="question in quiz.questions" :key="question.id" class="question-review">
      <h3>{{ question.text }}</h3>
      <div class="options">
        <div
          v-for="option in question.options"
          :key="option.id"
          class="option"
          :class="{ 'correct-answer': isCorrectAnswer(option) }"
        >
          <div class="option-label">{{ option.label }}</div>
          <div class="option-text">{{ option.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.answers-review {
  background-color: #284a57;
  padding: 20px;
  border-radius: 8px;
  color: black;
}

.answers-review h2{
  font-size: 45px;
  text-align: center;

}

.answers-review h3{
  font-size: 34px;
  margin-left: 30px;
}

.question-review {
  margin-bottom: 20px;
}

.options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  margin-top: 10px;
}

.option {
  background-color: #fff;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.correct-answer {
  background-color: #4caf50;
  color: #fff;
}

.option-label {
  font-weight: bold;
  margin-bottom: 4px;
}
.option-text{
  font-size: 20px;
}
</style>