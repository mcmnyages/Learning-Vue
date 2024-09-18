<script setup>
import { defineProps,} from 'vue';
const {questionStatus, barPercentage} = defineProps(["questionStatus","barPercentage"])
</script>


<template>
    <header>
        <h4>Question {{questionStatus}}</h4> 
        <div class="bar">
            <div class="completion" :style="{width:barPercentage}"></div>
            
        </div>
    </header>
</template>
<style scoped>
header{
    margin-top: 20px;
}

header h4{
    font-size: 30px;
}
.bar{
    height: 50px;
    width: 300px;
    border: 3px solid green;
    margin-left: 450px;
}

.completion{
    height: 100%;
    background-color: green;
}

</style>
