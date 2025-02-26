<template>
    <nav class="header">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/new-item">New Item</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .header {
    background-color: #333;
    color: white;
    padding: 1em;
    text-align: center;
  }
  
  .header ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .header li {
    display: inline-block;
    margin-right: 20px;
  }
  
  .header a {
    color: white;
    text-decoration: none;
  }
  
  .header a:hover {
    color: #ccc;
  }
  </style>
  