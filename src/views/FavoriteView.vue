<template>
  <main class="mx-96">
    <!-- <FoodList :infoToShow="favoriteList" /> -->
    <FoodList :infoToShow="this.$store.state.foodList" />
  </main>
</template>

<script>
// @ is an alias to /src

import FoodList from "../components/FoodList.vue";

export default {
  name: "FavoriteView",
  computed: {
    favoriteList() {
      const favoriteListClean = this.$store.state.favorites.map(
        (item) => item.value
      );
      return favoriteListClean;
    },
  },
  components: { FoodList },
};
</script>
