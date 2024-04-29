<template>
    <div>
        <h1>Interact Component here...</h1>

        <Card_Poke v-for="(card, index) in cardsContext" :key="index" :imgBackFaceUrl="`images_pokemon/${card}.png`"
            :card="{ index, value: card }" @onFlip="checkRule($event)" :ref="`card-${index}`" />
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
            console.log(this.rules)
            console.log(this.$refs[`card-${this.rules[0].index}`])

            if (this.rules.length == 2 && this.rules[0].value === this.rules[1].value) {
                console.log("Right...", this.rules[0].value)
            } else if (this.rules.length == 2 && this.rules[0].value !== this.rules[1].value) {
                console.log("Wrong...");
                // đóng hai thẻ nếu chọn sai

                this.$refs[`card-${this.rules[0].index}`][0].onFlipBackCard()
                this.$refs[`card-${this.rules[1].index}`][0].onFlipBackCard()




                this.rules = []
            } else {
                return false
            }
        }

        
    },

   
}

</script>

<style lang="css" scoped></style>