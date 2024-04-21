<template>
    <div class="otherInfo">
        <p>Income : {{ inCome }}</p>
        <p>Year Founded: {{ yearOfEstablishment }}</p>
    </div>
</template>

<script setup>
    defineProps({
        inCome: String,
        yearOfEstablishment: Number
    });
</script>

<style lang="css" scoped>
 .otherInfo {
    background: #4e7371;
    color: #fff;
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 10px; 
 }

 .otherInfo > p {
    margin-bottom: 14px;
 }
</style>