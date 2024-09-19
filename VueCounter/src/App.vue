<script setup>
import {ref} from "vue"
const count=ref(0);

</script>


<template>
  <main>
    <div>
      <h4>Your Current Count is:</h4>
      <h1>{{ count}}</h1>
      <div id="buttons"> 
         <button @click="count--" class="minus">-</button>
        <button @click="count++" class="add">+</button>
      </div>
      
    </div>
  </main>
</template>
<style scoped>

h4{
  font-size: 40px;
}


main{
  background-color:alice-blue;
  height:100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
div{
  text-align: center;
}
button{
  font-size: 25px;
  height: 50px;
  width: 50px;
  margin: 10px;
  border-radius: 20%;
  border: none;
}

button:hover{
  box-shadow: 3px 2px 10px white;
}

button.minus{
  background-color: red;

}
button.add{
  background-color: green;
}
</style>