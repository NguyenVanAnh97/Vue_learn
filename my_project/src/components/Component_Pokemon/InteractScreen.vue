<template>
    <div>
        <h1>Interact Component here...</h1>

        <Card_Poke v-for="(card, index) in cardsContext" :key="index" :imgBackFaceUrl="`images_pokemon/${card}.png`" />
    </div>
</template>

<script setup>
import Card_Poke from './Card_Poke.vue';

//tạo props cardsContext để nhận giá trị từ component cha Pokemont_Temp
defineProps({
    cardsContext: { type: Array, default: () => [] }
}
)

</script>

<style lang="css" scoped></style>