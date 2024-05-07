<template>
    <div>
        <nav class="nav">

            <RouterLink :to="{ name: 'overview-route' }">Overview</RouterLink>
            <RouterLink :to="{ name: 'transaction-route' }">Transactions</RouterLink>
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

nav>a {
    margin-right: 10px;
}
</style>