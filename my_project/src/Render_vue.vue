<template>
  <div>
    <h1 align="center">Render Component</h1>
    <div class="card-product card-container"> <!-- filter theo price > 200.00 bằng computed -->
      <div class="info" v-for="item in companyComputed" :key="item.name"
        :class="{ purchase_car: item.isPurcharse.value }" @dblclick="onToggleCart($event, item)">
        <img class="card-thumb" :src="item.thumb" :height="heightImg" :width="widthImg" />
        <h3>
          Company: <span :style="{ color: item.name ? 'red' : '' }"> {{ item.name }}</span>
        </h3>
        <p>
          Price:
          <span :style="{ color: item.price >= 200.0 ? 'yellow' : '' }" style="font-weight: bold">{{
            item.price
          }}</span>
        </p>

        <hr />
        <TitleCompany :inCome="item.inComeCpn" :yearOfEstablishment="item.yearOfEstablishmentCpn" />
      </div>
    </div>
  </div>
  <div class="Model_section">
    <Teleport to="body">
      <ModelVue v-if="isShowModal" :title_header="'This is the title from Component'" :content_body="'Content MODAL'"
        @cancel="onToggleModal">
        <label for="">Name</label>
        <input type="password">
      </ModelVue>

      <button @click="onToggleModal" class="Toggle_modal">Toggle modal</button>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import TitleCompany from './TitleCompany.vue';
import ModelVue from './components/Component_example/Modal_Vue.vue';
let widthImg = 150,
  heightImg = 100
let product = [
  {
    name: 'Toyota',
    price: 220.000,
    thumb: 'src/assets/toyota.png',
    isPurcharse: ref(true),
    inComeCpn: "256,7B $",
    yearOfEstablishmentCpn: 1920
  },
  {
    name: 'Hyndai',
    price: 200.000,
    thumb: 'src/assets/huyndai.png',
    isPurcharse: ref(false),
    inComeCpn: "194,7B $",
    yearOfEstablishmentCpn: 1967
  },
  {
    name: 'Honda',
    price: 250.000,
    thumb: 'src/assets/honda.png',
    isPurcharse: ref(false),
    inComeCpn: "95,7B $",
    yearOfEstablishmentCpn: 1948

  },
  {
    name: 'Mazda',
    price: 180.000,
    thumb: 'src/assets/mazda.png',
    isPurcharse: ref(false),
    inComeCpn: "30,7B $",
    yearOfEstablishmentCpn: 1920
  },
  {
    name: 'KIA',
    price: 190.000,
    thumb: 'src/assets/kia.png',
    isPurcharse: ref(false),
    inComeCpn: "105,7B $",
    yearOfEstablishmentCpn: 1944
  }
]

let onToggleCart = (event, product) => {
  product.isPurcharse.value = !product.isPurcharse.value
}

let isShowModal = ref(false);

const filterPrice = (items) => {
  return items.filter((item) => item.price > 150.000)
}

let companyComputed = computed(() => {
  return filterPrice(product)
})

let onToggleModal = () => {
  isShowModal.value = !isShowModal.value
}

</script>

<style lang="css" scoped>
* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

h1 {
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-top: 10px;
  color: steelblue;
}

.info {
  background: #8a6565;
  color: #fff;
  padding: 20px 30px;
  border-radius: 15px;
  cursor: pointer;
}

.info.purchase_car {
  background: rgb(145, 90, 135);
}

hr {
  margin-bottom: 0;
}

h3 {
  margin: 0 0 10px;
}

.card-thumb {
  background-color: #fff;
  padding: 5px 5px;
  border-radius: 10px;
  margin-bottom: 15px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.test {
  color: turquoise;
}

.Toggle_modal {
  padding: 10px 10px;
  margin-top: 20px;
  cursor: pointer;
}
</style>