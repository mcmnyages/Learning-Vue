<script>
import { ref, computed } from 'vue';

export default {
  props: {
    quiz: {
      type: Object,
      required: true,
    },
    selectedQuestionIndex: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const currentQuestion = computed(() => {
      if (props.quiz && props.quiz.questions && props.selectedQuestionIndex >= 0) {
        return props.quiz.questions[props.selectedQuestionIndex];
      }
      return null;
    });

    const selectedOption = ref(null);

    const isCorrectAnswer = (option) => option.isCorrect;

    return {
      currentQuestion,
      selectedOption,
      isCorrectAnswer,
    };
  },
};
</script>

<template>
  <div class="answer-container">
    <h3 v-if="currentQuestion">{{ currentQuestion.text }}</h3>
    <div class="options" v-if="currentQuestion">
      <div
        v-for="option in currentQuestion.options"
        :key="option.id"
        class="option"
        :class="{
          'correct-answer': isCorrectAnswer(option),
          'selected-answer': option.id === selectedOption,
        }"
        @click="selectedOption = option.id"
      >
        <div class="option-label">{{ option.label }}</div>
        <div class="option-text">{{ option.text }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Same styles as before */
.answer-container {
  background-color: #114721;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  margin-top: 20px;
}

.option {
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.option:hover {
  transform: translateY(-4px);
}

.option-label {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

.option-text {
  font-size: 18px;
  color: #666;
}

.correct-answer {
  background-color: #4caf50;
  color: #fff;
}

.selected-answer {
  border: 2px solid #4caf50;
}
</style>