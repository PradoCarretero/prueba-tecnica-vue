<template>
  <ul v-if="result">
    <li v-for="(item, index) in foodList" :key="index">
      <h3>{{ item.strMeal }}</h3>
      <p>{{ item.strCategory }}</p>
      <i class="fa-regular fa-eye"></i>
      <i
        v-if="favorites.has(item.idMeal)"
        v-on:click="removeFavorite(item)"
        class="fa-solid fa-heart"
      ></i>
      <i
        v-else
        v-on:click="addFavoriteItem(item)"
        class="fa-regular fa-heart"
      ></i>
      <img class="img" :src="item.strMealThumb" />
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src

export default {
  name: "FoodList",
  computed: {
    foodList() {
      return this.$store.state.foodList;
    },

    favorites() {
      return this.$store.state.favorites;
    },
    result() {
      return this.$store.state.result;
    },
  },
  components: {},
  data: function () {
    return {};
  },

  methods: {
    addFavoriteItem(item) {
      this.$store.commit("addFavorite", item);
    },
    removeFavorite(item) {
      this.$store.state.favorites.delete(item.idMeal);
    },
  },
};
</script>

<style scoped>
.img {
  width: 100px;
}
</style>
