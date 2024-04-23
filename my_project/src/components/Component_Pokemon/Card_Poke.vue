<template>
    <div class="card">
        <div class="card__inner">
            <div class="card__face card__face--front">
                <div class="cart__content">
                        Front
                </div>
            </div>
            <div class="card__face card__face--back">
                <div class="cart__content">
                        Back
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
    .card {
        display: inline-block;
        margin-right: 1rem;
        margin-bottom: 1rem;
    }

    .card__inner {
        width: 100%;
        height: 100%;
        transition: transfrom 1s;
        transform-style: preserve-3d;
        cursor: pointer;
        position: relative;
    }
</style>