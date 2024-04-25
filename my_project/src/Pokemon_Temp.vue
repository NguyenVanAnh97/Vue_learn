<template>
    <div>
        <!--nếu statusMatch = default-- compoennt MainScreen hiển thị-->
        <MainScreen v-if="statusMatch === 'default'" @onStart="onHandleBeforeStart($event)" />
        <!--nếu statusMatch = match-- compoennt InteractScreen hiển thị-->
        <InteractScreen v-if="statusMatch === 'match'" :cardsContext="settings.cardContext"/>
        <!-- truyền giá trị cardContext sau khi xử lí vào props cardsContext -->
    </div>
</template>

<script setup>
import MainScreen from './components/Component_Pokemon/MainScreen.vue';
import InteractScreen from './components/Component_Pokemon/InteractScreen.vue'
import { shuffled } from "./untils/array"
import { ref } from 'vue';

const settings = {
    totalOfBlocks: ref(0),
    cardContext: [],
    startedAt: null //tính thời gian chơi
}

const statusMatch = ref("default")

const onHandleBeforeStart = (config) => {
    settings.totalOfBlocks = config.totalOfBlocks
    const firstCard = Array.from({ length: settings.totalOfBlocks / 2 }, (_, i) => i + 1);

    const secondCards = [...firstCard]

    settings.cardContext = shuffled([...firstCard, ...secondCards])
    console.log(settings.cardContext)
    settings.startedAt = new Date().getTime()

    //data ready
    statusMatch.value = "match"

}
</script>

<style lang="scss" scoped></style>