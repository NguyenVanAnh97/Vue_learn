<template>
    <div>
        <h1>List Player</h1>
        <input type="text" v-model="searchTetx" />
        <ul v-for="player in playerFilled" :key="player">
            <li>{{ player }}</li>
        </ul>
    </div>
</template>

<script setup>
import { reactive, computed, ref, watch, watchEffect } from 'vue';

const listPlayer = reactive(["Ronaldo", "Messi", "Neymar", "Mbappe"])
const searchTetx = ref("")

const playerLowerCase = listPlayer.map(player => player.toLowerCase());
const playerFilled = computed(() =>
    playerLowerCase.filter(player =>
        player.includes(searchTetx.value.toLowerCase())

    ).map(player => {
        return player.charAt(0).toUpperCase() + player.slice(1);
        //tạo một mảng mơi bằng map => biến đổi mỗi player với kí tự đầu tiên sẽ viết hoa  +
        //kí tự thứ 2 đến hết (player.slice(1) sẽ loại bỏ kí từ đầu tiên( Lấy phần còn lại của từ (từ vị trí thứ hai trở đi)))
    })
)

watch(searchTetx, (newValue, oldValue) => {
    console.log(newValue,oldValue)
})

watchEffect(() => {
    if (searchTetx.value) {
        console.log("running effect");
    }
})
</script>

<style scoped></style>