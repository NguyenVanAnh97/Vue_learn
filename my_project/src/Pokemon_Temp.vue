<template>
    <div>
        <MainScreen v-if="statusMatch === 'default'" @onStart="onHandleBeforeStart($event)"/>
        <InteractScreen v-if="statusMatch === 'match'"/>
    </div>
</template>

<script setup>
import MainScreen from './components/Component_Pokemon/MainScreen.vue';
import InteractScreen from './components/Component_Pokemon/InteractScreen.vue'
import { ref } from 'vue';

const statusMatch = ref("default")

const onHandleBeforeStart = (config) => {
    console.log("running", config);
    statusMatch.value = "match"
}
</script>

<style lang="scss" scoped>

</style>