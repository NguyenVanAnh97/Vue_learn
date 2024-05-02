<template>
    <div class="screen">
        <div class="screen__inner" :style="{
            width: `${((((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4 +
                    16) *
                Math.sqrt(cardsContext.length)
                }px`,
        }">
            <Card_Poke v-for="(card, index) in cardsContext" :key="index" :imgBackFaceUrl="`images_pokemon/${card}.png`"
                :card="{ index, value: card }" @onFlip="checkRule($event)" :ref="`card-${index}`"
                :cardsContext="cardsContext" />

        </div>
    </div>
</template>

<script>
import Card_Poke from './Card_Poke.vue';

export default {
    props: {
        cardsContext: {
            type: Array,
            default: function () {
                return []
            },
        },
    },
    components: {
        Card_Poke
    },
    data() {
        return {
            rules: []
        }
    },
    methods: {
        checkRule(card) {
            if (this.rules.length == 2) return false
            this.rules.push(card)
            //console.log(this.rules)


            if (this.rules.length == 2 && this.rules[0].value === this.rules[1].value) {
                this.$refs[`card-${this.rules[0].index}`][0].onEnableDisabledMode()
                this.$refs[`card-${this.rules[1].index}`][0].onEnableDisabledMode()

                this.rules = []

                const disabledElemements = document.querySelectorAll(".screen .card.disabled");
                if (disabledElemements && disabledElemements.length === this.cardsContext.length - 2) {
                    setTimeout(() => {
                        this.$emit("onFinish")
                    }, 920);
                }
            } else if (this.rules.length == 2 && this.rules[0].value !== this.rules[1].value) {
                console.log("Wrong...");
                // đóng hai thẻ nếu chọn sai

                setTimeout(() => {
                    this.$refs[`card-${this.rules[0].index}`][0].onFlipBackCard()
                    this.$refs[`card-${this.rules[1].index}`][0].onFlipBackCard()

                    this.rules = []
                }, 700);
            } else {
                return false
            }
        }


    },


}

</script>

<style lang="css" scoped>
.screen {
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: var(--dark);
    color: var(--light);
}

.screen__inner {
    width: 424px;
    display: flex;
    flex-wrap: wrap;
    margin: 2rem auto;
}
</style>