// src/components/RegisterForm.vue
<template>
  <div class="register-form">
    <h1>Register</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required>
      </div>
      <button type="submit" class="btn">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { useToast } from 'vue-toastification';

export default {
  name: 'RegisterForm',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  setup() {
    const toast = useToast();

    return { toast };
  },
  methods: {
    submitForm() {
      if (this.password !== this.confirmPassword) {
        this.toast.error('Passwords do not match');
        return;
      }

      axios.post('https://wardrobe-management-o2bd.onrender.com/api/register', {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.confirmPassword
      })
      .then(() => {
        this.toast.success('Registration successful');
        this.$router.push('/login');
      })
      .catch(error => {
        if (error.response.status === 422) {
          if (error.response.data.errors.email) {
            this.toast.error('Email already exists');
          } else {
            this.toast.error('Registration failed');
          }
        } else {
          this.toast.error('Registration failed');
        }
      });
    }
  }
}
</script>

<style scoped>
.register-form {
  max-width: 400px; 
  margin: 20px auto;
  padding: 15px; 
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px; /* Less spacing between inputs */
}

label {
  display: block;
  margin-bottom: 10px;
}

input[type="text"], 
input[type="email"], 
input[type="password"] {
  width: 95%;
  padding: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.btn {
  width: 100%;
  font-size: 14px;
  height: 35px;
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
