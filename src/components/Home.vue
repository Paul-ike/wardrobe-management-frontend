<template>
  <div class="home">
    <h1>Clothing Items</h1>
    <ul class="item-list">
      <li v-for="item in items" :key="item.id">
        {{ item.name }} ({{ item.category_id }})
        <router-link :to="{ name: 'itemDetails', params: { id: item.id } }">View Details</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      items: []
    }
  },
  mounted() {
    axios.get('https://wardrobe-management-o2bd.onrender.com/api/clothing-items', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      this.items = response.data;
    })
    .catch(error => {
      console.error(error);
    });
  }
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 40px auto;
}

.item-list {
  list-style-type: none;
  padding: 0;
}

.item-list li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.item-list li:last-child {
  border-bottom: none;
}

.item-list a {
  color: #4CAF50;
  text-decoration: none;
}

.item-list a:hover {
  color: #3e8e41;
}
</style>
