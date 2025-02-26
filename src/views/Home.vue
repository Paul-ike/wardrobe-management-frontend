<template>
  <div>
    <Header />
    <Home />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Home from '../components/Home.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    Home
  }
}
</script>
