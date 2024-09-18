<script setup>
import Card from "../components/Card.vue";
import q from "../data/quizes.json"
import {ref, watch} from "vue"
const quizes = ref(q)
const search = ref("")

watch(search,()=>{
  // const filtered = quiezes.value.filter(item => item.name.toLowerCase().includes(search.value.toLowerCase()))
  quizes.value=q.filter(quiz=>quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
<div>
  <header>
    <h1>Quizes </h1>
    <input type="text" v-model.trim="search"  placeholder="Search...">
  </header>
  <div class="options-container">
   <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
    <!-- <div class="card" v-for="quiz in quizes" :key="quiz.id">
      <img :src="quiz.img" alt="">
      <div class="card-text">
        <h2>{{quiz.name}}</h2>
        <p>{{ quiz.questions.length }} questions</p>
      </div >
    </div> -->
  </div>
</div>
</template>

<style>

header{
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
header h1{
  font-weight: bold;
  margin-right: 30px;
}
header input{
  border: none;
  background-color: gray,0.1;
  padding: 10px;
  border-radius: 5px;
}

.options-container{
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;

}


</style>
