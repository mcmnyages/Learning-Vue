<script setup>
import {ref} from "vue"
const showModal= ref(false)
const newNote =ref("")
const notes = ref([])
const errorMessage= ref("")
function randomColor() {
    return 'hsla(' + (Math.random() * 360) + ', 70%, 50%, 1)';
}

const addNote =()=>{
  if(newNote.value.length <10){
    return errorMessage.value="Note must be 10 charaters or more!"
  }
  notes.value.push({
    id:Math.floor(Math.random()*100000),
    text:newNote.value,
    date:new Date(),
    backgroundColor:randomColor(),
    })
    showModal.value =false
    newNote.value=""
    errorMessage.value=""
  }
  
  
</script>


<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea  name="note" id="note" cols="70" rows="10" color="black" v-model.trim="newNote"></textarea>
        <p v-if="errorMessage" >{{errorMessage}}</p>
        <button @click="addNote">Add Note</button>
        <button class="close" @click="showModal=false"> Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes </h1>
        <button  @click="showModal=true">+</button>
      </header>
      <div class="cards-container" style="color:black">
        <div :style="{backgroundColor:note.backgroundColor}" class="card" v-for="note in notes" >
          <p class="main-text">{{note.text}}</p>
          <p class="date">{{note.date.toLocaleDateString("en-US")}}</p>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped>
.overlay{
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background-color: rgba(18, 39, 32);
}
.modal{
  opacity: 1;
  position:relative;
  flex-direction: column;
  display: flex;
  height: 300px;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  
}
.modal button{
  background-color: blueviolet;
  color: white;
  cursor: pointer;
  width: 100%;
  border-radius:  10px;
  font-size: 20px;
  border: none;
  padding: 10px 20px;
  margin-top: 15px;
}
.modal .close{
 margin-top: 10 px;
  background-color: red;
 
}
.modal p{
  color: red;
}
main{
  height: 100vh;
  width: 100vw;
}
.container{
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto ;
}
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1{
  margin-bottom: 25px;
  font-size: 75px;
  font-weight: bold;
}
button{
  font-size: 25px;
  border-radius: 100%;
  cursor: pointer;
  font-weight: 50px;
  height: 50px;
  width:50px;
  border: none;
}
.card{
  height: 225px;
  width: 225px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(73, 94, 94);
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 15px;
}
.cards-container{
  display: flex;
  flex-wrap: wrap;
}
.date{

  font-weight: bold;

}
</style>