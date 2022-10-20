<template>
  <main class="mx-96">
    <FoodList :infoToShow="favoriteList" />
  </main>
</template>

<script>
// @ is an alias to /src

import FoodList from "../components/FoodList.vue";

export default {
  name: "FavoriteView",
  computed: {
    favoriteList() {
      return this.$store.state.arrayFavorites;
    },
  },
  components: { FoodList },
};
</script>
