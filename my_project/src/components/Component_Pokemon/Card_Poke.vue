<template>
  <div class="card" :class="{ disabled: isDisabled }" :style="{
      height: `${(920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16}px`,
      width: `${
        (((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4
      }px`,
      perspective: `${
        ((((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4) * 2
      }px`,
    }">
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

<script>
export default {
  props: {
    card: {
      type: [Array, String, Number, Object],
    },
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
    imgBackFaceUrl: {
      type: String,
      required: true,
    },
    rules: {
      type: Array,
    },
  },
  data() {
    return {
      isFlipped: false,
      isDisabled: false,
    };
  },
  methods: {
    onToggleFlipCard() {
      if (this.isDisabled) return false;
      this.isFlipped = !this.isFlipped;
      this.$emit("onFlip", this.card);
    },

    onFlipBackCard() {
      this.isFlipped = false;
    },

    onEnableDisabledMode() {
      this.isDisabled = true;
    },
  },
};
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

.card.disabled .card__inner {
  cursor: default;
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