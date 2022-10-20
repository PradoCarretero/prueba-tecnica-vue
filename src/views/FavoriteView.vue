<template>
  <main class="mx-[25%] my-32">
    <h2
      class="text-3xl border-b-2 border-black mb-7"
      v-for="(favCategorie, index) in allFavCategories"
      :key="index"
    >
      <div>{{ favCategorie }}</div>
    </h2>
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
      return this.$store.state.favorites;
    },
    allFavCategories() {
      const data = Array.from(this.$store.state.favorites);
      const result = data.reduce((acc, item) => {
        if (!acc.includes(item.strCategory)) {
          acc.push(item.strCategory);
        }
        return acc;
      }, []);
      return result;
    },
    matchCategories() {},
  },
  components: { FoodList },
};
</script>
