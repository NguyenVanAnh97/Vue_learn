<template>
    <div>
        <h1>Interact Component here...</h1>

        <Card_Poke v-for="(card, index) in cardsContext" :key="index"/>
    </div>
</template>

<script setup>
    import Card_Poke from './Card_Poke.vue';
    import { defineProps } from 'vue';

    //tạo props cardsContext để nhận giá trị từ component cha Pokemont_Temp
    defineProps({
        cardsContext : {
            type: Array,
            default: function(){
                return []
            }},
        }
    )
</script>

<style lang="css" scoped>
    
</style>