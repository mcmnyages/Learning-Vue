<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="routes">
        <ul class="listroutes">
            <RouterLink to="/" class="custom-link">Home</RouterLink>
           <RouterLink to="/answers" class="custom-link">Answers</RouterLink>
            <RouterLink to="/about" class="custom-link">About</RouterLink>
        </ul>
    </div>
</template>
<style scoped>
/* Use the deep selector to apply styles inside child components */
.listroutes {
float: right;
}
.custom-link {
  text-decoration: none;
  color: rgb(124, 124, 139);
  padding: 10px;
  font-size: 23px;
  
  margin: 15px;
}

:v-deep .custom-link:hover {
  color: red; /* Changes the color on hover */
  font-weight: bold;
}
</style>