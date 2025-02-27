<template>
    <div>
      <h1>Edit Item</h1>
      <EditItemForm v-if="item" :item="item" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import EditItemForm from '../components/EditItemForm.vue';
  
  export default {
    name: 'EditItem',
    components: { EditItemForm },
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
  