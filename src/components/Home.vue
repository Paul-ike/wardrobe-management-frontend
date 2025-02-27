<template>
  <div class="home">
    <h1>Clothing Items</h1>

    <!-- Search and Filter -->
    <div class="filters">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Search by name..." 
        @input="fetchItems"
      />
      
      <select v-model="selectedCategory" @change="fetchItems">
        <option value="">All Categories</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
    </div>

    <ul class="item-list">
      <li v-for="item in filteredItems" :key="item.id">
        {{ item.name }} ({{ item.category_id }})
        <router-link :to="{ name: 'itemDetails', params: { id: item.id } }">View Details</router-link>
        <button @click="deleteItem(item.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { useToast } from 'vue-toastification';

export default {
  name: 'Home',
  data() {
    return {
      items: [], // Holds all items from API
      categories: [],
      searchQuery: "",
      selectedCategory: ""
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => 
        (!this.selectedCategory || item.category_id == this.selectedCategory) &&
        (!this.searchQuery || item.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
      );
    }
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  mounted() {
    this.fetchItems();
    this.fetchCategories();
  },
  methods: {
    fetchItems() {
      axios.get('https://wardrobe-management-o2bd.onrender.com/api/clothing-items', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .then(response => {
        this.items = response.data; // Store all items for filtering
      })
      .catch(error => {
        console.error(error);
        this.toast.error('Failed to fetch items');
      });
    },
    fetchCategories() {
      axios.get('https://wardrobe-management-o2bd.onrender.com/api/categories')
      .then(response => {
        this.categories = response.data;
      })
      .catch(error => {
        console.error(error);
        this.toast.error('Failed to fetch categories');
      });
    },
    deleteItem(id) {
      axios.delete(`https://wardrobe-management-o2bd.onrender.com/api/clothing-items/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .then(() => {
        this.items = this.items.filter(item => item.id !== id);
        this.toast.success('Item deleted successfully');
      })
      .catch(error => {
        console.error(error);
        this.toast.error('Failed to delete item');
      });
    }
  }
};
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 40px auto;
}

.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.filters input, 
.filters select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
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

.item-list button {
  margin-left: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.item-list button:hover {
  background-color: #e91e63;
}
</style>
