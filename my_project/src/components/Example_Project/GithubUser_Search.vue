<template>
    <div class="user_profile">
         <h1>Github User</h1>

         <input type="text" v-model="username" class="input" placeholder="Enter username"/>
         <div v-if="userProfile">
            <h2>{{ userProfile.login }}</h2>
            <p class="bio">{{ userProfile.bio }}</p>
            <p class="location">{{ userProfile.location }}</p>
            <p class="followers">{{ userProfile.followers }} followers | {{ userProfile.following }} following | {{ userProfile.public_repos }} repos</p>
            <img :src="userProfile.avatar_url" :alt="userProfile.login">
         </div>
        <div v-else>
            <p><strong>{{ error }}</strong></p>
        </div>
        <button @click="getUserProfile">Search</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const username = ref('');
    const userProfile = ref(null);
    const error = ref(null);

    const getUserProfile = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${username.value}`);
            const data = await response.json()
            if (response.ok) {
               userProfile.value = data
               error.value = null
            }else {
                userProfile.value = null
                error.value = `Error: ${data.message}`
            }
            
        } catch (error) {
            console.error('Error fetching user profile:', error);
            error.value = 'Error fetching user profile';
        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    h1 {
        margin-top: 20px;
        font-size: 36px;
        font-weight: 300;
        color: #4CAF50;
        margin-bottom: 20px;
    }

    h2 {
        margin-top: 20px;
        font-size: 34px;
        font-weight: 300;
        color: #4CAF50;
        margin-bottom: 20px;
    }

    .location {
        margin-bottom: 20px;
        font-weight: 300;
        font-size: 20px;
        color: #555;    
    }

    .bio {
        margin-bottom: 20px;
        font-weight: 300;
        font-size: 20px;
        color: #555;
    }

    .followers {
        margin-bottom: 20px;
        font-weight: 300;
        font-size: 20px;
        color: #555;
    }

    .input {
        width: 70%;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 20px;
        outline: none;
        font-size: 20px;
        font-weight: 300;
    }

    .user_profile {
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 800px;
        text-align: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    .user_profile h2 {
        margin-top: 20px;
        color: #4CAF50;
        font-size: 34px;
    }

    .user_profile img {
        width: 300px;
        height: 300px;
        border-radius: 50%;
    }

    .user_profile button {
        margin-top: 20px;
        padding: 10px 30px;
        border: none;
        border-radius: 5px;
        background-color: #4CAF50;
        color: #fff;
        cursor: pointer;
    }
</style>