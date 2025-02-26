<template>
  <div>
    <Header />
    <RegisterForm />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import RegisterForm from '../components/RegisterForm.vue';

export default {
  name: 'RegisterView',
  components: {
    Header,
    RegisterForm
  }
}
</script>
