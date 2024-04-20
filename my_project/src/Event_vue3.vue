<template>
    <div>
        <h1>Hover Mouse</h1>
        <section id="contact">
            <div class="card_container">
                <div class="card" @mouseover="onLogEvent">Mouse Over</div>
                <div class="card" @mouseleave="onLogEvent">Mouse Leave</div>
                <div class="card" @dblclick="onLogEvent(e, 150, 100)">Double Click</div>
                <div class="card" @mousemove="onMouseMoveEvent">Mouse Move : {{ x }} - {{ y }}</div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let x = ref(0)
let y = ref(0)
const onLogEvent = (e, newX, newY) => {
    console.log("running event...", e);
    x.value = newX
    y.value = newY
}

const onMouseMoveEvent = (e) => {
    x.value = e.offsetX
    y.value = e.offsetY
    console.log("running mousemove event...", e)
}

</script>

<style lang="css" scoped>
* {
    box-sizing: border-box;
}

.card {
    background: rgb(115, 155, 170);
    margin-bottom: 20px;
    text-align: center;
    border-radius: 20px;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
}
</style>