<template>
  <main class="mx-96">
    <FoodList :infoToShow="favorites" />
  </main>
</template>

<script>
// @ is an alias to /src

import FoodList from "../components/FoodList.vue";

export default {
  name: "FavoriteView",
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
  },
  components: { FoodList },
};
</script>
