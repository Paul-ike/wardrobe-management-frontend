<template>
  <div class="new-item-form">
    <h1>Add New Item</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="category_id">Category ID:</label>
        <input type="number" id="category_id" v-model="category_id" required>
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="description"></textarea>
      </div>
      <button type="submit" class="btn">Add Item</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'NewItemForm',
  data() {
    return {
      name: '',
      category_id: '',
      description: ''
    }
  },
  methods: {
    submitForm() {
      axios.post('https://wardrobe-management-o2bd.onrender.com/api/clothing-items', {
        name: this.name,
        category_id: this.category_id,
        description: this.description
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(() => {
        this.$router.push('/');
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
}
</script>

<style scoped>
.new-item-form {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
}

input[type="text"], input[type="number"] {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
}

textarea {
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #ccc;
}

.btn {
  width: 100%;
  height: 40px;
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #3e8e41;
}
</style>
