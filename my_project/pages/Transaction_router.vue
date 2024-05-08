<template>
  <div>
    <!-- Component hiển thị danh sách transaction từ server, 
    mỗi transaction sẽ có link để vào chi tiết transaction-->

    <h1>Transaction is here</h1>
    <div v-if="transaction.length">
      <div class="item" v-for="item in transaction" :key="item.id">
        <RouterLink :to="{ name: 'transaction-detail-route', params: { id: item.id } }">{{
          item.named
        }}</RouterLink>
        <div class="price">Price: {{ item.price }}</div>
      </div>
    </div>
    <div v-else>Loading Transaction</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

/**
 * transaction: Danh sách transaction từ server
 */
const transaction = ref([]);
// Lấy dữ liệu từ server
// Bắt lỗi và xử lý theo nhu cầu của ứng dụng
const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3000/transactions/')
    if (!response.ok) {
      throw new Error('Lỗi kìa 3')
    }
    const data = await response.json()
    transaction.value = data

    //console.log(transaction.value);
  } catch (error) {
    console.error(error)
    // Xử lý lỗi nếu có
    throw error;
  }
};

onMounted(() => {
  fetchData();
})


// Dữ liệu sẽ được fetch ngay khi component được mounted, giúp hiển thị dữ liệu người dùng nhanh chóng.
//Thông thường, việc fetch dữ liệu trong onMounted phù hợp với trường hợp cần hiển thị dữ liệu ngay khi component được render.
// hoặc gọi trong khi người dùng click vào 1 nút mới gọi, tránh lãng phí tài nguyên
/* const handleFetchData = () => {
    fetchData();
  };
*/
</script>

<style scoped></style>
