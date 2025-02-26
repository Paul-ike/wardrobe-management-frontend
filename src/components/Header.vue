// src/components/Header.js
<template>
  <nav class="header">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/new-item">Add New Item</router-link></li>
      <li v-if="isLoggedIn"><button @click="logout">Logout</button></li>
      <li v-else>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    isLoggedIn() {
      return localStorage.getItem('token') !== null;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}

.header ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.header li {
  display: inline;
  margin-right: 20px;
}

.header a {
  color: white;
  text-decoration: none;
}

.header button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.header button:hover {
  background-color: #3e8e41;
}
</style>
