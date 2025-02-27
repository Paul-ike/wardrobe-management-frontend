<template>
  <div class="item-details">
    <h1>Item Details</h1>
    <p v-if="item">Name: {{ item.name }}</p>
    <p v-if="item">Category ID: {{ item.category_id }}</p>
    <p v-if="item">Description: {{ item.description }}</p>
    <router-link 
      v-if="item" 
      :to="{ name: 'editItem', params: { id: item.id } }" 
      class="edit-button"
    >
      Edit Item
    </router-link>
    <router-link to="/" class="back-button">Back to Home</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ItemDetails',
  data() {
    return {
      item: null
    }
  },
  mounted() {
    axios.get(`https://wardrobe-management-o2bd.onrender.com/api/clothing-items/${this.$route.params.id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      this.item = response.data;
    })
    .catch(error => {
      console.error(error);
    });
  }
}
</script>

<style scoped>
.item-details {
  max-width: 800px;
  margin: 40px auto;
}

.item-details p {
  margin-bottom: 20px;
}

.edit-button {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  transition: background 0.3s;
  margin-right: 10px;
}

.edit-button:hover {
  background-color: #3e8e41;
}

.back-button {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  transition: background 0.3s;
}

.back-button:hover {
  background-color: #3e8e41;
}
</style>
