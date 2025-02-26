<template>
  <div class="item-details">
    <h1>Item Details</h1>
    <p v-if="item">Name: {{ item.name }}</p>
    <p v-if="item">Category ID: {{ item.category_id }}</p>
    <p v-if="item">Description: {{ item.description }}</p>
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
    axios.get(`https://wardrobe-management-o2bd.onrender.com/clothing-items/${this.$route.params.id}`, {
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
</style>
