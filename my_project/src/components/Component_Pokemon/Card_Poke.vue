<template>
    <div class="card">
        <div class="card__inner" :class="{ 'is-flipped': isFlipped }" @click="onToggleFlipCard">
            <div class="card__face card__face--front">
                <div class="cart__content">

                </div>
            </div>
            <div class="card__face card__face--back">
                <div class="cart__content" :style="{ backgroundImage: `url('${('/src/assets/' + imgBackFaceUrl)}')` }">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

//tạo props imgBackFaceUrl để nhận giá trị từ component cha InteractScreen => lấy đường dẫn ảnh
defineProps({
    imgBackFaceUrl: { type: String, required: true }
})
const isFlipped = ref(false)

const onToggleFlipCard = () => {
    isFlipped.value = !isFlipped.value
}
</script>

<style lang="css" scoped>
.card {
    display: inline-block;
    margin-right: 3rem;
    margin-bottom: 3rem;
    width: 90px;
    height: 120px;
}

.card__inner {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;

}

.card__inner.is-flipped {
    transform: rotateY(-180deg);

}

.card__face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 3px 18px 3px rgba(0, 0, 0, 0.2);
}

.card__face--front .cart__content {
    background: url("../../assets/images_pokemon/icon_back.png") no-repeat center center;
    background-size: 50px auto;
    width: 100%;
    height: 100%;
}

.card__face--back {
    left: -35px;
    transform: rotateY(180deg);
}

.card__face--back .cart__content {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
}
</style>