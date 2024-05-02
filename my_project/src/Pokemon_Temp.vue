<template>
    <div>
        <!--nếu statusMatch = default-- compoennt MainScreen hiển thị-->
        <MainScreen v-if="statusMatch === 'default'" @onStart="onHandleBeforeStart($event)" />
        <!--nếu statusMatch = match-- compoennt InteractScreen hiển thị-->
        <InteractScreen v-if="statusMatch === 'match'" :cardsContext="settings.cardContext" @onFinish="onGetResult" />
        <!-- props cardsContext chứa mảng đã mixing để render ra danh sách các block từ dữ liệu settings-->
        <!-- truyền giá trị cardContext sau khi xử lí vào props cardsContext -->
        <ResultScreen v-if="statusMatch === 'result'" :timer="timer" @onStartAgain="playAgain" />
        <CoppyRightScreen />
    </div>
</template>

<script setup>

import MainScreen from './components/Component_Pokemon/MainScreen.vue'
import InteractScreen from './components/Component_Pokemon/InteractScreen.vue'
import ResultScreen from './components/Component_Pokemon/ResultScreen.vue'
import CoppyRightScreen from './components/Component_Pokemon/CoppyRightScreen.vue'
import { shuffled } from "./untils/array"
import { ref } from 'vue'

const settings = {
    totalOfBlocks: ref(0),
    cardContext: [], // mảng chứa các block 
    startedAt: null, //tính thời gian chơi
}

const statusMatch = ref("default")

const timer = ref(0)


// NHẬN số block thông qua đối số config được truyền vào component MainScreen
// từ đó tạo ra mảng với số lượng block tương đương với đối số / 2 => để tạo ra mảng có 2 phẩn tử trùng nhau trong mảng
const onHandleBeforeStart = (config) => {
    settings.totalOfBlocks = config.totalOfBlocks
    const firstCard = Array.from({ length: settings.totalOfBlocks / 2 }, (_, i) => i + 1);

    const secondCards = [...firstCard]

    settings.cardContext = shuffled([...firstCard, ...secondCards])
    //console.log(settings.cardContext)
    settings.startedAt = new Date().getTime()

    //data ready
    statusMatch.value = "match"

}

const onGetResult = () => {
    timer.value = new Date().getTime() - settings.startedAt
    statusMatch.value = "result"
}

const playAgain = () => {
    statusMatch.value = "default"
}
</script>

<style lang="css" scoped>


</style>