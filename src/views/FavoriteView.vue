<template>
  <main>
    <h2 v-for="(favCategories, index) in allFavCategories" :key="index">
      {{ favCategories }}
    </h2>
    <ul>
      <li v-for="(value, index) in favoritesArray" :key="index">
        <h3>{{ value.strMeal }}</h3>
        <p>{{ value.strCategory }}</p>
        <i class="fa-regular fa-eye"></i>
        <img class="img" :src="value.strMealThumb" />
      </li>
    </ul>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "SearchView",
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
    favoritesArray() {
      return Array.from(this.$store.state.favorites.values());
    },
    allFavCategories() {
      const data = Array.from(this.$store.state.favorites.values());
      const result = data.reduce((acc, item) => {
        if (!acc.includes(item.strCategory)) {
          acc.push(item.strCategory);
        }
        return acc;
      }, []);
      return result;
    },
  },
};
</script>
<style scoped>
.img {
  width: 100px;
}
</style>
