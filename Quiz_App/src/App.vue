<script setup>
import { RouterView } from 'vue-router';
import NavComponet from './components/NavComponet.vue';
</script>


<template>
  <div class="orderComponents">
  <NavComponet/>
  <div class="container">
    <RouterView/>
  </div>
</div>
</template>

<style scoped >
.orderComponents{
  display: flexbox;
}

.container{
  max-width: 1000px;
  margin: 0 auto;
}
</style>