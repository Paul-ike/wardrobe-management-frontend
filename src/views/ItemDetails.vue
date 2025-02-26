<template>
  <div>
    <Header />
    <ItemDetails />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import ItemDetails from '../components/ItemDetails.vue';

export default {
  name: 'ItemDetailsView',
  components: {
    Header,
    ItemDetails
  }
}
</script>
