// src/views/NewItem.vue
<template>
  <div>
    <Header />
    <NewItemForm />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import NewItemForm from '../components/NewItemForm.vue';

export default {
  name: 'NewItemView',
  components: {
    Header,
    NewItemForm
  }
}
</script>
