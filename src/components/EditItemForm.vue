<template>
  <div class="edit-form-container">
    <h1>Edit Item</h1>
    <form @submit.prevent="updateItem" class="edit-form" v-if="item">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="item.name" />
      </div>

      <div class="form-group">
        <label for="category">Category:</label>
        <select id="category" v-model="item.category_id">
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="item.description" />
      </div>

      <button type="submit" class="submit-button">Update Item</button>
    </form>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import axios from 'axios';
import { useToast } from 'vue-toastification';

export default {
  name: 'EditItemForm',
  props: {
    item: Object
  },
  data() {
    return {
      categories: [] // Store categories
    };
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  mounted() {
    this.fetchCategories(); // Load categories when component mounts
  },
  methods: {
    fetchCategories() {
      axios.get('https://wardrobe-management-o2bd.onrender.com/api/categories', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(response => {
        this.categories = response.data; 
      })
      .catch(() => {
        this.toast.error('Failed to load categories');
      });
    },
    updateItem() {
      if (!this.item) return; 

      axios.put(`https://wardrobe-management-o2bd.onrender.com/api/clothing-items/${this.item.id}`, this.item, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(() => {
        this.toast.success('Item updated successfully!');
        this.$router.push({ name: 'itemDetails', params: { id: this.item.id } });
      })
      .catch(error => {
        console.error(error);
        this.toast.error('Failed to update item!');
      });
    }
  }
}
</script>

<style scoped>
.edit-form-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.edit-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 10px;
}

.form-group input, .form-group textarea, .form-group select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #3e8e41;
}
</style>
