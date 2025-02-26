<template>
  <div class="login-form">
    <h1>Login</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { useToast } from 'vue-toastification';

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  setup() {
    const toast = useToast();

    return { toast };
  },
  methods: {
    submitForm() {
      axios.post('https://wardrobe-management-o2bd.onrender.com/api/login', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        // Handle successful login
        localStorage.setItem('token', response.data.access_token);
        this.toast.success('Login successful'); // Use toast directly
        this.$router.push('/');
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.toast.error('Invalid email or password'); // Use toast directly
        } else {
          this.toast.error('Login failed'); // Use toast directly
        }
      });
    }
  }
}
</script>

<style scoped>
.login-form {
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

input[type="email"], input[type="password"] {
  width: 95%;
  height: 40px;
  margin-bottom: 20px;
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
