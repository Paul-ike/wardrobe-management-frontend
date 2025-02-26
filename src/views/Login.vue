// src/views/Login.vue
<template>
  <div>
    <Header />
    <LoginForm />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import LoginForm from '../components/LoginForm.vue';

export default {
  name: 'LoginView',
  components: {
    Header,
    LoginForm
  }
}
</script>
