<template>
  <main>
    <ul>
      <li v-for="(value, index) in allFavorites" :key="index">
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
    allFavorites() {
      return Array.from(this.$store.state.favorites.values());
    },
  },
};
</script>
