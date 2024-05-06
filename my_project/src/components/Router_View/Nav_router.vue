<template>
    <div>
        <nav class="nav">
  
            <RouterLink to="/">Overview</RouterLink>
            <RouterLink to="/transaction">Transactions</RouterLink>
            <RouterLink to="/">Budgets</RouterLink>
            <RouterLink to="/">Reports</RouterLink>
            <RouterLink to="/">Settings</RouterLink>

        </nav>
    </div>
</template>

<script setup>

</script>

<style scoped>
* {
    padding-top: 30px;
}
 nav > a {
    margin-right: 10px;
 }
</style>